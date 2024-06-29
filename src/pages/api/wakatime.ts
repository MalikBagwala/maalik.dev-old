import { NextApiRequest, NextApiResponse } from 'next';

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY =
  'https://wakatime.com/api/v1/users/current/all_time_since_today';

const getReadStats = async (): Promise<{ status: number; data: any }> => {
  const response = await fetch(
    `${STATS_ENDPOINT}/last_30_days?api_key=${process.env.WAKATIME_API_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const status = response.status;
  if (status > 400) return { status, data: [] };

  const getData = await response.json();
  const start_date = getData?.data?.start ?? null;
  const end_date = getData?.data?.end ?? null;
  const last_update = getData?.data?.modified_at ?? null;

  const categories = getData?.data?.categories ?? null;

  const best_day = {
    date: getData?.data?.best_day?.date ?? null,
    text: getData?.data?.best_day?.text ?? null,
  };
  const human_readable_daily_average =
    getData?.data?.human_readable_daily_average_including_other_language ??
    null;
  const human_readable_total =
    getData?.data?.human_readable_total_including_other_language ?? null;

  const languages = getData?.data?.languages?.slice(0, 3) ?? [];
  const editors = getData?.data?.editors ?? [];

  return {
    status,
    data: {
      last_update,
      start_date,
      end_date,
      categories,
      best_day,
      human_readable_daily_average,
      human_readable_total,
      languages,
      editors,
    },
  };
};

const getALLTimeSinceToday = async (): Promise<{
  status: number;
  data: any;
}> => {
  const response = await fetch(
    `${ALL_TIME_SINCE_TODAY}?api_key=${process.env.WAKATIME_API_KEY}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const status = response.status;
  if (status > 400) return { status, data: {} };

  const getData = await response.json();

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds,
  };

  return {
    status,
    data,
  };
};

export async function fetchWakatimeData() {
  const readStatsResponse = await getReadStats();
  const allTimeSinceTodayResponse = await getALLTimeSinceToday();
  return {
    ...readStatsResponse.data,
    all_time_since_today: allTimeSinceTodayResponse.data,
  };
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const data = await fetchWakatimeData();
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=120',
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
