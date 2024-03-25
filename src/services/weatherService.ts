import axios, { AxiosError } from 'axios';

interface WeatherData {
  [key: string]: any; 
}

const getWeatherData = async (location: string): Promise<WeatherData> => {
  const API_KEY = process.env.VISUAL_CROSSING_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  try {
    const response = await axios.get<WeatherData>(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response && axiosError.response.data ? axiosError.response.data : "Error fetching weather data");
  }
};

export default getWeatherData;
