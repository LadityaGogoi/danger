import { danger, warn, message } from "danger";

const additions = danger.github.pr.additions || 0;
const deletions = danger.github.pr.deletions || 0;
const totalChanges = additions + deletions;

if (totalChanges > 500) {
  message(`Well PR! This PR is large (${totalChanges} lines changed).`);
} else {
  warn(`:warning: This PR is small (${totalChanges} lines changed). Try to make the PR over 500 lines of code.`);
}