import React from "react";
import { Typography, Box, Paper, useMediaQuery, useTheme } from "@mui/material"; 
import useWeatherData from "./components/_useWeatherData";
import WeatherForecastTable from "./components/_weatherTable";

const Home = () => {
  const weatherData = useWeatherData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box textAlign="center" padding={2}>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          sx={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            padding: '10px'  // Adjust padding as needed
          }}
        >
          Weather Forecast
        </Typography>
      </Paper>
      <WeatherForecastTable weatherData={weatherData} />
    </Box>
  );
};

export default Home;
