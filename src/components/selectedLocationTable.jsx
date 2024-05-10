import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import getWeatherIcon from "./weatherIcons";

const SelectedLocationTable = ({ weatherData, darkMode }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!weatherData) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: "100%",
        margin: "auto",
        overflow: "auto",
        backgroundColor: darkMode ? "rgb(82, 113, 196)" : "#ffffff",
      }}
    >
      <Table size={isSmallScreen ? "small" : "medium"}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2} sx={{ color: darkMode ? "white" : "#7d7574",fontSize: isSmallScreen ? 10 : 12 }}>
              <strong>Date</strong>
            </TableCell>
            <TableCell align="center" sx={{ color: darkMode ? "white" : "#7d7574" ,fontSize: isSmallScreen ? 10 : 12 }}>
              <strong>Weather icon</strong>
            </TableCell>
            <TableCell align="center" sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
              <strong>Max Temp (℃)</strong>
            </TableCell>
            <TableCell align="center" sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
              <strong>Min Temp (℃)</strong>
            </TableCell>
            <TableCell align="center" sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
              <strong>Energy (kWh)</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherData.map((day, index) => (
            <TableRow key={day.date}>
              <TableCell align="center" colSpan={2} sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
                <strong>{new Date(day.date).toLocaleDateString("en-GB")}</strong>
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                {getWeatherIcon(day.weatherCode, darkMode)}
              </TableCell>
              <TableCell align="center" sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
                {day.maxTemperature} ℃
              </TableCell>
              <TableCell align="center"sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
                {day.minTemperature} ℃
              </TableCell>
              <TableCell align="center" sx={{color: darkMode ? "white" : "#7d7574", fontSize: isSmallScreen ? 10 : 12 }}>
                <strong>{day.estimatedEnergy} kWh</strong>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedLocationTable;
