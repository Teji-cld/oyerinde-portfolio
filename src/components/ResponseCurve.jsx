export default function ResponseCurve() {
  return (
    <div className="instrument">
      <div className="instrument-head">
        <span>SYSTEM RESPONSE</span>
        <span>LOAD / RESPONSE</span>
      </div>

      <svg
        className="curve"
        viewBox="0 0 560 330"
        role="img"
        aria-label="System load versus response curve"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity=".12" />
          </pattern>
        </defs>

        <rect x="58" y="18" width="474" height="250" fill="url(#grid)" />

        <line x1="58" y1="268" x2="532" y2="268" className="axis" />
        <line x1="58" y1="268" x2="58" y2="18" className="axis" />

        {[58, 152, 247, 342, 437, 532].map((x) => (
          <line key={x} x1={x} y1="268" x2={x} y2="274" className="tick" />
        ))}
        {[268, 218, 168, 118, 68, 18].map((y) => (
          <line key={y} x1="52" y1={y} x2="58" y2={y} className="tick" />
        ))}

        <path
          d="M 68 250 C 128 248, 160 241, 196 226 C 235 210, 250 164, 280 133 C 314 98, 350 77, 389 63 C 437 46, 485 42, 525 41"
          className="response-line"
        />

        <circle cx="280" cy="133" r="6" className="signal-point" />
        <line x1="280" y1="133" x2="280" y2="268" className="crosshair" />
        <line x1="58" y1="133" x2="280" y2="133" className="crosshair" />

        <text x="280" y="291" textAnchor="middle" className="chart-label">LOAD</text>
        <text x="19" y="143" transform="rotate(-90 19 143)" textAnchor="middle" className="chart-label">RESPONSE</text>
        <text x="292" y="123" className="chart-value">CURRENT POINT</text>
        <text x="64" y="37" className="chart-note">CALIBRATED VIEW / 01</text>
      </svg>

      <div className="instrument-foot">
        <span>THRESHOLD</span>
        <span className="signal">MONITORING</span>
        <span>SCALING RESPONSE</span>
      </div>
    </div>
  );
}