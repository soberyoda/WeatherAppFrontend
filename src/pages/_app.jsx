import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles'; 
import { purple } from '@mui/material/colors';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: purple,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    justifyContent: 'center', 
  },
  '@global': {
    body: {
      minHeight: '100vh',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)',
      margin: 0,
      padding: 0,
    },
  },
}));

const App = ({ Component, pageProps }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <div className={classes.root}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
