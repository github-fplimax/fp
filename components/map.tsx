"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const Map: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    { id: 'head office', name: 'Head Office', position: [-6.197165935246908, 106.75606377319967] },
    { id: 'meruya', name: 'Meruya', position: [-6.2033286874817675, 106.7368489227159] },
    { id: 'balaraja', name: 'Balaraja', position: [-6.2044735090176495, 106.4742490532345] },
    { id: 'cikarang', name: 'Cikarang', position: [-6.318700606980848, 107.1434229667284] },
    { id: 'jati asih', name: 'Jati asih', position: [-6.258981274378192, 106.95727029556357] },
    { id: 'cirebon', name: 'Cirebon', position: [-6.758798517847206, 108.59495546488216] },
    { id: 'semarang', name: 'Semarang', position: [-6.947144717052865, 110.49207220906251] },
    { id: 'solo', name: 'Solo', position: [-7.564767952868212, 110.72266848208277] },
    { id: 'kediri', name: 'Kediri', position: [-6.1887664,106.758861] },
    // { id: '', name: '', position: [] },
    // { id: '', name: '', position: [] },
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
