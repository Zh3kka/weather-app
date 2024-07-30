import React from "react";

interface WeatherInfoProps {
  weather: {
    temperature: number;
    description: string;
    icon: string;
  } | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-semibold mb-2">
        Температура: {weather.temperature}°C
      </h2>
      <p className="text-lg mb-2">Состояние: {weather.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weather.icon}.png`}
        alt={weather.description}
        className="mx-auto"
      />
    </div>
  );
};

export default WeatherInfo;
