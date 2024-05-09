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

const getWeatherIcon = (weatherCode, darkMode) => {
    switch (weatherCode) {
        case 0:
            return <WbSunny style={{color: darkMode? "#ffdc34":"#e985f7"}}/>; // Clear sky
        case 1:
        case 2:
        case 3:
            return <CloudQueue style={{color: darkMode? "#ffb0ce":"#7b66bc"}}/>; // Mainly clear, partly cloudy, and overcast
        case 45:
        case 48:
        case 51:
        case 53:
        case 55:            
        case 56:
        case 57:
            return <Opacity style={{color:'#0e3d64'}}/>; // Fog and depositing rime fog   
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return <Flare style={{color:'#7c9efd'}}/>; // Freezing Rain: Light and heavy intensity
        case 71:
        case 73:
        case 75:
            return <Grain style={{color:"#008cff"}}/>; // Snow fall: Slight, moderate, and heavy intensity
        case 77:
            return <Grain style={{color:"#008cff"}}/>; // Snow grains
        case 80:
        case 81:
        case 82:
            return <FlashOn style={{color:'#fe65df'}}/>; // Rain showers: Slight, moderate, and violent
        case 85:
        case 86:
            return <Grain style={{color:"#008cff"}}/>; // Snow showers slight and heavy
        case 95:
        case 96:
        case 99:
            return <FlashOn style={{color:'#fe65df'}}/>; // Thunderstorm: Slight or moderate
        default:
            return null; // Domyślna ikona dla nieznanego kodu pogodowego
    }
};

export default getWeatherIcon;