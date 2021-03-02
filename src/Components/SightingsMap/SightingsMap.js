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
import blueBlur from "../../assets/blue-blur.png";
import greenBlur from "../../assets/green-blur.png";
import redBlur from "../../assets/red-blur.png";
import {
  containerStyle,
  mapCenter,
  customMap,
  mapGradient,
  libraries,
  generateEventIcons,
  generateDateIcons,
  handleOnLoad,
  generateHeatMapData,
} from "../../utilities/mapSetup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SightingsMap = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [showRecentActivity, setShowRecentActivity] = useState(false);

  const sightings = useSelector((state) => state.sightingsReducer);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
    libraries: libraries,
  });

  const generateRecentActivityMarkers = () => {
    const formatSightingDates = addParsedDate();

    const sortSightingsByDate = formatSightingDates.sort((a, b) => {
      return b.parsedDate - a.parsedDate;
    });

    return createMarkers(sortSightingsByDate, generateDateIcons, [
      redBlur,
      greenBlur,
      blueBlur,
    ]);
  };

  const addParsedDate = () => {
    return sightings.sightings.map((sighting) => {
      const seperateDate = sighting.created_at;
      const dateSplit = seperateDate.split(",")[0];
      const parsedDate = Date.parse(dateSplit);
      return {
        ...sighting,
        parsedDate,
      };
    });
  };

  const createMarkers = (sightingsInfo, iconType, images) => {
    return sightingsInfo.map((sighting, index) => {
      const position = {
        lat: parseFloat(sighting.lat),
        lng: parseFloat(sighting.long)
      };
      console.log(position.lat);
      const iconData =
        iconType === generateEventIcons
          ? sighting.event_type
          : sighting.created_at;
      return (
        <Marker
          key={index}
          icon={{
            url: iconType(iconData, images),
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

  const toggleRecentActivity = () => {
    setShowRecentActivity(!showRecentActivity);
  };

  return isLoaded ? (
    <main className="main-main">
      <Link className="link-style" to="/">
        <h1 className="glitch" data-text="UFOMG">
          UFOMG
        </h1>
      </Link>
      <div className="button-div">
        <button onClick={toggleHeatMap} className="main-button">
          Toggle HeatMap
        </button>
        <button onClick={toggleRecentActivity} className="main-button">
          Show Recent Activity
        </button>
      </div>
      <GoogleMap
        onLoad={(map) => handleOnLoad(map)}
        options={{ styles: customMap }}
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={5}
      >
        {showHeatMap && (
          <HeatmapLayer
            options={{ gradient: mapGradient, radius: 30 }}
            data={generateHeatMapData(sightings)}
          />
        )}
        {!showRecentActivity &&
          createMarkers(sightings.sightings, generateEventIcons, [
            lights,
            alien,
            ufo,
          ])}
        {showRecentActivity && generateRecentActivityMarkers()}
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
                <Link className="link-style" to={`/comment-page/${selectedSite.id}`}>
                  <button>Comment</button>
                </Link>
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
    </main>
  ) : (
    <></>
  );
};

export default SightingsMap;
