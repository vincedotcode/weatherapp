import { useState, useEffect } from 'react';

interface WeatherData {
  currentConditions: any; 
}

interface UseWeatherHook {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const useWeather = (location: string): UseWeatherHook => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!location) return;
        setLoading(true);
        fetch(`/api/weather?location=${encodeURIComponent(location)}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then((data: WeatherData) => {
                setData(data);
                setError(null);
            })
            .catch((error: Error) => {
                setError(error.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [location]);

    return { data, loading, error };
};

export default useWeather;
