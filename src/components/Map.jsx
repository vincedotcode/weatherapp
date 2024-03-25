import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ coordinates }) => {
  return (
    <div >
      <h2 className="text-xl font-semibold mb-4 text-center">Location Map</h2>
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            Current location based on weather data.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
