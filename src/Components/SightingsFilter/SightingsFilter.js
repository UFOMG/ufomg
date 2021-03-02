import React, { useEffect, useState } from "react";
import "./SightingsFilter.scss";
import { Link } from "react-router-dom";
import { usStates } from "../../utilities/mapSetup";
import { useSelector } from "react-redux";
import alienstock from "../../assets/alienstock.jpeg";
import lightsstock from "../../assets/lightsstock.jpeg";
import ufostock from "../../assets/ufostock.jpeg";

const SightingsFilter = () => {
  const [selectedState, setSelectedState] = useState("");
  const [filteredSightingComments, setFilteredSightingComments] = useState([]);
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

  const getFilteredComments = (filteredSightings) => {
    let filteredComments = [];
    let updatedComments = [];

    filteredSightings.forEach((sighting) => {
      filteredComments.push(
        fetch(
          `https://ancient-mesa-60922.herokuapp.com/api/v1/reports/${sighting.id}`
        ).then((response) => response.json())
      );
    });

    return Promise.all(filteredComments).then((data) => {
      data.forEach((sighting) => {
        updatedComments.push(sighting);
      });
      return updatedComments;
    });
  };

  const generateCommentsDisplay = (comments) => {
    return comments.map((comment) => {
      return <h1 className="single-comment">{`${comment}`}</h1>;
    });
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
            <h1 className="report-info">Name: {`${sighting.name}`}</h1>
            <h1 className="report-info">City: {`${sighting.city}`}</h1>
            <h1 className="report-info">
              Event Type: {`${sighting.event_type}`}
            </h1>
            <h1 className="report-info">
              Description: {`${sighting.description}`}
            </h1>
            <h1 className="report-info">Comments:</h1>
            <div className="comments-div">
              {generateCommentsDisplay(sighting.comments)}
            </div>
            <Link to={`/comment-page/${sighting.id}`}>
              <button className="add-comment">Add a comment...</button>
            </Link>
          </div>
        </article>
      );
    });
  };

  const handleFilterChange = (event) => {
    setSelectedState(event.target.value);
  };

  useEffect(() => {
    displayFilteredSightings();
  }, [selectedState]);

  const displayFilteredSightings = async () => {
    const filteredSightings = filterSightings(selectedState);
    const test = await getFilteredComments(filteredSightings);

    console.log(test);

    return setFilteredSightingComments(test);
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
        {filteredSightingComments &&
          generateFilteredSightings(filteredSightingComments)}
      </div>
    </main>
  );
};

export default SightingsFilter;
