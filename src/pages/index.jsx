import React from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material"; 
import useWeatherData from "./components/_useWeatherData";
import WeatherForecastTable from "./components/_weatherTable";

const Home = () => {
  const weatherData = useWeatherData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box textAlign="center">
      <Typography variant={isMobile ? "h4" : "h3"} sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Weather Forecast
      </Typography>
      <WeatherForecastTable weatherData={weatherData} />
    </Box>
  );
};

export default Home;
