import { useState } from "react";
import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div className="start-screen">
      <div className="start-card">
        <div className="nih-logo">🏛️</div>
        <h1>Fund the Future</h1>
        <p className="subtitle">You're a researcher at the NIH.<br />Decide which studies to fund and change the world.</p>
        <div className="name-row">
          <label>Your name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            maxLength={24}
            onKeyDown={(e) => e.key === "Enter" && name.trim() && onStart(name.trim())}
          />
        </div>
        <button
          className="start-btn"
          disabled={!name.trim()}
          onClick={() => onStart(name.trim())}
        >
          Start Researching →
        </button>
        <div className="start-hint">You'll start with $5M to fund science that helps people.</div>
      </div>
    </div>
  );
}
