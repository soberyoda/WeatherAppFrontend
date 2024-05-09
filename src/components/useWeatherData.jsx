import { useEffect, useState } from "react";

const useWeatherData = (userLocation) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!userLocation) return; 

        const { lat, lon } = userLocation; 
        const response = await fetch(
          `https://weatherapp-xi8f.onrender.com/weather/forecast/${lat}/${lon}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [userLocation]);

  return weatherData;
};

export default useWeatherData;
