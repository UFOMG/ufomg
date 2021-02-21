import React, { useState } from "react";
import "./SightingsMap.scss";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import ufo from "../../assets/ufobeam.png";
import alien from "../../assets/alienmarker.png";
import lights from "../../assets/skylights.png";
import { containerStyle, mapCenter, customMap } from "../../assets/mapSetup";
import { mockSightings } from "../../mockdata";

const SightingsMap = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
  });

  const generateIconType = (eventType) => {
    switch (eventType) {
      case "sighting":
        return lights;
      case "encounter":
        return alien;
      case "abduction":
        return ufo;
      default:
        return lights;
    }
  };

  const generateMarkers = () => {
    return mockSightings.map((sighting) => {
      const position = {
        lat: parseInt(sighting.lat),
        lng: parseInt(sighting.lng),
      };

      return (
        <Marker
          className="test"
          icon={{
            url: generateIconType(sighting.eventType),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
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
    <GoogleMap
      options={{ styles: customMap }}
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={5}
    >
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
            {selectedSite.image && (
              <img
                className="site-image"
                src={selectedSite.image}
                alt={`alien ${selectedSite.eventType}`}
              />
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default SightingsMap;
