import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple } from "@mui/material/colors";
import { GlobalStyles } from "@mui/material";
import Home from "./index"; 
const light = createTheme({
  palette: {
    primary: purple,
    background: {
      default: "#d0f2f7"
    } 
  },
});

const dark = createTheme({
  palette: {
    primary: purple,
    background: {
      default: "#4e549d"
    } 
  },
});



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <CssBaseline />
      <GlobalStyles />
      <Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </ThemeProvider>
  );
};

export default App;
