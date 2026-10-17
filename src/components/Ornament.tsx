/** Fine gold divider under section headings: line, lotus bud, line. */
export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 16" className={`h-4 w-40 ${className.includes("ml-0") ? "" : "mx-auto"} ${className}`} aria-hidden="true">
      <line x1="0" y1="8" x2="64" y2="8" stroke="#b8913f" strokeWidth="1" />
      <line x1="96" y1="8" x2="160" y2="8" stroke="#b8913f" strokeWidth="1" />
      <path d="M80 1 C86 6 86 10 80 15 C74 10 74 6 80 1 Z" fill="#b8913f" />
      <circle cx="70" cy="8" r="1.6" fill="#b8913f" />
      <circle cx="90" cy="8" r="1.6" fill="#b8913f" />
    </svg>
  );
}
