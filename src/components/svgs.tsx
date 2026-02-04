export function HeartSVG({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 88C50 88 10 60 10 35C10 20 22 10 35 10C43 10 50 16 50 16C50 16 57 10 65 10C78 10 90 20 90 35C90 60 50 88 50 88Z"
        fill="#f9a8d4"
        stroke="#ec4899"
        strokeWidth="2"
      />
    </svg>
  );
}

export function FlowerSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Petals */}
      <ellipse cx="50" cy="30" rx="12" ry="20" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1" />
      <ellipse cx="50" cy="70" rx="12" ry="20" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1" />
      <ellipse cx="30" cy="50" rx="20" ry="12" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1" />
      <ellipse cx="70" cy="50" rx="20" ry="12" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1" />
      {/* Center */}
      <circle cx="50" cy="50" r="12" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
    </svg>
  );
}

export function StarSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10L58 40H90L64 58L72 88L50 70L28 88L36 58L10 40H42L50 10Z"
        fill="#fef3c7"
        stroke="#fbbf24"
        strokeWidth="2"
      />
    </svg>
  );
}

export function EnvelopeSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="10" width="90" height="60" rx="4" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <path d="M5 14L50 45L95 14" stroke="#ec4899" strokeWidth="2" fill="none" />
      <path d="M5 66L35 40" stroke="#ec4899" strokeWidth="2" />
      <path d="M95 66L65 40" stroke="#ec4899" strokeWidth="2" />
    </svg>
  );
}

export function CoupleWalkingSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Person 1 */}
      <circle cx="35" cy="20" r="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <path d="M35 30V55" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 35L20 50" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 35L50 50" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 55L25 80" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M35 55L45 80" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />

      {/* Person 2 */}
      <circle cx="75" cy="20" r="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <path d="M75 30V55" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 35L60 50" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 35L90 50" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 55L65 80" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 55L85 80" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />

      {/* Holding hands */}
      <path d="M50 50L60 50" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" />

      {/* Small heart between */}
      <path
        d="M55 40C55 38 53 37 51 37C50 37 49 38 49 40C49 42 55 46 55 46C55 46 61 42 61 40C61 38 60 37 59 37C57 37 55 38 55 40Z"
        fill="#f9a8d4"
      />
    </svg>
  );
}

export function CandleSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flame */}
      <ellipse cx="30" cy="20" rx="8" ry="15" fill="#fbbf24" />
      <ellipse cx="30" cy="22" rx="4" ry="8" fill="#fef3c7" />

      {/* Wick */}
      <rect x="28" y="30" width="4" height="8" fill="#374151" />

      {/* Candle body */}
      <rect x="15" y="38" width="30" height="50" rx="2" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="2" />

      {/* Drip */}
      <ellipse cx="20" cy="42" rx="3" ry="5" fill="#fbcfe8" />
    </svg>
  );
}

export function RoseSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path d="M40 50V115" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />

      {/* Leaves */}
      <ellipse cx="30" cy="75" rx="12" ry="6" fill="#22c55e" transform="rotate(-30 30 75)" />
      <ellipse cx="50" cy="90" rx="12" ry="6" fill="#22c55e" transform="rotate(30 50 90)" />

      {/* Rose petals */}
      <circle cx="40" cy="30" r="20" fill="#ec4899" />
      <circle cx="35" cy="25" r="12" fill="#f472b6" />
      <circle cx="45" cy="25" r="12" fill="#f472b6" />
      <circle cx="40" cy="35" r="12" fill="#f472b6" />
      <circle cx="40" cy="28" r="8" fill="#be185d" />
    </svg>
  );
}

export function ChocolateSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Box */}
      <rect x="5" y="15" width="90" height="40" rx="4" fill="#92400e" stroke="#78350f" strokeWidth="2" />

      {/* Lid */}
      <rect x="5" y="5" width="90" height="15" rx="4" fill="#b45309" stroke="#92400e" strokeWidth="2" />

      {/* Ribbon */}
      <rect x="45" y="5" width="10" height="50" fill="#ec4899" />
      <path d="M35 10L50 0L65 10" fill="#ec4899" />

      {/* Bow */}
      <ellipse cx="42" cy="8" rx="8" ry="5" fill="#f472b6" />
      <ellipse cx="58" cy="8" rx="8" ry="5" fill="#f472b6" />
      <circle cx="50" cy="8" r="4" fill="#ec4899" />
    </svg>
  );
}
