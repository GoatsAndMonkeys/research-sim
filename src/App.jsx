import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Dashboard from "./components/Dashboard";
import ResultsScreen from "./components/ResultsScreen";
import MiniGamePeerReview from "./components/MiniGamePeerReview";
import MiniGameGrantScramble from "./components/MiniGameGrantScramble";
import MiniGameSummary from "./components/MiniGameSummary";
import WinScreen from "./components/WinScreen";
import { getStartingProposals, resolveResearch, computeRewards, rollRandomEvent, checkLevelUp, refreshProposals } from "./game/gameLogic";
import { LEVEL_THRESHOLDS } from "./data/proposals";

const SCREEN = { START: "start", DASHBOARD: "dashboard", RESULTS: "results", MINIGAME: "minigame", MINIGAME_SUMMARY: "minigame_summary", WIN: "win" };

function makeInitialState(playerName) {
  return {
    playerName,
    budget: 5,
    level: 1,
    prestige: 0,
    round: 1,
    proposals: getStartingProposals(10),
    funded: [],
    usedIds: [],
    allSuccesses: [],
  };
}

// Alternate mini-games each round: odd rounds = peer review, even = scramble
function miniGameType(round) {
  return round % 2 === 0 ? "scramble" : "peer";
}

export default function App() {
  const [screen, setScreen] = useState(SCREEN.START);
  const [gameState, setGameState] = useState(null);
  const [results, setResults] = useState(null);
  const [rewards, setRewards] = useState(null);
  const [levelUpInfo, setLevelUpInfo] = useState(null);
  const [randomEvent, setRandomEvent] = useState(null);
  const [miniGameResult, setMiniGameResult] = useState(null);
  const [currentMiniGame, setCurrentMiniGame] = useState(null);

  function handleStart(playerName) {
    setGameState(makeInitialState(playerName));
    setScreen(SCREEN.DASHBOARD);
  }

  function handleFund(proposal) {
    setGameState((prev) => ({ ...prev, funded: [...prev.funded, proposal] }));
  }

  function handleUnfund(proposal) {
    setGameState((prev) => ({ ...prev, funded: prev.funded.filter((p) => p.id !== proposal.id) }));
  }

  function handleRunResearch() {
    const resolved = gameState.funded.map(resolveResearch);
    const roundRewards = computeRewards(resolved);

    const event = rollRandomEvent(gameState.budget + roundRewards.budgetGain);
    const newBudget = gameState.budget + roundRewards.budgetGain - (event?.cut ?? 0);
    const newPrestige = gameState.prestige + roundRewards.prestigeGain;
    const newLevel = checkLevelUp(newPrestige, gameState.level);
    const levelUp = newLevel > gameState.level ? LEVEL_THRESHOLDS[newLevel] : null;

    const usedIds = [...gameState.usedIds, ...gameState.funded.map((p) => p.id)];
    const nextProposals = refreshProposals(usedIds, 10);

    setResults(resolved);
    setRewards(roundRewards);
    setLevelUpInfo(levelUp);
    setRandomEvent(event);
    setCurrentMiniGame(miniGameType(gameState.round));
    const roundSuccesses = resolved.filter((r) => r.succeeded);
    setGameState((prev) => ({
      ...prev,
      budget: newBudget,
      prestige: newPrestige,
      level: newLevel,
      round: prev.round + 1,
      funded: [],
      proposals: nextProposals,
      usedIds,
      allSuccesses: [...prev.allSuccesses, ...roundSuccesses],
    }));
    setScreen(SCREEN.RESULTS);
  }

  function handleResultsContinue() {
    if (gameState.level >= 5) {
      setScreen(SCREEN.WIN);
    } else {
      setScreen(SCREEN.MINIGAME);
    }
  }

  function handleMiniGameComplete(result) {
    setMiniGameResult(result);
    // Apply mini-game budget gain to game state
    setGameState((prev) => ({
      ...prev,
      budget: Math.round((prev.budget + result.gain) * 100) / 100,
    }));
    setScreen(SCREEN.MINIGAME_SUMMARY);
  }

  function handleSummaryContinue() {
    if (gameState.level >= 5) {
      setScreen(SCREEN.WIN);
    } else {
      setScreen(SCREEN.DASHBOARD);
    }
  }

  function handlePlayAgain() {
    setGameState(null);
    setScreen(SCREEN.START);
  }

  if (screen === SCREEN.START) return <StartScreen onStart={handleStart} />;

  if (screen === SCREEN.RESULTS)
    return <ResultsScreen results={results} rewards={rewards} levelUp={levelUpInfo} randomEvent={randomEvent} onContinue={handleResultsContinue} />;

  if (screen === SCREEN.MINIGAME) {
    if (currentMiniGame === "peer")
      return <MiniGamePeerReview onComplete={handleMiniGameComplete} />;
    return <MiniGameGrantScramble onComplete={handleMiniGameComplete} />;
  }

  if (screen === SCREEN.MINIGAME_SUMMARY)
    return <MiniGameSummary type={currentMiniGame} result={miniGameResult} onContinue={handleSummaryContinue} />;

  if (screen === SCREEN.WIN)
    return (
      <WinScreen
        playerName={gameState.playerName}
        prestige={gameState.prestige}
        round={gameState.round}
        allSuccesses={gameState.allSuccesses}
        onPlayAgain={handlePlayAgain}
      />
    );

  return (
    <Dashboard
      state={gameState}
      onFundProposal={handleFund}
      onUnfundProposal={handleUnfund}
      onRunResearch={handleRunResearch}
    />
  );
}
