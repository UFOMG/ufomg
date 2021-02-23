import React, { useState } from "react";
import "./ReportForm.scss";
import { postSighting } from "../../api";
import ufoHover from "../../assets/ufo.png";
import ufo from "../../assets/ufoFormPhoto.jpg";
import { useDispatch } from "react-redux";

const ReportForm = () => {
  const [eventType, setEventType] = useState("");
  const [name, setName] = useState("anonymous");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postSighting(
      {
        name,
        description,
        event_type: eventType,
        lat: 48,
        long: -100,
        image: "image.jpg",
      },
      dispatch
    );
  };

  return (
    <form className="form">
      <img src={ufo} className="formPhoto" alt="ufo" />
      <div className="form-inputs">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            onChange={handleNameChange}
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Location"
            name="location"
            id="location"
            onChange={handleLocationChange}
            required
          />
          <label htmlFor="location" className="form__label">
            City, State
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Description"
            name="desciption"
            id="description"
            onChange={handleDescriptionChange}
            required
          />
          <label htmlFor="description" className="form__label">
            Description
          </label>
        </div>
        <label>
          Encounter Type
          <select
            value={eventType}
            onChange={handleEventTypeChange}
            className="drop-down"
          >
            <option selected disabled></option>
            <option value="sighting">Sighting</option>
            <option value="encounter">Encounter</option>
            <option value="abduction">Abduction</option>
          </select>
        </label>
        <div className="container">
          <a
            href="/#"
            target="_blank"
            onClick={(event) => handleFormSubmit(event)}
          >
            <div className="button">
              <span>Submit</span>
            </div>
            <img src={ufoHover} className="submit ufoIcon" alt="hovering ufo" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;
