const RadarVisual = ({ size = 320 }: { size?: number }) => {
  const c = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      className="block"
    >
      <defs>
        <radialGradient id="radarFade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={c} cy={c} r={size * 0.45} fill="url(#radarFade)" />
      {[0.18, 0.3, 0.42].map((r, i) => (
        <circle
          key={i}
          cx={c}
          cy={c}
          r={size * r}
          stroke="hsl(var(--border))"
          strokeWidth={1}
          fill="none"
        />
      ))}
      <line
        x1={c}
        y1={c - size * 0.42}
        x2={c}
        y2={c + size * 0.42}
        stroke="hsl(var(--border))"
        strokeDasharray="2 4"
        strokeWidth={1}
      />
      <line
        x1={c - size * 0.42}
        y1={c}
        x2={c + size * 0.42}
        y2={c}
        stroke="hsl(var(--border))"
        strokeDasharray="2 4"
        strokeWidth={1}
      />
      <circle cx={c} cy={c} r={6} fill="hsl(var(--primary))" />
      <rect
        x={c + size * 0.32 - 4}
        y={c - size * 0.22 - 4}
        width={8}
        height={8}
        fill="hsl(var(--primary))"
      />
      <rect
        x={c + size * 0.4 - 3}
        y={c - 3}
        width={6}
        height={6}
        fill="hsl(var(--primary) / 0.5)"
      />
      <circle
        cx={c - size * 0.05}
        cy={c + size * 0.38}
        r={3}
        fill="rgb(34 197 94)"
      />
    </svg>
  );
};

export default RadarVisual;
