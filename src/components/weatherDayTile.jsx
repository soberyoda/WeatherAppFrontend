import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import getWeatherIcon from "./weatherIcons";
const WeatherTile = ({ day }, darkMode) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        background:
          "radial-gradient(827px at 47.3% 48%, rgb(255, 255, 255) 0%, rgb(138, 192, 216) 90%)",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={3}>
          <Typography
            variant="body1"
            sx={{ color: darkMode ? "black" : "#7d7574" }}
          >
            Max Temperature:
          </Typography>
          <Typography variant="body1">{day.maxTemperature} ℃</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="body1"
            sx={{ color: darkMode ? "black" : "#7d7574" }}
          >
            Min Temperature:
          </Typography>
          <Typography variant="body1">{day.minTemperature} ℃</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="body1"
            sx={{ color: darkMode ? "black" : "#7d7574" }}
          >
            Weather Icon:
          </Typography>
          {getWeatherIcon(day.weatherCode)}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="body1"
            sx={{ color: darkMode ? "black" : "#7d7574" }}
          >
            Estimated Energy:
          </Typography>
          <Typography variant="body1">{day.estimatedEnergy} kWh</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WeatherTile;
