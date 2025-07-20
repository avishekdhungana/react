import { useState } from "react";
import axios from "axios";

function My() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "490182e9cf726de726e1f18e5d0a7d15"; // Replace with your API key

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
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-4xl font-bold mb-8 drop-shadow-lg">
        🌍 Weather Finder
      </h1>

      <div className="flex mb-6 max-w-md w-full">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow p-3 rounded-l-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onKeyDown={(e) => { if (e.key === 'Enter') fetchWeather(); }}
        />
        <button
          onClick={fetchWeather}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-r-md font-semibold transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {error && (
        <p className="text-red-300 mb-4 max-w-md text-center">{error}</p>
      )}

      {weather && (
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-md w-full text-gray-800">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            📍 {weather.name}, {weather.sys.country}
          </h2>

          <div className="flex items-center space-x-4 mb-4">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="w-24 h-24"
            />
            <p className="capitalize text-lg">{weather.weather[0].description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center font-medium">
            <div className="p-3 bg-purple-100 rounded-lg">
              <p className="text-xl">{Math.round(weather.main.temp)}°C</p>
              <p className="text-sm text-purple-700">Temperature</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <p className="text-xl">{weather.main.humidity}%</p>
              <p className="text-sm text-purple-700">Humidity</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <p className="text-xl">{weather.wind.speed} m/s</p>
              <p className="text-sm text-purple-700">Wind Speed</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <p className="text-xl">{weather.main.pressure} hPa</p>
              <p className="text-sm text-purple-700">Pressure</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default My;
