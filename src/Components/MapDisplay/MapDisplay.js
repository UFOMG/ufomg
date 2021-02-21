import React from "react";
import "./MapDisplay.scss";
import SightingsMap from "../SightingsMap/SightingsMap";

const MapDisplay = () => {
  return (
    <main className="map-main">
        <SightingsMap />
    </main>
  );
};

export default MapDisplay;
