"use client";

import { useEffect, useRef, useState } from "react";
import { Instrument } from "./Instruments";

const NOTES = ["♪", "♫", "♩", "♬"];

/** Plays his mridangam recording on request. While playing, a mridangam appears with notes rising from it. */
export default function ListenButton({ src, label, pauseLabel }: { src: string; label: string; pauseLabel: string }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [notes, setNotes] = useState<{ id: number; ch: string; x: number }[]>([]);
  const counter = useRef(0);

  useEffect(() => () => ref.current?.pause(), []);

  // a new note every 0.6 s while playing; each one floats up and fades
  useEffect(() => {
    if (!playing) {
      setNotes([]);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const n = counter.current++;
      const note = { id: n, ch: NOTES[n % NOTES.length], x: (n % 3) * 14 - 14 };
      setNotes((list) => [...list.slice(-5), note]);
      window.setTimeout(() => setNotes((list) => list.filter((x) => x.id !== n)), 1800);
    }, 600);
    return () => window.clearInterval(id);
  }, [playing]);

  async function toggle() {
    if (!ref.current) {
      ref.current = new Audio(src);
      ref.current.loop = true;
      ref.current.volume = 0.6;
    }
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      try {
        await ref.current.play();
        setPlaying(true);
      } catch {}
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        className="inline-flex items-center gap-3 rounded-full border border-ink/20 bg-white px-5 py-3 font-semibold text-ink shadow-sm hover:border-gold"
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gold text-white">
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          )}
        </span>
        <span>{playing ? pauseLabel : label}</span>
      </button>

      {/* the playing mridangam, with notes rising from it */}
      {playing && (
        <div className="relative h-12 w-20" aria-hidden="true">
          <Instrument name="mridangam" className="mridangam-tap absolute bottom-0 left-0 h-10 w-20 text-maroon" />
          {notes.map((n) => (
            <span
              key={n.id}
              className="rising-note absolute bottom-6 left-1/2 text-2xl font-semibold text-gold"
              style={{ "--x": `${n.x}px` } as React.CSSProperties}
            >
              {n.ch}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
