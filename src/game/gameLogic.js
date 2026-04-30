import { ALL_PROPOSALS, JOURNALS, TIER_MULTIPLIERS, PRESTIGE_BY_TIER, LEVEL_THRESHOLDS, RANDOM_EVENTS } from "../data/proposals";

export function getStartingProposals(count = 10) {
  const shuffled = [...ALL_PROPOSALS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function resolveResearch(proposal) {
  const roll = Math.random();
  const succeeded = roll < proposal.successRate;

  if (!succeeded) {
    return { proposal, succeeded: false, tier: 0, journal: null, budgetGain: 0 };
  }

  const tier = weightedTierRoll(proposal.journalWeights);
  const journalList = JOURNALS[tier];
  const journal = journalList[Math.floor(Math.random() * journalList.length)];
  const budgetGain = Math.round(proposal.cost * TIER_MULTIPLIERS[tier] * 100) / 100;

  return { proposal, succeeded: true, tier, journal, budgetGain };
}

function weightedTierRoll(weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i + 1;
  }
  return 1;
}

export function computeRewards(results) {
  const successes = results.filter((r) => r.succeeded);
  const budgetGain = Math.round(successes.reduce((sum, r) => sum + r.budgetGain, 0) * 100) / 100;
  const prestigeGain = successes.reduce((sum, r) => sum + (PRESTIGE_BY_TIER[r.tier] ?? 0), 0);
  const topPublication = successes.reduce((best, r) => (r.tier > (best?.tier ?? 0) ? r : best), null);
  return { budgetGain, prestigeGain, topPublication };
}

// Random event fires ~30% of rounds; cut is a percentage of current budget
export function rollRandomEvent(currentBudget) {
  if (Math.random() > 0.30) return null;
  const event = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
  const rawCut = Math.round(currentBudget * event.cutPct * 100) / 100;
  // Cap so budget can't drop below $2M
  const cut = Math.min(rawCut, Math.max(0, currentBudget - 2));
  return { ...event, cut };
}

export function checkLevelUp(prestige, currentLevel) {
  const maxLevel = Object.keys(LEVEL_THRESHOLDS).length;
  let newLevel = currentLevel;
  for (let lvl = currentLevel + 1; lvl <= maxLevel; lvl++) {
    if (prestige >= LEVEL_THRESHOLDS[lvl].requiredPrestige) newLevel = lvl;
    else break;
  }
  return newLevel;
}

export function refreshProposals(usedIds, count = 10) {
  const available = ALL_PROPOSALS.filter((p) => !usedIds.includes(p.id));
  const pool = available.length >= count ? available : ALL_PROPOSALS;
  return pool.sort(() => Math.random() - 0.5).slice(0, count);
}
