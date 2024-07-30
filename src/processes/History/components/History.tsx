import React from "react";

interface HistoryProps {
  history: string[];
  onCitySelect: (city: string) => void;
}

const History: React.FC<HistoryProps> = ({ history, onCitySelect }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">История запросов:</h3>
      <ul className="list-none pl-5 text-center space-y-4">
        {history.map((city, index) => (
          <li
            key={index}
            onClick={() => onCitySelect(city)}
            className="cursor-pointer hover:text-blue-500 transition-colors p-2 border rounded-md hover:border-blue-500"
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
