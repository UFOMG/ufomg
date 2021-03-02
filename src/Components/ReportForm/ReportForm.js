import React, { useState } from "react";
import "./ReportForm.scss";
import { postSighting, geolocateUser } from "../../api";
import ufoHover from "../../assets/ufo.png";
import ufo from "../../assets/ufoabduction.jpg";
import { useDispatch } from "react-redux";
import UploadWidget from "../UploadWidget/UploadWidget";
import { Link } from "react-router-dom";

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
          city,
          state: usState,
          lat: coordinates.lat,
          long: coordinates.lng,
          description,
          event_type: eventType,
          image: imageUrl,
        },
        dispatch
      );
    });
  };

  const userImage = imageUrl ? imageUrl : ufo;

  return (
    <div className="form-container">
      <form className="full-form">
        <h1 className="glitch" data-text="UFOMG">UFOMG</h1>
        <div className="form">
          <img src={userImage} className="formPhoto" alt="ufo" />
          <article className="form-inputs">
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
            <section className="image-upload">
              <label className="encounter">
                Encounter Type
                <select
                  value={eventType}
                  onChange={handleEventTypeChange}
                  className="drop-down"
                >
                  <option disabled={eventType ? true : false}></option>
                  <option value="sighting">Sighting</option>
                  <option value="encounter">Encounter</option>
                  <option value="abduction">Abduction</option>
                </select>
              </label>
              <UploadWidget data={handleImageUpload} />
            </section>
            <section className="form-btns">
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
              <div className="container">
                <a
                  href="/#"
                  target="_blank"
                  onClick={(event) => handleFormSubmit(event)}
                >
                  <div className="button">
                      <span>Home</span>
                  </div>
                  <img src={ufoHover} className="submit ufoIcon" alt="hovering ufo" />
                </a>
              </div>
            </section>
          </article>
        </div>
      </form>
    </div>
    
  );
};

export default ReportForm;
