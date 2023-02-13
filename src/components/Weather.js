import React, { useState, useEffect } from "react";


const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          setError("Can't process your local weather");
        }
      );
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY
      const { lat, lon } = location;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    };

    if (location.lat && location.lon) {
      fetchData();
    }
  }, [location]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : weatherData.main ? (
        <div>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherAPI;
