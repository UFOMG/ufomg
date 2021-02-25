import React, { useState } from "react";
import "./ReportForm.scss";
import { postSighting, geolocateUser } from "../../api";
import ufoHover from "../../assets/ufo.png";
import ufo from "../../assets/ufoFormPhoto.jpg";
import { useDispatch } from "react-redux";
import UploadWidget from "../UploadWidget/UploadWidget";

const ReportForm = () => {
  const [eventType, setEventType] = useState("");
  const [name, setName] = useState("anonymous");
  const [city, setCity] = useState("");
  const [usState, setUsState] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleUsStateChange = (event) => {
    setUsState(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleImageUpload = (imageUrl, imageAlt) => {
    setImageUrl(imageUrl);
    setImageAlt(imageAlt);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    geolocateUser(city, usState).then((data) => {
      const coordinates = data.results[0].geometry.location;
      postSighting(
        {
          name,
          description,
          event_type: eventType,
          lat: coordinates.lat,
          long: coordinates.lng,
          image: imageUrl,
        },
        dispatch
      );
    });
  };

  const userImage = imageUrl ? imageUrl : ufo;

  return (
    <form className="form">
      <img src={userImage} className="formPhoto" alt="ufo" />
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
            placeholder="City"
            name="city"
            id="city"
            onChange={handleCityChange}
            required
          />
          <label htmlFor="city" className="form__label">
            City
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="State"
            name="state"
            id="state"
            onChange={handleUsStateChange}
            required
          />
          <label htmlFor="state" className="form__label">
            State
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
        <UploadWidget data={handleImageUpload} />
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
