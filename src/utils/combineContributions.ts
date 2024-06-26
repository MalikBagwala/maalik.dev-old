// Define color ranges

export default function combineContributions(
  githubCalendar: any,
  gitlabStats: any,
) {
  const newStats = structuredClone(githubCalendar);
  if (!gitlabStats) return githubCalendar;
  let maxCommits = 0;

  for (let i = 0; i < newStats.weeks.length; i++) {
    const week = newStats.weeks[i];
    for (let j = 0; j < week.contributionDays.length; j++) {
      const day = week.contributionDays[j];
      if (gitlabStats[day.date]) {
        day.contributionCount += gitlabStats[day.date];
        newStats.totalContributions += gitlabStats[day.date];
        if (day.contributionCount > maxCommits) {
          maxCommits = day.contributionCount;
        }
      }
    }
  }
  const colorRanges = [
    { color: '#216e39', min: 0.7 * maxCommits, max: maxCommits },
    { color: '#30a14e', min: 0.4 * maxCommits, max: 0.7 * maxCommits },
    { color: '#40c463', min: 0.2 * maxCommits, max: 0.4 * maxCommits },
    { color: '#9be9a8', min: 1, max: 0.2 * maxCommits },
  ];
  console.log(colorRanges, maxCommits);
  newStats.weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: any) => {
      if (day.contributionCount === 0) {
        day.color = null;
      } else {
        for (const range of colorRanges) {
          if (
            day.contributionCount >= range.min &&
            day.contributionCount <= range.max
          ) {
            day.color = range.color;
          }
        }
      }
    });
  });
  return newStats;
}
