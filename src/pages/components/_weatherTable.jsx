import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, useMediaQuery, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import getWeatherIcon from './_weatherIcons';
import CircularProgress from '@mui/material/CircularProgress';

const WeatherTile = ({ day }) => {
    return (
      <Paper elevation={3} style={{ padding: '15px', marginBottom: '20px',  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} sm={3}>
            <Typography variant="body1" style={{ color: '#7d7574' }}>Max Temperature:</Typography>
            <Typography variant="body1">{day.maxTemperature} ℃</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1" style={{ color: '#7d7574' }}>Min Temperature:</Typography>
            <Typography variant="body1">{day.minTemperature} ℃</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1" style={{ color: '#7d7574' }}>Weather Icon:</Typography>
            {getWeatherIcon(day.weatherCode)}
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body1" style={{ color: '#7d7574' }}>Estimated Energy:</Typography>
            <Typography variant="body1">{day.estimatedEnergy} kWh</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  };
  
const WeatherForecastTable = ({ weatherData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!weatherData) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 790, margin: 'auto', overflow: 'auto'}}>
      <Table>
        <TableHead>
          <TableRow style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <TableCell align='center' style={{color:'white'}}>{isMobile ? "Today" : "Date"}</TableCell>
            {!isMobile && (
              <>
                <TableCell align='center' style={{color:'white'}}>Weather Icon</TableCell>
                <TableCell align='center' style={{color:'white'}}>Max Temperature</TableCell>
                <TableCell align='center' style={{color:'white'}}>Min Temperature</TableCell>
                <TableCell align='center' style={{color:'white'}}>Estimated Energy</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherData.map((day, index) => (
            <React.Fragment key={day.date}>
              {isMobile && index === 0 && (
                <Grid item xs={12}>
                  <WeatherTile day={day} isToday={true} />
                </Grid>
              )}
              <TableRow>
                <TableCell align='center' style={{color:'#000000'}}>
                  {index === 0 && isMobile ? "Next Days" : new Date(day.date).toLocaleDateString('en-GB')}
                </TableCell>
                {!isMobile && (
                  <>
                    <TableCell align='center' style={{color:'#7d7574'}}>{getWeatherIcon(day.weatherCode)}</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.maxTemperature} ℃</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.minTemperature} ℃</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.estimatedEnergy} kWh</TableCell>
                  </>
                )}
              </TableRow>
              {isMobile && index !== 0 && (
                    <TableRow>
                    <TableCell colSpan={5} align='center'>
                        <Grid container spacing={2} justifyContent="space-around">
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>Max Temp:</Typography>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>{day.maxTemperature} ℃</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>Min Temp:</Typography>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>{day.minTemperature} ℃</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>Weather Icon:</Typography>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>{getWeatherIcon(day.weatherCode)}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>Estimated Energy:</Typography>
                                <Typography variant="subtitle1" style={{ color:'#7d7574', fontSize: '0.8rem' }}>{day.estimatedEnergy} kWh</Typography>
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
  );
};

export default WeatherForecastTable;
