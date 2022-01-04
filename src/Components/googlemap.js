import React from 'react';
import {  DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%",
    borderRadius: "0px 0px 25px 0px",
};
  
  const defaultCenter = {
    lat:  11.7679, lng: 78.0000
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBCRjJzkFPrLlPv2CHs50MOVIs8gEiiUJ8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={8}
          center={defaultCenter}
        />
        
     </LoadScript>
  )
  }
export default MapContainer;