"use client";

import { useEffect, useRef, useState } from "react";
import { IconQuote } from "./icons";

type Item = { q: string; a: string; cite: string };

// Interactive signer assistant on the phone: pick a question, watch it answer with its citation.
// Server-rendered with the first answer already shown, so it reads fine without JavaScript.
export function AskDemo({ items, label, typing }: { items: Item[]; label: string; typing: string }) {
  const [active, setActive] = useState(0);
  const [thinking, setThinking] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function ask(i: number) {
    if (i === active && !thinking) return;
    setActive(i);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setThinking(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setThinking(false), 900);
  }

  const it = items[active];
  return (
    <div className="ask">
      <p className="qa-q" key={`q-${active}`}>
        {it.q}
      </p>
      <div className="ask-answer" aria-live="polite">
        {thinking ? (
          <div className="qa-a typing" aria-label={typing}>
            <span />
            <span />
            <span />
          </div>
        ) : (
          <div className="qa-a pop" key={`a-${active}`}>
            <p>{it.a}</p>
            <span className="cite">
              <IconQuote />
              {it.cite}
            </span>
          </div>
        )}
      </div>
      <div className="ask-chips" role="group" aria-label={label}>
        {items.map((x, i) => (
          <button key={x.q} type="button" className="chip" aria-pressed={i === active} onClick={() => ask(i)}>
            {x.q}
          </button>
        ))}
      </div>
    </div>
  );
}
