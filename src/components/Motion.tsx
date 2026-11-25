"use client";

import { useEffect } from "react";

/*
  One small motion engine for the whole page (no animation library).
  - Scroll scenes  [data-scene]  get CSS variables (--p and friends) from one rAF loop.
  - Reveals        [data-reveal] fade/slide in once, via IntersectionObserver.
  - 3D tilt        [data-tilt]   follows a fine pointer (mouse/trackpad) only.
  Progressive enhancement: nothing is hidden or pinned until this runs and adds
  `motion-ready` to <html>. With prefers-reduced-motion it never adds it, so the
  page stays fully static and complete.
*/

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    // Reveal elements already in view *before* enabling hidden states, so nothing flickers.
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
    });
    root.classList.add("motion-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    reveals.filter((el) => !el.classList.contains("in")).forEach((el) => io.observe(el));

    // ---------- Scroll scenes ----------
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    let ticking = false;

    function update() {
      ticking = false;
      const h = window.innerHeight;
      for (const el of scenes) {
        const r = el.getBoundingClientRect();
        const kind = el.dataset.scene;
        if (kind === "hero") {
          // 0 at the top of the page, 1 once the hero has scrolled away.
          const p = clamp(-r.top / Math.max(1, r.height * 0.9));
          el.style.setProperty("--p", p.toFixed(4));
          continue;
        }
        // Pinned scenes: progress through the tall wrapper while its sticky child is pinned.
        const total = r.height - h;
        if (total <= 0) continue;
        const p = clamp(-r.top / total);
        el.style.setProperty("--p", p.toFixed(4));

        if (kind === "explode") {
          const tilt = ease(clamp(p / 0.22));
          const spread = ease(clamp((p - 0.18) / 0.62));
          el.style.setProperty("--tilt", tilt.toFixed(4));
          el.style.setProperty("--spread", spread.toFixed(4));
          const active = spread < 0.04 ? -1 : Math.min(3, Math.floor(spread * 4.2));
          el.dataset.active = String(active);
        }
        if (kind === "cube") {
          // Ease towards each face so the cube settles on a step, then turns to the next.
          const steps = 3;
          const raw = clamp((p - 0.06) / 0.88) * steps;
          const i = Math.floor(raw);
          const f = raw - i;
          const settle = i + (f < 0.35 ? 0 : ease((f - 0.35) / 0.65));
          el.style.setProperty("--turn", Math.min(steps, settle).toFixed(4));
          el.dataset.active = String(Math.min(steps, Math.round(raw)));
        }
      }
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // ---------- 3D tilt (fine pointers only) ----------
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const tilts = fine ? Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]")) : [];
    const handlers: Array<[HTMLElement, (e: PointerEvent) => void, () => void]> = [];
    tilts.forEach((el) => {
      const max = Number(el.dataset.tilt || 6);
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--tx", (x * max * 2).toFixed(2));
        el.style.setProperty("--ty", (-y * max * 2).toFixed(2));
        el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
      };
      const leave = () => {
        el.style.setProperty("--tx", "0");
        el.style.setProperty("--ty", "0");
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      handlers.push([el, move, leave]);
    });

    // If the user turns on reduced motion while the page is open, drop everything.
    const onPref = () => {
      if (reduce.matches) root.classList.remove("motion-ready");
    };
    reduce.addEventListener("change", onPref);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", onPref);
      handlers.forEach(([el, m, l]) => {
        el.removeEventListener("pointermove", m);
        el.removeEventListener("pointerleave", l);
      });
    };
  }, []);

  return null;
}
