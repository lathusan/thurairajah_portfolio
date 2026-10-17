"use client";

import { useEffect, useState } from "react";

/** Small white label that types a greeting, then pauses and repeats. */
export default function TypingChip({ text, className = "" }: { text: string; className?: string }) {
  const letters = Array.from(text);
  const [n, setN] = useState(letters.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let pause = 0;
    const id = window.setInterval(() => {
      if (pause > 0) { pause -= 1; return; }
      i = i >= letters.length ? 0 : i + 1;
      setN(i);
      if (i === letters.length) pause = 12;
    }, 180);
    return () => window.clearInterval(id);
  }, [letters.length]);

  return (
    <div className={`flex items-center gap-2 rounded-2xl border border-gold/30 bg-white px-4 py-2.5 font-semibold text-ink shadow-xl ${className}`} aria-label={text}>
      <span aria-hidden="true">🙏</span>
      <span aria-hidden="true">{letters.slice(0, n).join("")}<span className="ml-0.5 inline-block w-0.5 animate-pulse bg-gold">&nbsp;</span></span>
    </div>
  );
}
