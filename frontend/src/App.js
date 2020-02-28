import React from "react";
import "./App.css";
import WeatherForm from "./components/weather/WeatherForm";
import WeatherCard from "./components/weather/WeatherCard";

function App() {
  return (
    <div className="App">
      <h1>Awesome Weather App</h1>
      <WeatherForm />
      <WeatherCard />
    </div>
  );
}

export default App;
