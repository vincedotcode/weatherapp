import { NextApiRequest, NextApiResponse } from 'next';
import getWeatherData from '../../services/weatherService';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const location = req.query.location as string;

    if (typeof location !== 'string') {
        return res.status(400).json({ message: 'Location must be a string' });
    }
    try {
        const data = await getWeatherData(location);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}
