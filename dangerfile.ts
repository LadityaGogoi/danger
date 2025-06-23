// dangerfile.ts
import { danger, warn, message } from "danger";

// Get the number of lines changed in the PR
const additions = danger.github.pr.additions || 0;
const deletions = danger.github.pr.deletions || 0;
const totalChanges = additions + deletions;

// Scoring logic
let points = 0;
if (totalChanges > 500) {
  // No penalty, add 10 points for every 100 lines above 500
  const extra = totalChanges - 500;
  points = Math.floor(extra / 100) * 10;
  message(`This PR is large (${totalChanges} lines changed). Bonus Points: **${points}**`);
} else {
  // Start from 500 points, decrease by 20% for every 100 lines below 500
  points = 500;
  let below = 500 - totalChanges;
  while (below > 0) {
    points -= points * 0.2;
    below -= 100;
  }
  points = Math.round(points);
  warn(`:warning: This PR is small (${totalChanges} lines changed). Penalty Points: **${points}**`);
}