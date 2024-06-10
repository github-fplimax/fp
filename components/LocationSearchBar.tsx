import {
  Calendar,
  MagnifyingGlass,
  MapPin,
  Truck,
} from "@phosphor-icons/react";
import React from "react";

const LocationSearchBar = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-4 p-6 bg-white shadow rounded-lg">
      <div className="flex items-center gap-2">
        <MapPin size={20} />
        <select className="px-3 py-2 border border-gray-300 rounded" placeholder="Choose a location">
          {/* <option disabled selected>Choose a location</option> */}
          <option>Jakarta</option>
          <option>Bogor</option>
          <option>Depok</option>
          <option>Tangerang</option>
          <option>Bekasi</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <Truck size={32} />
        <select className="px-3 py-2 border border-gray-300 rounded" placeholder="Choose a product">
          {/* <option disabled selected>Choose a product</option> */}
          <option>Self Loading Mixer</option>
          <option>Concrete Pump</option>
          <option>Batch Pump</option>
          {/* Add more options here */}
        </select>
      </div>

      {/* Memastikan tombol memiliki latar belakang putih */}
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 transition-all rounded">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </div>
  );
};

export default LocationSearchBar;
