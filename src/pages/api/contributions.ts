import combineContributions from '@/utils/combineContributions';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await axios.post(
    GITHUB_USER_ENDPOINT,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: 'MalikBagwala',
      },
    },
    {
      headers: {
        Authorization: `bearer ${process.env.GITHUB_READ_USER_TOKEN_PERSONAL}`,
      },
    },
  );

  const githubData =
    response.data?.data?.user?.contributionsCollection?.contributionCalendar;
  const gitlabResponse = await fetch(
    'https://gitlab.com/users/MalikBagwala/calendar.json',
  ).then((data) => data.json());

  const combinedContribution = combineContributions(githubData, gitlabResponse);
  console.log(response.data);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=120',
  );
  return res.status(response.status).json(combinedContribution);
}
