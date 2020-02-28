import React from "react";
import { useSelector } from "react-redux";
import { Card, Container } from "@material-ui/core";
import "./Weather.css";

const WeatherCard = () => {
  const weatherData = useSelector(state => state.weatherData);
  return (
    <>
      {weatherData && (
        <Container maxWidth="sm" className="weather-data-container">
          <Card className="weather-data-card">
            <h2>Temperature</h2>
            <p>
              <strong>Current Temp: </strong>
              {weatherData.main.temp} &#8451;
            </p>
          </Card>
          <Card className="weather-data-card">
            <h2>The Sun</h2>
            <p>
              <strong>Sunrise: </strong>
              {new Date(
                weatherData.sys.sunrise - weatherData.timezone
              ).toLocaleTimeString("en-US")}
            </p>
            <p>
              <strong>Sunset: </strong>
              {new Date(
                weatherData.sys.sunset - weatherData.timezone
              ).toLocaleTimeString("en-US")}
            </p>
          </Card>
        </Container>
      )}
    </>
  );
};

export default WeatherCard;
