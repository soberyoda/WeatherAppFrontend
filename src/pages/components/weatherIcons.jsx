import React from 'react';
import {
    WbSunny,
    Cloud,
    CloudQueue,
    Opacity,
    Grain,
    Flare,
    FlashOn
} from '@mui/icons-material';

const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
        case 0:
            return <WbSunny />; // Clear sky
        case 1:
        case 2:
        case 3:
            return <CloudQueue />; // Mainly clear, partly cloudy, and overcast
        case 45:
        case 48:
            return <Opacity />; // Fog and depositing rime fog
        case 51:
        case 53:
        case 55:
            return <Opacity />; // Drizzle: Light, moderate, and dense intensity
        case 56:
        case 57:
            return <Opacity />; // Freezing Drizzle: Light and dense intensity
        case 61:
        case 63:
        case 65:
            return <Flare />; // Rain: Slight, moderate and heavy intensity
        case 66:
        case 67:
            return <Flare />; // Freezing Rain: Light and heavy intensity
        case 71:
        case 73:
        case 75:
            return <Grain />; // Snow fall: Slight, moderate, and heavy intensity
        case 77:
            return <Grain />; // Snow grains
        case 80:
        case 81:
        case 82:
            return <FlashOn />; // Rain showers: Slight, moderate, and violent
        case 85:
        case 86:
            return <Grain />; // Snow showers slight and heavy
        case 95:
        case 96:
        case 99:
            return <FlashOn />; // Thunderstorm: Slight or moderate
        default:
            return null; // Domyślna ikona dla nieznanego kodu pogodowego
    }
};

export default getWeatherIcon;
