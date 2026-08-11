export default function Architecture({ nodes }) {
  return (
    <div className="architecture" aria-label={`Architecture: ${nodes.join(" to ")}`}>
      {nodes.map((node, index) => (
        <div className="arch-step" key={node}>
          <div className="node">
            <span className="node-dot" />
            <span>{node}</span>
          </div>
          {index < nodes.length - 1 && <span className="arch-arrow">→</span>}
        </div>
      ))}
    </div>
  );
}