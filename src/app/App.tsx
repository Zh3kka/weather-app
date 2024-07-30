import React, { useState } from "react";
import { mockWeatherData } from "../shared/mocks/weatherData";
import CityInput from "../features/CitySearch/components/CityInput";
import WeatherInfo from "../entities/Weather/WeatherInfo/WeatherInfo";
import History from "../processes/History/components/History";

const App: React.FC = () => {
  const [weather, setWeather] = useState<{
    temperature: number;
    description: string;
    icon: string;
  } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>(Object.keys(mockWeatherData));

  const fetchWeather = (city: string) => {
    const data = mockWeatherData[city];
    if (data) {
      setWeather(data);
      setHistory([city, ...history]);
    } else {
      console.error("Город не найден в моковых данных.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Погода в городе</h1>
      <CityInput
        onCitySubmit={fetchWeather}
        cities={cities}
        setCities={setCities}
      />
      <WeatherInfo weather={weather} />
      <History history={history} onCitySelect={fetchWeather} />
    </div>
  );
};

export default App;
