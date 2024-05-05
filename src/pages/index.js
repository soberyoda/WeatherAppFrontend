import React, {useEffect, useState} from "react";
import Link from "next/link";
import WeatherForecastTable from './weather_forecast_table';
const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          fetch(`https://weatherapp-xi8f.onrender.com/weather/forecast/${latitude}/${longitude}`)
              .then(response => response.json())
              .then(data => {
                  setWeatherData(data);
              })
              .catch(error => {
                  console.error('Błąd podczas pobierania prognozy pogody:', error);
              });
      }, function(error) {
          console.error('Błąd podczas uzyskiwania lokalizacji:', error);
      });
  }, []);
  return (
    <div>
        <h1>Hello World.</h1>
            <WeatherForecastTable weatherData={weatherData} />
            <Link href="/about">About</Link>
    </div>
);

};

export default Home; 
