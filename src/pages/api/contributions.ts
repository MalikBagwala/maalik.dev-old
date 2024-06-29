import { baseUrl } from '@/common/constant/baseUrl';
import combineContributions from '@/utils/combineContributions';
import { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export async function fetchContributions() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
      variables: {
        username: 'MalikBagwala',
      },
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_READ_USER_TOKEN_PERSONAL}`, // replace with your token or any other header you need
    },
  }).then((data) => data.json());

  const githubData =
    response.data?.user?.contributionsCollection?.contributionCalendar;

  const gitlabResponse = await fetch(
    `${baseUrl}/api/proxy/https://gitlab.com/users/MalikBagwala/calendar.json`,
  ).then((data) => data.json());

  console.log(gitlabResponse);
  return combineContributions(githubData, gitlabResponse);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const combinedContribution = await fetchContributions();
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=120',
  );
  return res.status(200).json(combinedContribution);
}
