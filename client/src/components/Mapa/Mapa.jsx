import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './mapa.css';

const Mapa = () => {
  return (
    <MapContainer center={[-32.883, -68.838]} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[-32.88378408225708, -68.83845612288387]}>
        <Popup>
          Circus Cotillón <br /> Av. Godoy Cruz 65.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
