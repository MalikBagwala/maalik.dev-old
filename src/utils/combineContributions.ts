/**
 * Combines GitHub and GitLab contribution data into a single calendar.
 *
 * @param {Object} githubCalendar - The GitHub contribution calendar data.
 * @param {Object} gitlabStats - The GitLab contribution stats data.
 * @returns {Object} - The combined contribution calendar data.
 */
export default function combineContributions(
  githubCalendar: any,
  gitlabStats: any,
) {
  // If there are no GitLab stats, return the GitHub calendar as is
  if (!gitlabStats) return githubCalendar;

  // Clone the GitHub calendar to avoid mutating the original object
  const newStats = structuredClone(githubCalendar);
  if (!newStats) return null;
  let maxCommits = 0;

  // Iterate through the weeks and days of the GitHub calendar
  for (const week of newStats.weeks) {
    for (const day of week.contributionDays) {
      // Get the number of contributions from GitLab for the specific date
      const gitlabContributions = gitlabStats[day.date] || 0;

      // Add GitLab contributions to the existing GitHub contributions
      day.contributionCount += gitlabContributions;

      // Update the total contributions count
      newStats.totalContributions += gitlabContributions;

      // Track the maximum number of commits in a single day
      maxCommits = Math.max(maxCommits, day.contributionCount);
    }
  }

  // Define color ranges based on the contribution count
  const colorRanges = [
    { color: '#216e39', min: 0.7 * maxCommits }, // Dark green for the highest contributions
    { color: '#30a14e', min: 0.4 * maxCommits }, // Medium green for mid-high contributions
    { color: '#40c463', min: 0.2 * maxCommits }, // Light green for mid-low contributions
    { color: '#9be9a8', min: 1 }, // Very light green for low contributions
  ];

  // Assign colors to each day's contributions based on the defined ranges
  for (const week of newStats.weeks) {
    for (const day of week.contributionDays) {
      day.color =
        day.contributionCount === 0
          ? null // No contributions get no color
          : colorRanges.find((range) => day.contributionCount >= range.min)
              ?.color; // Find the appropriate color range
    }
  }

  // Return the combined and colored contribution calendar
  return newStats;
}
