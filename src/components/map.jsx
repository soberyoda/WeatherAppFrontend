import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import SelectedLocationTable from "./selectedLocationTable";
import useWeatherData from "./useWeatherData";

const Map = ({ userLocation, darkMode }) => {
  const [mapCenter, setMapCenter] = useState(null); 
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const weatherData = useWeatherData(selectedLocation);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  useEffect(() => {
    if (userLocation) {
      const { lat, lon } = userLocation;
      setMapCenter([lat, lon]);
    }
  }, [userLocation]);

  const handleClick = (event) => {
    console.log("Map clicked at:", event.latlng);
    setSelectedLocation({ 
      lat: event.latlng.lat,
      lon: event.latlng.lng
    });
  };

  const handleResetLocation = () => { 
    setSelectedLocation(userLocation);
  };

  return (
    <Box
      sx={{
        height: isSmallScreen? 450: 550,
        width: "100%",
        border: "2px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {mapCenter && (
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ClickableMapEvents handleClick={handleClick} />
          {mapCenter && (
            <Marker position={mapCenter}>
              <Popup sx={{ width: { xs: "90vw", md: 200 } }}>
                Your current location: {mapCenter[0]}, {mapCenter[1]}
              </Popup>
            </Marker>
          )}
          {selectedLocation && ( 
            <Marker position={[selectedLocation.lat, selectedLocation.lon]} icon={redIcon}>
              <Popup sx={{ width: isSmallScreen ? 200 : 400 }}>
                {weatherData && (
                  <Box sx={{ maxWidth: isSmallScreen ? 200 : 600 }}>
                    <SelectedLocationTable weatherData={weatherData} darkMode={darkMode}/>
                  </Box>
                )}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </Box>
  );
};

const ClickableMapEvents = ({ handleClick }) => {
  useMapEvents({
    click: (event) => {
      handleClick(event);
    },
  });

  return null;
};

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41], // Rozmiar ikony znacznika
  iconAnchor: [12, 41], // Pozycja przyłączenia ikony znacznika
  popupAnchor: [1, -34], // Pozycja przyłączenia treści popup
  shadowSize: [41, 41]
});

export default Map;
