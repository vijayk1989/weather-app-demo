import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_CITY,
  SET_WEATHER,
  CHANGE_LOADING
} from "../../redux/modules/weather";
import { Select, MenuItem, Button } from "@material-ui/core";
import axios from "axios";
import "./Weather.css";

const WeatherForm = () => {
  const city = useSelector(state => state.city);
  const isLoading = useSelector(state => state.isLoading);
  const cities = ["New York", "Austin", "Seattle"];
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch({ type: CHANGE_CITY, payload: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      dispatch({ type: CHANGE_LOADING });
      const weather = await axios.get(
        `http://localhost:5500/weather?city=${city}`
      );
      dispatch({ type: SET_WEATHER, payload: weather.data });
      dispatch({ type: CHANGE_LOADING });
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: CHANGE_CITY, payload: "" });
  };

  return (
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
        disabled={!city || isLoading === true}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default WeatherForm;
