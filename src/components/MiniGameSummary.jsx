import "./MiniGameSummary.css";

export default function MiniGameSummary({ type, result, onContinue }) {
  const isPositive = result.gain > 0;

  return (
    <div className="summary-screen">
      <div className="summary-card">
        <div className="summary-icon">{isPositive ? "🎉" : "📋"}</div>
        <h2 className="summary-heading">
          {type === "peer" ? "Impact Review Complete" : "Grant Scramble Complete"}
        </h2>

        {type === "peer" && (
          <p className="summary-stat">{result.correct} / {result.total} correct</p>
        )}
        {type === "scramble" && (
          <div className="scramble-breakdown">
            <span>✓ {result.correct} correct</span>
            <span>✗ {result.wrong} wrong</span>
          </div>
        )}

        <div className={`summary-gain ${result.gain > 0 ? "gain-positive" : "gain-zero"}`}>
          {result.gain > 0 ? `+$${result.gain}M added to your budget!` : "No budget bonus this time."}
        </div>

        <button className="summary-btn" onClick={onContinue}>
          Continue to Dashboard →
        </button>
      </div>
    </div>
  );
}
