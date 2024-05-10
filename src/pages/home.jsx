import React from "react";
import {
  Typography,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  IconButton,
  Grid,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useWeatherData from "../components/useWeatherData";
import WeatherForecastTable from "../components/weatherTable";
import { makeStyles } from "@mui/styles";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  darkPaper: {
    padding: "20px",
    background: "#1a1a1a",
    color: "#fff",
  },
  lightPaper: {
    padding: "20px",
    background: "#b1c6f9",
    color: "#000",
  },
}));

const Home = ({ toggleDarkMode, darkMode, userLocation }) => {
  const weatherData = useWeatherData(userLocation);
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
            padding: 2,
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            textShadow: darkMode
              ? "4px 4px 6px rgba(205, 77, 204, 1)"
              : "2px 2px 4px rgba(0,0,0,0.5)",
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <WeatherForecastTable
              weatherData={weatherData}
              darkMode={darkMode}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Map userLocation={userLocation} darkMode={darkMode}/>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
