/**
 * Simple line drawings of Carnatic instruments, used as light decoration in the header.
 * All drawn on a 48×24 box so they sit evenly in a row.
 */
export type InstrumentName = "veena" | "violin" | "mridangam" | "ghatam" | "kanjira" | "morsing";

const art: Record<InstrumentName, React.ReactNode> = {
  // veena: long neck with a large resonator at one end and a small gourd near the other
  veena: (
    <>
      <ellipse cx="10" cy="14" rx="7" ry="6" />
      <path d="M16 12.5 L41 9.5 M16 15.5 L41 12.5" />
      <path d="M41 9.5 C45 9 46 11 44 13 L41 12.5" />
      <circle cx="35" cy="16.5" r="3" />
      <path d="M34 11 v4" />
      <path d="M20 12 v3 M24 11.5 v3 M28 11 v3 M32 10.5 v3" strokeWidth="0.7" />
    </>
  ),
  // violin: waisted body, f-holes, neck and scroll
  violin: (
    <>
      <path d="M6 12 C6 6 13 6 14 9 C15 10.5 17 10.5 18 9 C19 6 26 6 26 12 C26 18 19 18 18 15 C17 13.5 15 13.5 14 15 C13 18 6 18 6 12 Z" />
      <path d="M26 12 H42" />
      <circle cx="44" cy="12" r="2" />
      <path d="M11 10.5 c1 1 1 2 0 3 M21 10.5 c-1 1 -1 2 0 3" strokeWidth="0.8" />
      <path d="M26 11 H40 M26 13 H40" strokeWidth="0.5" />
    </>
  ),
  // mridangam: barrel with a drum head at each end and lacing
  mridangam: (
    <>
      <path d="M10 6 C17 4 31 4 38 6 V18 C31 20 17 20 10 18 Z" />
      <ellipse cx="9.5" cy="12" rx="2.5" ry="6" />
      <ellipse cx="38.5" cy="12" rx="2.5" ry="6" />
      <path d="M14 5.5 L18 18.8 M20 5 L22 19.2 M28 5 L26 19.2 M34 5.5 L30 18.8" strokeWidth="0.8" />
    </>
  ),
  // ghatam: round clay pot with a short neck
  ghatam: (
    <>
      <path d="M20 4 H28 M21 4 C21 7 18 7 16 9 C10 13 12 21 24 21 C36 21 38 13 32 9 C30 7 27 7 27 4" />
      <path d="M15 14 C20 16 28 16 33 14" strokeWidth="0.7" />
    </>
  ),
  // kanjira: small round frame drum with a single pair of jingles
  kanjira: (
    <>
      <circle cx="24" cy="12" r="9" />
      <circle cx="24" cy="12" r="7" strokeWidth="0.6" />
      <rect x="31" y="9.5" width="3" height="5" rx="1" />
      <circle cx="32.5" cy="12" r="1" />
    </>
  ),
  // morsing: horseshoe-shaped frame with a long vibrating tongue
  morsing: (
    <>
      <path d="M14 7 C8 7 8 17 14 17" />
      <path d="M14 7 H22 M14 17 H22" />
      <path d="M12 12 H38 C40 12 40 10 42 9" />
      <path d="M22 7 C24 9 24 15 22 17" strokeWidth="0.8" />
    </>
  ),
};

export const INSTRUMENTS: InstrumentName[] = ["veena", "violin", "mridangam", "ghatam", "kanjira", "morsing"];

export function Instrument({ name, className = "" }: { name: InstrumentName; className?: string }) {
  return (
    <svg viewBox="0 0 48 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {art[name]}
    </svg>
  );
}
