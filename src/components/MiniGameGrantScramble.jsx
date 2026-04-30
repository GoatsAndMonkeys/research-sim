import { useState, useEffect } from "react";
import { SCRAMBLE_GRANTS, SCRAMBLE_REWARD_CORRECT, SCRAMBLE_PENALTY_WRONG } from "../data/miniGames";
import { CATEGORIES } from "../data/proposals";
import "./MiniGameGrantScramble.css";

const CATEGORY_KEYS = Object.keys(CATEGORIES);

function pickGrants(count = 2) {
  return [...SCRAMBLE_GRANTS].sort(() => Math.random() - 0.5).slice(0, count);
}

function buildChoices(correctCategory) {
  const others = CATEGORY_KEYS.filter((k) => k !== correctCategory)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return [correctCategory, ...others].sort(() => Math.random() - 0.5);
}

export default function MiniGameGrantScramble({ onComplete }) {
  const [grants] = useState(() => pickGrants(2));
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [flash, setFlash] = useState(null); // "correct" | "wrong"
  const [choices] = useState(() => grants.map((g) => buildChoices(g.category)));

  const isDone = index >= grants.length;
  const current = grants[index];

  function handleAnswer(chosenCategory) {
    const correct = chosenCategory === current.category;
    const outcome = correct ? "correct" : "wrong";
    setFlash(outcome);
    setTimeout(() => {
      setResults((r) => [...r, { grant: current, chosen: chosenCategory, outcome }]);
      setFlash(null);
      setIndex((i) => i + 1);
    }, 700);
  }

  useEffect(() => {
    if (isDone) {
      const correct = results.filter((r) => r.outcome === "correct").length;
      const wrong = results.filter((r) => r.outcome === "wrong").length;
      const gain = Math.round((correct * SCRAMBLE_REWARD_CORRECT - wrong * SCRAMBLE_PENALTY_WRONG) * 100) / 100;
      onComplete({ gain: Math.max(0, gain), correct, wrong, total: grants.length });
    }
  }, [isDone]);

  if (isDone) return null;

  return (
    <div className={`scramble-screen ${flash ? `flash-${flash}` : ""}`}>
      <div className="scramble-container">
        <div className="scramble-header">
          <div className="minigame-tag">⚡ Mini-Game: Grant Scramble</div>
          <div className="scramble-counter">{index + 1} / {grants.length}</div>
        </div>

        <h2 className="scramble-title">Sort the grant into the right category!</h2>

        <div className="grant-card">
          <div className="grant-label">Grant Proposal</div>
          <div className="grant-title">{current.title}</div>
        </div>

        <div className="category-grid">
          {choices[index].map((catKey) => {
            const cat = CATEGORIES[catKey];
            return (
              <button
                key={catKey}
                className="cat-btn"
                style={{ "--cat-color": cat.color }}
                onClick={() => handleAnswer(catKey)}
              >
                <span className="cat-btn-icon">{cat.icon}</span>
                <span className="cat-btn-label">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="scramble-legend">
          <span>✓ correct = +${SCRAMBLE_REWARD_CORRECT}M</span>
          <span>✗ wrong = −${SCRAMBLE_PENALTY_WRONG}M</span>
        </div>
      </div>
    </div>
  );
}
