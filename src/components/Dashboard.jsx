import { useState } from "react";
import { CATEGORIES, LEVEL_THRESHOLDS } from "../data/proposals";
import ProposalCard from "./ProposalCard";
import "./Dashboard.css";

export default function Dashboard({ state, onFundProposal, onUnfundProposal, onRunResearch }) {
  const { playerName, budget, level, prestige, proposals, funded, round } = state;
  const levelInfo = LEVEL_THRESHOLDS[level];
  const nextLevel = LEVEL_THRESHOLDS[level + 1];
  const totalCost = funded.reduce((sum, p) => sum + p.cost, 0);
  const canRun = funded.length > 0;

  return (
    <div className="dashboard">
      <header className="dash-header">
        <div className="header-left">
          <span className="player-badge">{levelInfo.badge}</span>
          <div>
            <div className="player-name">{playerName}</div>
            <div className="player-title">{levelInfo.title} — Round {round}</div>
          </div>
        </div>
        <div className="header-stats">
          <div className="stat-box">
            <div className="stat-value">${budget.toFixed(2)}M</div>
            <div className="stat-label">Budget</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">${totalCost}M</div>
            <div className="stat-label">Committed</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">${(budget - totalCost).toFixed(2)}M</div>
            <div className="stat-label">Remaining</div>
          </div>
          <div className="stat-box prestige-box">
            <div className="stat-value">{prestige} ⭐</div>
            <div className="stat-label">Prestige</div>
          </div>
        </div>
      </header>

      {nextLevel && (
        <div className="level-bar-row">
          <span>Next level: {nextLevel.title} {nextLevel.badge}</span>
          <div className="level-bar-track">
            <div
              className="level-bar-fill"
              style={{ width: `${Math.min(100, (prestige / nextLevel.requiredPrestige) * 100)}%` }}
            />
          </div>
          <span>{prestige} / {nextLevel.requiredPrestige} prestige</span>
        </div>
      )}

      <div className="dash-body">
        <div className="proposals-section">
          <h2>Available Research Proposals</h2>
          <p className="section-hint">Click a proposal to fund it. You can fund multiple studies at once.</p>
          <div className="proposals-grid">
            {proposals.map((p) => {
              const isFunded = funded.some((f) => f.id === p.id);
              const canAfford = budget - totalCost >= p.cost || isFunded;
              return (
                <ProposalCard
                  key={p.id}
                  proposal={p}
                  isFunded={isFunded}
                  canAfford={canAfford}
                  onToggle={() => isFunded ? onUnfundProposal(p) : onFundProposal(p)}
                />
              );
            })}
          </div>
        </div>

        <div className="funded-panel">
          <h2>Funded Studies ({funded.length})</h2>
          {funded.length === 0 ? (
            <p className="empty-hint">Select proposals to fund from the left.</p>
          ) : (
            <ul className="funded-list">
              {funded.map((p) => (
                <li key={p.id} className="funded-item">
                  <span className="funded-icon">{CATEGORIES[p.category].icon}</span>
                  <div className="funded-info">
                    <div className="funded-title">{p.title}</div>
                    <div className="funded-cost">${p.cost}M</div>
                  </div>
                  <button className="remove-btn" onClick={() => onUnfundProposal(p)}>✕</button>
                </li>
              ))}
            </ul>
          )}
          <button
            className="run-btn"
            disabled={!canRun}
            onClick={onRunResearch}
          >
            Run Research Phase →
          </button>
          {!canRun && <p className="run-hint">Fund at least one study to continue.</p>}
        </div>
      </div>
    </div>
  );
}
