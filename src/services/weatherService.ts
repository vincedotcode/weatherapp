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
    
    if (axiosError.response && axiosError.response.data) {
      const errorMessage = typeof axiosError.response.data === 'string' ? axiosError.response.data : JSON.stringify(axiosError.response.data);
      throw new Error(errorMessage);
    } else {
      throw new Error("Error fetching weather data");
    }
  }
};

export default getWeatherData;
