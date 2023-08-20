import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../MapComponent/MapComponent.scss"
const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 	40.409264,
  lng: 	49.867092,
};

const locations = [
  { lat: 40.409264, lng: 49.867092 },
  // Add more locations as needed
];

function MapComponent() {
  return (
   <section id='googlemap-address'> 
   <LoadScript googleMapsApiKey="AIzaSyCcnDYXOPXjJkey2zFLuy23Rx2vEb_JYyo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
   </section>
  );
}

export default MapComponent;
