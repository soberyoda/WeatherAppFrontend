import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  useMediaQuery,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import getWeatherIcon from "./weatherIcons";
import CircularProgress from "@mui/material/CircularProgress";
import WeatherTile from "./_weatherDayTile";

const WeatherForecastTable = ({ weatherData, darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (!weatherData) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <React.Fragment>
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{
          maxWidth: 750, 
          margin: "auto",
          overflow: "auto",
          backgroundColor: darkMode ? "rgb(82, 113, 196)" : "#ffffff",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: darkMode
                  ? "linear-gradient(111.3deg, rgb(74, 105, 187) 9.6%, rgb(205, 77, 204) 93.6%)"
                  : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <TableCell align="center" sx={{ color: "white" }}>
                {isMobile ? "Today" : "Date"}
              </TableCell>
              {!isMobile && (
                <>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Weather Icon
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Max Temperature
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Min Temperature
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Estimated Energy
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {weatherData.map((day, index) => (
              <React.Fragment key={day.date}>
                {isMobile && index === 0 && (
                  <Grid item xs={12}>
                    <WeatherTile day={day} isToday={true} darkMode />
                  </Grid>
                )}
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ color: darkMode ? "white" : "#7d7574" }}
                  >
                    {index === 0 && isMobile
                      ? "Next Days"
                      : new Date(day.date).toLocaleDateString("en-GB")}
                  </TableCell>
                  {!isMobile && (
                    <>
                      <TableCell align="center">
                        {getWeatherIcon(day.weatherCode, darkMode)}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: darkMode ? "white" : "#7d7574" }}
                      >
                        {day.maxTemperature} ℃
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: darkMode ? "white" : "#7d7574" }}
                      >
                        {day.minTemperature} ℃
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: darkMode ? "white" : "#7d7574" }}
                      >
                        {day.estimatedEnergy} kWh
                      </TableCell>
                    </>
                  )}
                </TableRow>
                {isMobile && index !== 0 && (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <Grid container spacing={2} justifyContent="space-around">
                        <Grid item xs={6} sm={3}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            Max Temp:
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            {day.maxTemperature} ℃
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            Min Temp:
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            {day.minTemperature} ℃
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            Weather Icon:
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            {getWeatherIcon(day.weatherCode, darkMode)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            Estimated Energy:
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode ? "white" : "#7d7574",
                              fontSize: "0.8rem",
                            }}
                          >
                            {day.estimatedEnergy} kWh
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default WeatherForecastTable;
