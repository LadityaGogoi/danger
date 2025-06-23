import { danger, warn, message, fail } from "danger";

const additions = danger.github.pr.additions || 0;
const deletions = danger.github.pr.deletions || 0;
const totalChanges = additions + deletions;

// Check for large/small PR
if (totalChanges > 500) {
  message(`Well PR! This PR is large (${totalChanges} lines changed).`);
} else {
  warn(`:warning: This PR is small (${totalChanges} lines changed). Try to make the PR over 500 lines of code.`);
}

// Check for test file changes
const testFiles = danger.git.modified_files.concat(danger.git.created_files).filter(f => /test|spec/i.test(f));
if (testFiles.length === 0) {
  warn(":warning: No test files were updated in this PR. Please add or update tests.");
}

// Check for changelog update
const changelogFiles = danger.git.modified_files.concat(danger.git.created_files).filter(f => /changelog/i.test(f));
if (changelogFiles.length === 0) {
  warn(":warning: No changelog was updated in this PR. Please update the changelog if necessary.");
}