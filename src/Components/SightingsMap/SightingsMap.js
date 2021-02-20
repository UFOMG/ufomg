import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { mockSightings } from "../../mockdata";

const containerStyle = {
  width: "1500px",
  height: "800px",
};

const center = {
  lat: 39.8283,
  lng: -98.5795,
};

const SightingsMap = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
  });

  const generateMarkers = () => {
    return mockSightings.map((sighting) => {
      const position = {
        lat: parseInt(sighting.lat),
        lng: parseInt(sighting.lng),
      };
      return (
        <Marker
          position={position}
          onMouseDown={() => {
            setSelectedSite(sighting);
          }}
          onMouseUp={() => {
            setSelectedCenter(position);
          }}
        />
      );
    });
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>

      {generateMarkers()}

      {selectedCenter && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCenter(null);
          }}
          position={selectedCenter}
        >
          <div>
            <div>
              <p>{selectedSite.name ? selectedSite.name : "anonymous"}</p>
              <p>{selectedSite.description}</p>
              <p>{selectedSite.eventType}</p>
            </div>
            <img src={selectedSite.image} alt={`alien ${selectedSite.eventType}`} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default SightingsMap;
