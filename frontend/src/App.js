import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Select, MenuItem, Button } from "@material-ui/core";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const cities = ["New York", "Austin", "Seattle"];

  const handleChange = event => {
    setCity(event.target.value);
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
          <pre>{JSON.stringify(weatherData, null)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
