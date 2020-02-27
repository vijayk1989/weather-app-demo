import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Select, MenuItem, Button } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const cities = ["New York", "Austin", "Seattle"];

  const handleChange = event => {
    setCity(event.target.value);
  };

  const handleUnit = (event, newUnit) => {
    if (newUnit !== null) {
      setUnit(newUnit);
      console.log(unit);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("Choses City", city);
    try {
      const data = await axios.get(
        `http://localhost:5500/weather?city=${city}`
      );
      setWeatherData(data);
    } catch (err) {
      // Do something with err
      console.log(err);
    }
    setCity("");
  };

  return (
    <div className="App">
      <h1>Awesome Weather App</h1>
      <form className="city-form" onSubmit={handleSubmit}>
        <Select
          id="select-city"
          value={city}
          displayEmpty
          onChange={handleChange}
          className="cities-select"
        >
          <MenuItem value="" disabled>
            Select city
          </MenuItem>
          {cities.map(city => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        <Button
          type="submit"
          disabled={!city}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
      {weatherData && (
        <div className="weather-data">
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
      <div className="toggle-unit-group">
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={handleUnit}
          aria-label="Change unit"
        >
          <ToggleButton value="metric" aria-label="metric">
            F
          </ToggleButton>
          <ToggleButton value="imperial" aria-label="imperial">
            C
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default App;
