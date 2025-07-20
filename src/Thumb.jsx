import { useState } from 'react';
import axios from 'axios';

function Thumb() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "490182e9cf726de726e1f18e5d0a7d15";

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("Could not fetch weather. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") fetchWeather();
        }}
      />

      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
        </div>
      )}
    </div>
  );
}

export default Thumb;
