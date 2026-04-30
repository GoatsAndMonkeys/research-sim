import { CATEGORIES, PRESTIGE_BY_TIER } from "../data/proposals";
import "./WinScreen.css";

const TIER_LABELS = { 6: "Landmark Publication", 5: "Premier Journal", 4: "High-Impact", 3: "Specialty Journal", 2: "Published", 1: "Published" };
const TIER_COLORS = { 6: "#f1c40f", 5: "#e67e22", 4: "#9b59b6", 3: "#2980b9", 2: "#27ae60", 1: "#95a5a6" };

export default function WinScreen({ playerName, prestige, round, allSuccesses, onPlayAgain }) {
  const totalBudgetEarned = allSuccesses.reduce((sum, r) => sum + r.budgetGain, 0).toFixed(2);
  const landmark = allSuccesses.filter((r) => r.tier === 6).length;

  return (
    <div className="win-screen">
      <div className="win-header">
        <div className="win-crown">👑</div>
        <h1 className="win-title">NIH Director!</h1>
        <p className="win-subtitle">Congratulations, {playerName}!</p>
        <p className="win-blurb">
          You built a world-class research program and rose to lead the National Institutes of Health.
          Look back at every discovery your team made along the way.
        </p>

        <div className="win-stats">
          <div className="win-stat">
            <div className="win-stat-value">{allSuccesses.length}</div>
            <div className="win-stat-label">Studies Published</div>
          </div>
          <div className="win-stat">
            <div className="win-stat-value">{round - 1}</div>
            <div className="win-stat-label">Rounds Played</div>
          </div>
          <div className="win-stat">
            <div className="win-stat-value">{prestige} ⭐</div>
            <div className="win-stat-label">Total Prestige</div>
          </div>
          <div className="win-stat">
            <div className="win-stat-value">${totalBudgetEarned}M</div>
            <div className="win-stat-label">Research Earned</div>
          </div>
          {landmark > 0 && (
            <div className="win-stat win-stat-gold">
              <div className="win-stat-value">{landmark} 🏆</div>
              <div className="win-stat-label">Landmark Publications</div>
            </div>
          )}
        </div>
      </div>

      <div className="win-scroll-area">
        <h2 className="win-section-title">Your Research Legacy</h2>
        <p className="win-section-sub">Every study your team published — scroll down to see them all.</p>

        <div className="win-studies">
          {allSuccesses.map((r, i) => {
            const cat = CATEGORIES[r.proposal.category];
            const prestige = PRESTIGE_BY_TIER[r.tier];
            return (
              <div key={i} className="win-study-card" style={{ "--tier-color": TIER_COLORS[r.tier] }}>
                <div className="win-study-top">
                  <span className="win-study-icon">{cat.icon}</span>
                  <span className="win-study-cat" style={{ color: cat.color }}>{cat.label}</span>
                  <span className="win-tier-badge" style={{ background: TIER_COLORS[r.tier] }}>
                    {TIER_LABELS[r.tier]}
                  </span>
                </div>
                <div className="win-study-title">{r.proposal.title}</div>
                <div className="win-study-journal">Published in <strong>{r.journal}</strong></div>
                <div className="win-study-impact">✨ {r.proposal.impact}</div>
                <div className="win-study-footer">
                  <span className="win-budget-gain">+${r.budgetGain}M</span>
                  {prestige > 0 && <span className="win-prestige-gain">+{prestige} ⭐</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="win-footer">
        <button className="win-play-again" onClick={onPlayAgain}>
          Play Again →
        </button>
      </div>
    </div>
  );
}
