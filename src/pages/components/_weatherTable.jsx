import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, useMediaQuery, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import getWeatherIcon from './_weatherIcons';

const WeatherTile = ({ day }) => {
  return (
    <Paper elevation={3} style={{ padding: '15px', marginBottom: '20px' }}>
      <Typography variant="h6" style={{ marginBottom: '10px', color: '#7d7574' }}>Details for {day.date}</Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Max Temperature: ${day.maxTemperature}`} 
            primaryTypographyProps={{ style: { color: '#7d7574' } }}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Min Temperature: ${day.minTemperature}`} 
            primaryTypographyProps={{ style: { color: '#7d7574' } }}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Weather Icon:`} 
            primaryTypographyProps={{ style: { color: '#7d7574' } }}/>{getWeatherIcon(day.weatherCode)}
        </ListItem>
        <ListItem>
          <ListItemText primary={`Estimated Energy (kW): ${day.estimatedEnergy}`} 
            primaryTypographyProps={{ style: { color: '#7d7574' } }}/>
        </ListItem>
      </List>
    </Paper>
  );
};

const WeatherForecastTable = ({ weatherData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 790, margin: 'auto', overflow: 'auto'}}>
      <Table>
        <TableHead>
          <TableRow style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <TableCell align='center' style={{color:'white'}}>Date</TableCell>
            {!isMobile && (
              <>
                <TableCell align='center' style={{color:'white'}}>Weather Icon</TableCell>
                <TableCell align='center' style={{color:'white'}}>Max Temperature</TableCell>
                <TableCell align='center' style={{color:'white'}}>Min Temperature</TableCell>
                <TableCell align='center' style={{color:'white'}}>Estimated Energy (kWh)</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherData.map((day, index) => (
            <React.Fragment key={day.date}>
              {isMobile && index === 0 && (
                <Grid item xs={12}>
                  <WeatherTile day={day} />
                </Grid>
              )}
              <TableRow>
                <TableCell align='center' style={{color:'#7d7574'}}>{day.date}</TableCell>
                {!isMobile && (
                  <>
                    <TableCell align='center' style={{color:'#7d7574'}}>{getWeatherIcon(day.weatherCode)}</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.maxTemperature}</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.minTemperature}</TableCell>
                    <TableCell align='center' style={{color:'#7d7574'}}>{day.estimatedEnergy}</TableCell>
                  </>
                )}
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherForecastTable;
