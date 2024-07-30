import React, { useState, useEffect } from "react";
import { TextField, Button, Autocomplete } from "@mui/material";
import { mockWeatherData } from "../../../shared/mocks/weatherData";

interface CityInputProps {
  onCitySubmit: (city: string) => void;
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
}

const CityInput: React.FC<CityInputProps> = ({
  onCitySubmit,
  cities,
  setCities,
}) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    onCitySubmit(city);
    setCity("");
  };

  useEffect(() => {
    setCities(Object.keys(mockWeatherData));
  }, [setCities]);

  return (
    <div className="flex flex-col items-center p-4">
      <Autocomplete
        className="w-full mb-4"
        freeSolo
        options={cities}
        value={city}
        onChange={(event, newValue) => setCity(newValue || "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Введите город"
            variant="outlined"
            className="mb-4 w-full max-w-xs"
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="w-full max-w-xs"
      >
        Показать погоду
      </Button>
    </div>
  );
};

export default CityInput;
