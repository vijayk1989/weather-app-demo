import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { SET_WEATHER, CHANGE_CITY } from "./redux/modules/weather";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, Button } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

function App() {
  // const [city, setCity] = useState("");
  // const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const city = useSelector(state => state.city);
  const weatherData = useSelector(state => state.weatherData);
  const dispatch = useDispatch();
  const cities = ["New York", "Austin", "Seattle"];

  const handleChange = event => {
    dispatch({ type: CHANGE_CITY, payload: event.target.value });
  };

  const handleUnit = (event, newUnit) => {
    if (newUnit !== null) {
      console.log(newUnit);
      setUnit(() => newUnit);
    }
    console.log("UNIT:", unit);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("Choses City", city);
    try {
      const data = await axios.get(
        `http://localhost:5500/weather?city=${city}`
      );
      dispatch({ type: SET_WEATHER, payload: data });
    } catch (err) {
      // Do something with err
      console.log(err);
    }
    dispatch({ type: CHANGE_CITY, payload: "" });
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
      <div className="toggle-unit-group">
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={handleUnit}
          aria-label="Change unit"
        >
          <ToggleButton value="metric" aria-label="metric">
            C
          </ToggleButton>
          <ToggleButton value="imperial" aria-label="imperial">
            F
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {weatherData && (
        <div className="weather-data">
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
