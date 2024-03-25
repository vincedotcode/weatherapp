import React from 'react';

function getWeatherMoodColor(conditions) {
    if (conditions.toLowerCase().includes('cloud')) {
        return 'bg-gray-300';
    } else if (conditions.toLowerCase().includes('rain')) {
        return 'bg-blue-300';
    } else if (conditions.toLowerCase().includes('sunny')) {
        return 'bg-yellow-300';
    } else {
        return 'bg-green-300';
    }
}
function WeatherEmoji(conditions) {
    if (conditions.toLowerCase().includes('cloud')) {
        return '☁️';
    } else if (conditions.toLowerCase().includes('rain')) {
        return '🌧️';
    } else if (conditions.toLowerCase().includes('sunny')) {
        return '☀️';
    } else {
        return '🌈';
    }
}

function WeatherCard({ weatherData }) {
    const weatherMoodColor = getWeatherMoodColor(weatherData.conditions);
    const weatherEmoji = WeatherEmoji(weatherData.conditions);

    return (
        <div className={`overflow-hidden rounded-lg shadow-lg my-10 ${weatherMoodColor} h-100`}>
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl mb-2">Current Conditions</div>
                    <div className="text-3xl">{weatherEmoji}</div>
                </div>
                <p className="text-gray-700 text-base">
                    {weatherData.datetime.split("T")[1]}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="mb-2"><strong>Temperature:</strong> {weatherData.temp}°C</div>
                <div className="mb-2"><strong>Feels Like:</strong> {weatherData.feelslike}°C</div>
                <div className="mb-2"><strong>Humidity:</strong> {weatherData.humidity}%</div>
                <div className="mb-2"><strong>Wind Speed:</strong> {weatherData.windspeed} km/h</div>
                <div className="mb-2"><strong>Conditions:</strong> {weatherData.conditions}</div>
                <div className="mb-2"><strong>Sunset:</strong> {weatherData.sunset}</div>
                <div className="mb-2"><strong>Sunrise:</strong> {weatherData.sunrise}</div>
                <div className="mb-2"><strong>Moonphase:</strong> {weatherData.moonphase}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sunrise: {weatherData.sunrise}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sunset: {weatherData.sunset}</span>
            </div>
        </div>
    );
}

export default WeatherCard;
