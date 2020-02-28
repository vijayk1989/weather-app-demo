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
            <h2>Weather</h2>
            <p>
              <strong>Type: </strong>
              {weatherData.weather[0].main}
            </p>
            <p>
              <strong>description: </strong>
              {weatherData.weather[0].description}
            </p>
          </Card>
          <Card className="weather-data-card">
            <h2>Temperature</h2>
            <p>
              <strong>Current Temp: </strong>
              {weatherData.main.temp} &#8457;
            </p>
            <p>
              <strong>Feels Like: </strong>
              {weatherData.main.feels_like} &#8457;
            </p>
            <p>
              <strong>Min Temp: </strong>
              {weatherData.main.temp_min} &#8457;
            </p>
            <p>
              <strong>Max Temp: </strong>
              {weatherData.main.temp_max} &#8457;
            </p>
            <p>
              <strong>Pressure: </strong>
              {weatherData.main.pressure} kPA
            </p>
            <p>
              <strong>Humidity: </strong>
              {weatherData.main.humidity}
            </p>
          </Card>
          <Card className="weather-data-card">
            <h2>Wind</h2>
            <p>
              <strong>Speed: </strong>
              {weatherData.wind.speed} mph
            </p>
            {weatherData.wind.gust && (
              <p>
                <strong>Gust: </strong>
                {weatherData.wind.gust} mph
              </p>
            )}
          </Card>
        </Container>
      )}
    </>
  );
};

export default WeatherCard;
