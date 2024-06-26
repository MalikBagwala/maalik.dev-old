import axios from 'axios';

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        origin: 'maalik.dev',
      },
    })
    .then((response) => response.data);
