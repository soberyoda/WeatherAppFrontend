import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const WeatherForecastTable = ({ weatherData }) => {
    if (!weatherData) {
        return <p>Loading...</p>; 
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Ikona pogody</TableCell>
                    <TableCell>Temperatura maksymalna</TableCell>
                    <TableCell>Temperatura minimalna</TableCell>
                    <TableCell>Szacowana energia (kWh)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {weatherData.map(day => (
                    <TableRow key={day.date}>
                        <TableCell>{day.date}</TableCell>
                        <TableCell>{/* Tutaj ikona pogody */}</TableCell>
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
