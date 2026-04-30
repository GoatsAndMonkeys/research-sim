import { CATEGORIES, PRESTIGE_BY_TIER } from "../data/proposals";
import "./ResultsScreen.css";

const TIER_COLORS = { 6: "#f1c40f", 5: "#e67e22", 4: "#9b59b6", 3: "#2980b9", 2: "#27ae60", 1: "#95a5a6" };
const TIER_LABELS = { 6: "Landmark Publication!", 5: "Premier Journal", 4: "High-Impact", 3: "Specialty Journal", 2: "Published", 1: "Published" };

export default function ResultsScreen({ results, rewards, levelUp, randomEvent, onContinue }) {
  const successes = results.filter((r) => r.succeeded);
  const failures = results.filter((r) => !r.succeeded);

  return (
    <div className="results-screen">
      <div className="results-container">
        <h1 className="results-heading">Research Results</h1>

        {levelUp && (
          <div className="levelup-banner">
            <span className="levelup-badge">{levelUp.badge}</span>
            <div>
              <div className="levelup-title">Level Up!</div>
              <div className="levelup-sub">You are now a {levelUp.title}</div>
            </div>
          </div>
        )}

        {successes.length > 0 && (
          <div className="results-section">
            <h2 className="section-head success-head">✅ Successful Studies ({successes.length})</h2>
            <div className="result-cards">
              {successes.map((r, i) => (
                <div key={i} className="result-card success-card" style={{ "--tier-color": TIER_COLORS[r.tier] }}>
                  <div className="result-top">
                    <span className="result-cat-icon">{CATEGORIES[r.proposal.category].icon}</span>
                    <span className="result-cat">{CATEGORIES[r.proposal.category].label}</span>
                    <span className="tier-badge" style={{ background: TIER_COLORS[r.tier] }}>
                      {TIER_LABELS[r.tier]}
                    </span>
                  </div>
                  <div className="result-title">{r.proposal.title}</div>
                  <div className="result-journal">
                    Published in <strong>{r.journal}</strong>
                  </div>
                  <div className="result-impact">
                    <span>🌟</span> {r.proposal.impact}
                  </div>
                  <div className="result-rewards-row">
                    <span className="budget-earned">+${r.budgetGain}M budget</span>
                    {PRESTIGE_BY_TIER[r.tier] > 0 && (
                      <span className="prestige-earned">+{PRESTIGE_BY_TIER[r.tier]} Prestige ⭐</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {failures.length > 0 && (
          <div className="results-section">
            <h2 className="section-head fail-head">🔄 Needs More Work ({failures.length})</h2>
            <p className="fail-note">Science takes time — these studies didn't succeed this round, but they re-enter the proposal pool. Real researchers never give up!</p>
            <div className="fail-list">
              {failures.map((r, i) => (
                <div key={i} className="fail-item">
                  <span>{CATEGORIES[r.proposal.category].icon}</span>
                  <span>{r.proposal.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {randomEvent && (
          <div className="event-banner">
            <div className="event-icon">⚠️</div>
            <div>
              <div className="event-title">{randomEvent.title}</div>
              <div className="event-desc">{randomEvent.description}</div>
            </div>
            <div className="event-cut">−${randomEvent.cut}M ({Math.round(randomEvent.cutPct * 100)}%)</div>
          </div>
        )}

        <div className="rewards-box">
          <div className="rewards-row">
            <span>Research earnings:</span>
            <span className="reward-value">+${rewards.budgetGain}M</span>
          </div>
          {randomEvent && (
            <div className="rewards-row">
              <span>{randomEvent.title}:</span>
              <span className="reward-loss">−${randomEvent.cut}M ({Math.round(randomEvent.cutPct * 100)}%)</span>
            </div>
          )}
          {rewards.prestigeGain > 0 && (
            <div className="rewards-row">
              <span>Prestige earned:</span>
              <span className="reward-value">+{rewards.prestigeGain} ⭐</span>
            </div>
          )}
        </div>

        <button className="continue-btn" onClick={onContinue}>
          Continue to Mini-Game →
        </button>
      </div>
    </div>
  );
}
