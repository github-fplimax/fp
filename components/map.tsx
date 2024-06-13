"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const Map: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    { id: 'head office', name: 'Head Office', position: [-6.197165935246908, 106.75606377319967] },
    { id: 'meruya', name: 'Meruya', position: [-6.2033286874817675, 106.7368489227159] },
  ];

  return (
    <div className="relative h-64 w-full">
      <MapContainer center={[-2.5489, 118.0149]} zoom={5} className="h-full w-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(location => (
          <Marker 
            key={location.id} 
            position={location.position} 
            eventHandlers={{
              click: () => {
                setSelectedLocation(location.name);
              },
            }}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 z-20">
            <h2 className="text-2xl font-bold mb-4">{selectedLocation}</h2>
            <p>Detail about {selectedLocation}</p>
            <button 
              onClick={() => setSelectedLocation(null)} 
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
