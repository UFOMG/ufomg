import React, { useState } from "react";
import "./SightingsMap.scss";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  HeatmapLayer,
} from "@react-google-maps/api";
import ufo from "../../assets/ufobeam.png";
import alien from "../../assets/alienmarker.png";
import lights from "../../assets/skylights.png";
import {
  containerStyle,
  mapCenter,
  customMap,
  mapGradient,
  libraries,
  centerControl,
} from "../../assets/mapSetup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SightingsMap = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [showHeatMap, setShowHeatMap] = useState(true);
  // ability to show recent sightings, not yet in BE
  const [showRecentActivity, setShowRecentActivity] = useState(false);

  const sightings = useSelector((state) => state.sightingsReducer);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
    libraries: libraries,
  });

  const generateHeatMapData = () => {
    return sightings.sightings.map((sighting) => {
      return new window.google.maps.LatLng(
        parseInt(sighting.lat),
        parseInt(sighting.long)
      );
    });
  };

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
    return sightings.sightings.map((sighting, index) => {
      const position = {
        lat: parseInt(sighting.lat),
        lng: parseInt(sighting.long),
      };

      return (
        <Marker
          key={index}
          icon={{
            url: generateIconType(sighting.event_type),
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

  const toggleHeatMap = () => {
    setShowHeatMap(!showHeatMap);
  };

  const handleOnLoad = (map) => {
    const centerControlDiv = document.createElement("div");
    centerControl(centerControlDiv, map);
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      centerControlDiv
    );
  };

  return isLoaded ? (
    <main className="main-main">
      <h1 className="glitch" data-text="UFOMG">
        UFOMG
      </h1>
      <GoogleMap
        onLoad={(map) => handleOnLoad(map)}
        options={{ styles: customMap }}
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={5}
      >
        {generateMarkers()}
        {showHeatMap && (
          <HeatmapLayer
            options={{ gradient: mapGradient, radius: 30 }}
            data={generateHeatMapData()}
          />
        )}
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
                <p>{selectedSite.event_type}</p>
                <Link to={`/comment-page/${selectedSite.id}`}>
                  <button>Comment</button>
                </Link>
                {/* route to comment page */}
              </div>
              {selectedSite.image && (
                <img
                  className="site-image"
                  src={selectedSite.image}
                  alt={`alien ${selectedSite.event_type}`}
                />
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div className="button-div">
        <button onClick={toggleHeatMap} className="main-button">
          Toggle HeatMap
        </button>
        {/* <button>Show Recent Sightings</button> */}
      </div>
    </main>
  ) : (
    <></>
  );
};

export default SightingsMap;
