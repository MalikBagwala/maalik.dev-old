// pages/api/proxy/[...proxy].ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { proxy } = req.query;
  const url = Array.isArray(proxy) ? proxy.join('/') : proxy;

  try {
    const response = await fetch(url as any);

    // Handle CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS'); // Allow GET requests
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );

    // Forward the response
    res.status(response.status).json(await response.json());
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
