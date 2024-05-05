import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Typography, Box } from "@mui/material"; 
import WeatherForecastTable from "./components/weather_forecast_table";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(`https://weatherapp-xi8f.onrender.com/weather/forecast/${latitude}/${longitude}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
        })
        .catch(error => {
          console.error('Error while fetching weather forecast:', error);
        });
    }, function (error) {
      console.error('Error while obtaining location:', error);
    });
  }, []);

  return (
    <Box textAlign="center">
      <Typography variant="h3">Weather Forecast</Typography>
      <WeatherForecastTable weatherData={weatherData} />
      <Link href="/about">
        <Typography variant="body1">About</Typography>
      </Link>
    </Box>
  );
};

export default Home;
