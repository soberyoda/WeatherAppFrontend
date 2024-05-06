import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getWeatherIcon from './_weatherIcons';

const WeatherForecastTable = ({ weatherData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedDay, setExpandedDay] = useState(null);

  const handleDayExpand = (day) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 790, margin: 'auto', overflow: 'auto'}}>
      <Table>
        <TableHead>
          <TableRow style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'white'}}>Date</TableCell>
            {!isMobile && (
              <>
                <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'white'}}>Weather Icon</TableCell>
                <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'white'}}>Max Temperature</TableCell>
                <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'white'}}>Min Temperature</TableCell>
                <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'white'}}>Estimated Energy (kWh)</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherData.map(day => (
            <React.Fragment key={day.date}>
              <TableRow onClick={() => handleDayExpand(day.date)}>
                <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'#7d7574'}}>{day.date}</TableCell>
                {!isMobile && (
                  <>
                    <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'#7d7574'}}>{getWeatherIcon(day.weatherCode)}</TableCell>
                    <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'#7d7574'}}>{day.maxTemperature}</TableCell>
                    <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'#7d7574'}}>{day.minTemperature}</TableCell>
                    <TableCell sx={{ fontSize: isMobile ? '14px' : 'inherit' }} align='center' style={{color:'#7d7574'}}>{day.estimatedEnergy}</TableCell>
                  </>
                )}
              </TableRow>
              {isMobile && expandedDay === day.date && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography style={{color:'#7d7574'}}>Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
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
                      </AccordionDetails>
                    </Accordion>
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
