// Home.js

import React from "react";
import {
  Typography,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useWeatherData from "./components/_useWeatherData";
import WeatherForecastTable from "./components/_weatherTable";
import { makeStyles } from "@mui/styles"; 
const useStyles = makeStyles((theme) => ({
  darkPaper: {
    padding: "20px",
    background: "#000000",
    color: "#fff",
  },
  lightPaper: {
    padding: "20px",
    background: "#b1c6f9",
    color: "#000",
  },
}));

const Home = ({ toggleDarkMode, darkMode }) => { 
  const weatherData = useWeatherData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Box textAlign="center" padding={2}>
      <Paper
        elevation={3}
        className={darkMode ? classes.darkPaper : classes.lightPaper}
      >
        <IconButton
          onClick={toggleDarkMode}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            color: darkMode ? "#d3dbff" : "#20274f",
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            textShadow: darkMode ? "4px 4px 6px rgba(205, 77, 204, 1)" : "2px 2px 4px rgba(0,0,0,0.5)",
            marginBottom: "20px",
            background: darkMode
              ? "-webkit-linear-gradient(rgb(74, 105, 187), #ffffff)"
              : "-webkit-linear-gradient(#667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Weather Forecast
        </Typography>
        <WeatherForecastTable weatherData={weatherData} darkMode={darkMode} />
      </Paper>
    </Box>
  );
};

export default Home;
