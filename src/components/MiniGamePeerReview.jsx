import { useState } from "react";
import { PEER_REVIEW_ROUNDS, PEER_REVIEW_REWARD } from "../data/miniGames";
import "./MiniGamePeerReview.css";

function pickTwo() {
  return [...PEER_REVIEW_ROUNDS].sort(() => Math.random() - 0.5).slice(0, 2);
}

export default function MiniGamePeerReview({ onComplete }) {
  const [rounds] = useState(pickTwo);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const current = rounds[index];

  function handlePick(i) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === current.correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (index + 1 >= rounds.length) {
      const finalScore = score + (selected === current.correctIndex ? 0 : 0);
      const gain = Math.round(score * PEER_REVIEW_REWARD * 100) / 100;
      onComplete({ gain, correct: score, total: rounds.length });
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  const IMPACT_COLOR = { large: "#27ae60", medium: "#f39c12", small: "#e74c3c" };
  const IMPACT_LABEL = { large: "High Impact", medium: "Medium Impact", small: "Lower Impact" };

  return (
    <div className="minigame-screen">
      <div className="minigame-container">
        <div className="minigame-header">
          <div className="minigame-tag">🌟 Mini-Game: Impact Review</div>
          <div className="minigame-progress">{index + 1} / {rounds.length}</div>
        </div>

        <h2 className="minigame-title">{current.question}</h2>
        <p className="minigame-subtitle">Pick the study with the biggest impact — that could mean helping many children, or making a huge difference for fewer children.</p>

        <div className="options-list">
          {current.options.map((opt, i) => {
            let state = "idle";
            if (revealed) {
              if (i === current.correctIndex) state = "correct";
              else if (i === selected) state = "wrong";
              else state = "dim";
            } else if (selected === i) {
              state = "selected";
            }
            return (
              <button
                key={i}
                className={`option-btn option-${state}`}
                onClick={() => handlePick(i)}
                disabled={revealed}
              >
                <div className="option-title">{opt.title}</div>
                {revealed && (
                  <div className="option-reveal">
                    <span className="impact-tag" style={{ background: IMPACT_COLOR[opt.impact] }}>
                      {IMPACT_LABEL[opt.impact]}
                    </span>
                    <span className="option-desc">{opt.desc}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className={`feedback-box ${selected === current.correctIndex ? "feedback-correct" : "feedback-wrong"}`}>
            <div className="feedback-result">
              {selected === current.correctIndex ? "✅ Great thinking!" : "❌ Not quite"}
            </div>
            <div className="feedback-text">{current.explanation}</div>
            {selected === current.correctIndex && (
              <div className="feedback-reward">+${PEER_REVIEW_REWARD}M added to your budget</div>
            )}
            <button className="next-btn" onClick={handleNext}>
              {index + 1 < rounds.length ? "Next Question →" : "See Results →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
