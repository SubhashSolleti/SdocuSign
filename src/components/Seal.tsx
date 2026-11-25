// The brand motif: a round seal, like a notary's or a company stamp, one per signer.
// Drawn as an SVG so it stays sharp and takes the accent colour from CSS.

export function SealMark({ label, className, uid }: { label: string; className?: string; uid: string }) {
  const id = `seal-ring-${uid}`;
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false" direction="ltr">
      <defs>
        <path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text fill="currentColor" fontSize="10.5" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" letterSpacing="2.2">
        <textPath href={`#${id}`}>{label}</textPath>
      </text>
      <path
        d="M45 61.5l9.5 9.5L76 49.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
