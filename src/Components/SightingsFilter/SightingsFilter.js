import React, { useState } from "react";
import "./SightingsFilter.scss";
import { usStates } from "../../assets/mapSetup";
import { useSelector } from "react-redux";

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

  const generateFilteredSightings = (sightings) => {
    return sightings.map((sighting) => {
      return (
        <article className="single-sighting">
          <img
            src={sighting.image}
            className="sighting-image"
            alt={sighting.event_type}
          />
          <div className="sighting-details">
            <h1>Name: {`${sighting.name}`}</h1>
            <h1>City: {`${sighting.city}`}</h1>
            <h1>Event Type: {`${sighting.event_type}`}</h1>
            <h1>Description: {`${sighting.description}`}</h1>
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
        <section className="filter-section">{selectedState && displayFilteredSightings()}</section>
      </div>
    </main>
  );
};

export default SightingsFilter;
