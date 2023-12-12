    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(''); // Store the city name in state

    useEffect(() => {
        // Define a function to fetch weather data
        const fetchWeatherData = async () => {
        try {
            const apiKey = 'YOUR_API_KEY';
            const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
        };

        // Call the fetchWeatherData function when the component mounts
        fetchWeatherData();
    }, [city]);

    return (
        <div>
        <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        {weatherData && (
            <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            </div>
        )}
        </div>
    );
    }

    export default Weather;
