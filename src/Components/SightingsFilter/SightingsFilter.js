import React, { useEffect, useState } from "react";
import "./SightingsFilter.scss";
import { Link } from "react-router-dom";
import { usStates, generateStockImage } from "../../utilities/mapSetup";
import { useSelector } from "react-redux";

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
    if (comments.length > 0) {
      return comments.map((comment) => {
        return <h1 className="single-comment">{`${comment}`}</h1>;
      });
    } else {
      return <h1 className="single-comment">No comments yet</h1>;
    }
  };

  const generateFilteredSightings = (sightings) => {
    return sightings.map((sighting) => {
      const sightingComments = generateCommentsDisplay(sighting.comments);

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
            <div className="comments-div">{sightingComments}</div>
            <Link className="link-style" to={`/comment-page/${sighting.id}`}>
              <button className="btns">Add a comment...</button>
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
    const sightingsWithComments = await getFilteredComments(filteredSightings);

    return setFilteredSightingComments(sightingsWithComments);
  };

  return (
    <main className="filter-main">
      <Link className="link-style" to="/">
        <h1 className="glitch" data-text="UFOMG">
          UFOMG
        </h1>
      </Link>
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
