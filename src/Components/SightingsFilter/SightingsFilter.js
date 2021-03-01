import React, { useState } from "react";
import "./SightingsFilter.scss";
import { usStates } from "../../utilities/mapSetup";
import { useSelector } from "react-redux";
import alienstock from "../../assets/alienstock.jpeg";
import lightsstock from "../../assets/lightsstock.jpeg";
import ufostock from "../../assets/ufostock.jpeg";

const SightingsFilter = () => {
  const [selectedState, setSelectedState] = useState("");
  const sightings = useSelector((state) => state.sightingsReducer);

  const generateDropdownOptions = () => {
    return usStates.map((state, index) => {
      return (
        <option
          key={index}
          value={`${state.abbreviation}`}
        >{`${state.name}`}</option>
      );
    });
  };

  const filterSightings = (state) => {
    return sightings.sightings.filter((sighting) => {
      return sighting.state.toLowerCase() === state.toLowerCase();
    });
  };

  const generateStockImage = (eventType) => {
    switch (eventType) {
      case "sighting":
        return lightsstock;
      case "encounter":
        return alienstock;
      case "abduction":
        return ufostock;
      default:
        return lightsstock;
    }
  };

  const generateFilteredSightings = (sightings) => {
    return sightings.map((sighting) => {
      const sightingImage = sighting.image
        ? sighting.image
        : generateStockImage(sighting.event_type);
      return (
        <article className="single-sighting">
          <div className="stock-div">
            <img
              src={sightingImage}
              className="sighting-image"
              alt={sighting.event_type}
            />
          </div>
          <div className="sighting-details">
            <h1>Name: {`${sighting.name}`}</h1>
            <h1>City: {`${sighting.city}`}</h1>
            <h1>Event Type: {`${sighting.event_type}`}</h1>
            <h1>Description: {`${sighting.description}`}</h1>
            <h1>Comments:</h1>
            {/* populate when BE has comments` */}
            <div className="comments-div">
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
              <h1 className="single-comment">
                USERNAME: holy crap this ia a lot of comments, so many comments
                about stuff
              </h1>
            </div>
          </div>
        </article>
      );
    });
  };

  const handleFilterChange = (event) => {
    setSelectedState(event.target.value);
  };

  const displayFilteredSightings = () => {
    const filteredSightings = filterSightings(selectedState);
    return generateFilteredSightings(filteredSightings);
  };

  return (
    <main className="filter-main">
      <h1 className="glitch" data-text="UFOMG">
        UFOMG
      </h1>
      <div className="filter-div">
        <aside className="filter-aside">
          <h3>Show Sightings By State</h3>
          <select
            value={selectedState}
            onChange={handleFilterChange}
            className="drop-down"
          >
            <option disabled={selectedState ? true : false}>
              -- Choose State --
            </option>
            {generateDropdownOptions()}
          </select>
        </aside>
      </div>
      <div className="filter-section">
        {selectedState && displayFilteredSightings()}
      </div>
    </main>
  );
};

export default SightingsFilter;
