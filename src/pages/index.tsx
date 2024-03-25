import { useState } from 'react';
import Hero from '../components/Hero';
import { Spinner } from "@nextui-org/react";
import cloudImage from '../assets/cloud.jpg';
import sunImage from '../assets/sun.jpg';
import useWeather  from '../hooks/useWeather';
import ErrorCard from '../components/Error';
import WeatherCard from '../components/Weather';
import dynamic from 'next/dynamic';

const MapComponentWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
});

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { data: weatherData, loading, error } = useWeather('Mauritius');

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
                <Spinner label="Loading" color="secondary" labelColor="secondary" />
            </div>
        );
    }

    if (error) {
        return <ErrorCard errorMessage={`Error fetching weather: ${error}`} />; 
    }

    const conditions = weatherData?.currentConditions;
    const conditionsDescription = conditions?.conditions || '';
    const isRaining = conditionsDescription.toLowerCase().includes('rain') || conditionsDescription.toLowerCase().includes('cloud');
    const imageUrl = isRaining ? cloudImage.src : sunImage.src;
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const { latitude, longitude } = weatherData || {};


    if (isLoading) {
        setIsLoading(false);
    }

    return (
        <div>
            <Hero
                title="Discover the Weather for Mauritius"
                subtitle={`Date: ${currentDate}, Location: Mauritius`}
                description={`Weather Condition: ${conditionsDescription}. Find out current weather conditions below.`}
                imageUrl={imageUrl}
            />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold text-center my-4">Current Weather</h2>
                <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 mt-4">
                    <div className="flex-1">
                        {weatherData && <WeatherCard weatherData={conditions} />}
                    </div>
                    <div className="flex-1" style={{ height: '500px' }}> 
                        {latitude && longitude && (
                            <MapComponentWithNoSSR coordinates={{ lat: latitude, lng: longitude }} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    );

}
