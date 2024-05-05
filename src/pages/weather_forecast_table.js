import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import getWeatherIcon from './weatherIcons';

const WeatherForecastTable = ({ weatherData }) => {
    if (!weatherData) {
        return <p>Loading...</p>; 
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Weather Icon</TableCell>
                    <TableCell>Max Temperature</TableCell>
                    <TableCell>Min Temperature</TableCell>
                    <TableCell>Estimated Energy (kW)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {weatherData.map(day => (
                    <TableRow key={day.date}>
                        <TableCell>{day.date}</TableCell>
                        <TableCell>{getWeatherIcon(day.weatherCode)}</TableCell>
                        <TableCell>{day.maxTemperature}</TableCell>
                        <TableCell>{day.minTemperature}</TableCell>
                        <TableCell>{day.estimatedEnergy}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default WeatherForecastTable;
