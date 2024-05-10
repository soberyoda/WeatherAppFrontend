import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple } from "@mui/material/colors";
import { GlobalStyles } from "@mui/material";
import Home from "./home";
import { useEffect } from "react";
const light = createTheme({
  palette: {
    primary: purple,
    background: {
      default: "#d0f2f7",
    },
  },
});

const dark = createTheme({
  palette: {
    primary: purple,
    background: {
      default: "#121212",
    },
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchUserLocation();
  }, []);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline />
      <GlobalStyles />
      <Home
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        userLocation={userLocation}
      />
    </ThemeProvider>
  );
};

export default App;
