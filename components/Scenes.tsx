// Animated project "photos". Swap any of these for a real screenshot with <Image />.
const ink = "#1b1707";
export default function Scene({ kind }: { kind: number }) {
  const box = { width: "100%", height: "100%", display: "block" } as const;
  if (kind === 0)
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={box} role="img" aria-label="Database tables linked by a query">
        <rect width="800" height="500" fill="#FFE66D" />
        {[[70, 90], [480, 60], [290, 290]].map(([x, y], i) => (
          <g key={i} className={i % 2 ? "fl2" : "fl"}>
            <rect x={x} y={y} width="230" height="150" rx="14" fill="#fff" stroke={ink} />
            <rect x={x} y={y} width="230" height="34" rx="14" fill={ink} />
            <rect x={x + 22} y={y + 60} width="130" height="8" rx="4" fill="#d9cf85" />
            <rect x={x + 22} y={y + 84} width="90" height="8" rx="4" fill="#d9cf85" />
            <rect x={x + 22} y={y + 108} width="150" height="8" rx="4" fill={ink} />
          </g>
        ))}
        <path className="dash" d="M300 170 C390 170 340 330 390 320 M520 340 C600 340 590 220 600 210" fill="none" stroke={ink} strokeWidth="2.5" strokeDasharray="10 8" />
      </svg>
    );
  if (kind === 1)
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={box} role="img" aria-label="Topographic map with a glacial lake">
        <rect width="800" height="500" fill="#FFFBEA" />
        <g fill="none" stroke={ink} strokeOpacity=".5">
          {[[380, 210], [320, 170], [260, 130], [200, 95], [140, 62]].map(([rx, ry], i) => <ellipse key={i} cx={400 + i * 10} cy={250 + i * 2} rx={rx} ry={ry} />)}
        </g>
        <path className="fl" d="M380 230 q40 -40 90 -10 q30 40 -14 62 q-60 14 -76 -52z" fill="#FFD60A" stroke={ink} />
        <circle className="dash" cx="430" cy="250" r="110" fill="none" stroke={ink} strokeDasharray="4 10" />
        <rect width="800" height="3" fill={ink} opacity=".5"><animate attributeName="y" values="0;500;0" dur="7s" repeatCount="indefinite" /></rect>
      </svg>
    );
  if (kind === 2)
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={box} role="img" aria-label="Face detection frame">
        <rect width="800" height="500" fill="#FFD60A" />
        <circle className="fl" cx="400" cy="230" r="120" fill="#fff" stroke={ink} strokeWidth="2" />
        <circle cx="360" cy="215" r="10" fill={ink} /><circle cx="440" cy="215" r="10" fill={ink} />
        <path d="M355 265 q45 40 90 0" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        <g fill="none" stroke={ink} strokeWidth="4"><path d="M250 120v-40h40M550 120v-40h-40M250 340v40h40M550 340v40h-40" /></g>
        <rect x="250" y="100" width="300" height="3" fill={ink}><animate attributeName="y" values="100;360;100" dur="4s" repeatCount="indefinite" /></rect>
        <rect x="300" y="415" width="200" height="34" rx="17" fill="#fff" /><rect x="320" y="428" width="90" height="8" rx="4" fill={ink} />
      </svg>
    );
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={box} role="img" aria-label="Alumni network graph">
      <rect width="800" height="500" fill="#fff" />
      <g stroke={ink} strokeOpacity=".4" className="dash" strokeDasharray="6 8" fill="none">
        <path d="M400 250L200 130M400 250L620 120M400 250L180 380M400 250L640 390M200 130L180 380M620 120L640 390" />
      </g>
      {[[200, 130, 34], [620, 120, 28], [180, 380, 30], [640, 390, 36]].map(([x, y, r], i) => <circle key={i} className={i % 2 ? "fl2" : "fl"} cx={x} cy={y} r={r} fill="#FFE66D" stroke={ink} />)}
      <circle className="fl" cx="400" cy="250" r="64" fill="#FFD60A" stroke={ink} strokeWidth="2" />
    </svg>
  );
}
