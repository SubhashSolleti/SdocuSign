"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheckSeal } from "./icons";

type Sig = { name: string; at: string };

// Replays the verifier's real report on the sample file: each signature's three checks
// tick through, then the long-term-valid verdict. Server-rendered in the finished state.
export function VerifyDemo({
  sigs,
  t,
}: {
  sigs: Sig[];
  t: { replay: string; checking: string; checks: string[]; live: string; lt: string; signer: string; sealedAt: string; result: string };
}) {
  // step counts finished checks across all rows; full = everything done.
  const full = sigs.length * (t.checks.length + 1);
  const [step, setStep] = useState(full);
  const [announce, setAnnounce] = useState("");
  const box = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const played = useRef(false);

  function run() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(full);
      setAnnounce(t.live);
      return;
    }
    if (timer.current) clearInterval(timer.current);
    setAnnounce("");
    setStep(0);
    let s = 0;
    timer.current = setInterval(() => {
      s += 1;
      setStep(s);
      if (s >= full && timer.current) {
        clearInterval(timer.current);
        setAnnounce(t.live);
      }
    }, 380);
  }

  // Play once, the first time the report scrolls into view.
  useEffect(() => {
    const el = box.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played.current) {
          played.current = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const per = t.checks.length + 1;
  return (
    <div ref={box}>
      <table>
        <thead>
          <tr>
            <th scope="col">{t.signer}</th>
            <th scope="col">{t.sealedAt}</th>
            <th scope="col">{t.result}</th>
          </tr>
        </thead>
        <tbody>
          {sigs.map((s, row) => {
            const done = step - row * per; // checks finished for this row
            return (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td className="mono ltr">{s.at}</td>
                <td>
                  <ul className="checks">
                    {t.checks.map((c, i) => (
                      <li key={c} className={done > i ? "ok" : done === i ? "busy" : "wait"}>
                        <IconCheckSeal />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className={done >= per ? "verdict ok" : "verdict wait"}>
                    {done >= per ? t.lt : `${t.checking}…`}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="replay-row">
        <button type="button" className="btn btn-secondary btn-small" onClick={run}>
          {t.replay}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {announce}
        </span>
      </div>
    </div>
  );
}
