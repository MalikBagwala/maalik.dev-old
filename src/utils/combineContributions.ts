export default function combineContributions(
  githubCalendar: any,
  gitlabStats: any,
) {
  if (!gitlabStats) return githubCalendar;

  const newStats = structuredClone(githubCalendar);
  let maxCommits = 0;

  for (const week of newStats.weeks) {
    for (const day of week.contributionDays) {
      const gitlabContributions = gitlabStats[day.date] || 0;
      day.contributionCount += gitlabContributions;
      newStats.totalContributions += gitlabContributions;
      maxCommits = Math.max(maxCommits, day.contributionCount);
    }
  }

  const colorRanges = [
    { color: '#216e39', min: 0.7 * maxCommits },
    { color: '#30a14e', min: 0.4 * maxCommits },
    { color: '#40c463', min: 0.2 * maxCommits },
    { color: '#9be9a8', min: 1 },
  ];

  for (const week of newStats.weeks) {
    for (const day of week.contributionDays) {
      day.color =
        day.contributionCount === 0
          ? null
          : colorRanges.find((range) => day.contributionCount >= range.min)
              ?.color;
    }
  }

  return newStats;
}
