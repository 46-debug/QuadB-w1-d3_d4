import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Weather() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c93c72146669cbbeca588175bf7c56f8`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather">
      {weather ? (
        <>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.main?.temp}°C</p>
          <p>Condition: {weather.weather?.[0]?.description}</p>
          <p>Humidity: {weather.main?.humidity}%</p>
          <p>Wind Speed: {weather.wind?.speed} m/s</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
