import { danger, warn, message } from "danger";

const additions = danger.github.pr.additions || 0;
const deletions = danger.github.pr.deletions || 0;
const totalChanges = additions + deletions;

let points = 0;
if (totalChanges > 500) {
  const extra = totalChanges - 500;
  points = Math.floor(extra / 100) * 10;
  message(`This PR is large (${totalChanges} lines changed). Bonus Points: **${points}**`);
} else {
  points = 500;
  let below = 500 - totalChanges;
  while (below > 0) {
    points -= points * 0.2;
    below -= 100;
  }
  points = Math.round(points);
  warn(`:warning: This PR is small (${totalChanges} lines changed). Penalty Points: **${points}**`);
}