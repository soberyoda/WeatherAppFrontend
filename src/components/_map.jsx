import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@mui/material";
import 'leaflet/dist/leaflet.css';

const Map = ({ userLocation }) => {
  const [mapCenter, setMapCenter] = useState(null); 

  useEffect(() => {
    if (userLocation) {
      const { lat, lon } = userLocation;
      setMapCenter([lat, lon]);
    }
  }, [userLocation]);

  return (
    <Box
      sx={{
        height: "400px",
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
          <Marker position={[mapCenter[0], mapCenter[1]]}>
            <Popup>Your location {userLocation.lat} {userLocation.lon}</Popup>
          </Marker>
        </MapContainer>
      )}
    </Box>
  );
};

export default Map;
