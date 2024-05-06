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
      <Paper elevation={3} sx={{ padding: '20px', background:'#b1c6f9'}}>
      <Typography 
          variant={isMobile ? "h4" : "h3"} 
          sx={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '20px',
            background: '-webkit-linear-gradient(#667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
            Weather Forecast
        </Typography>
        <WeatherForecastTable weatherData={weatherData} />
      </Paper>
    </Box>
  );
};

export default Home;
