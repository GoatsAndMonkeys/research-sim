import { CATEGORIES } from "../data/proposals";
import "./ProposalCard.css";

// Risk: how many stars filled (out of 3) for chance of success
const RISK_STARS = { low: 3, medium: 2, high: 1 };

// Reward stars derived from journal weight distribution — higher tiers = more stars
function rewardStars(proposal) {
  const avgTier = proposal.journalWeights.reduce((sum, w, i) => sum + w * (i + 1), 0);
  if (avgTier >= 3.8) return 3;
  if (avgTier >= 2.5) return 2;
  return 1;
}

function Stars({ filled, color }) {
  return (
    <span className="stars">
      {[1, 2, 3].map((n) => (
        <span key={n} className="star" style={{ color: n <= filled ? color : "#ddd" }}>★</span>
      ))}
    </span>
  );
}

export default function ProposalCard({ proposal, isFunded, canAfford, onToggle }) {
  const cat = CATEGORIES[proposal.category];
  const riskStars = RISK_STARS[proposal.risk];
  const rwdStars = rewardStars(proposal);

  return (
    <div
      className={`proposal-card ${isFunded ? "funded" : ""} ${!canAfford && !isFunded ? "unaffordable" : ""}`}
      style={{ "--cat-color": cat.color }}
      onClick={canAfford || isFunded ? onToggle : undefined}
    >
      <div className="card-top">
        <span className="cat-icon">{cat.icon}</span>
        <span className="cat-label" style={{ color: cat.color }}>{cat.label}</span>
      </div>

      <h3 className="card-title">{proposal.title}</h3>
      <p className="card-desc">{proposal.description}</p>

      <div className="card-impact">
        <span className="impact-icon">✨</span>
        <span>{proposal.impact}</span>
      </div>

      <div className="risk-reward-row">
        <div className="rr-item">
          <span className="rr-label">Chance of success</span>
          <Stars filled={riskStars} color="#27ae60" />
        </div>
        <div className="rr-divider" />
        <div className="rr-item">
          <span className="rr-label">Funding potential</span>
          <Stars filled={rwdStars} color="#f39c12" />
        </div>
      </div>

      <div className="card-footer">
        <div className="card-cost">${proposal.cost}M</div>
        <button className={`fund-btn ${isFunded ? "funded-btn" : ""}`} tabIndex={-1}>
          {isFunded ? "✓ Funded" : "Fund Study"}
        </button>
      </div>
    </div>
  );
}
