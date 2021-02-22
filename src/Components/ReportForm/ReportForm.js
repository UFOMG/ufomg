import React, { useState } from "react";
import './ReportForm.scss'
import starBG from '../../assets/star-bg.jpg'
import ufoHover from '../../assets/ufo.png'
import ufo from '../../assets/ufoFormPhoto.jpg'

const ReportForm = () => {
  const [encounterType, setEncounterType] = useState(null);
  const [name, setName] = useState("anonymous");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log(event.target.value);

  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
    console.log(event.target.value);

  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    console.log(event.target.value);

  }
  const handleEncounterChange = (event) => {
    setEncounterType(event.target.value)
    console.log(event.target.value);

  }

  return (
    <form className="form" >
        <img src={ufo} className='formPhoto'/>
        <div className="form-inputs">
          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
            <label for="name" class="form__label">Name</label>
          </div>
          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Location" name="location" id='location' required />
            <label for="location" class="form__label">City, State</label>
          </div>
          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Description" name="desciption" id='description' required />
            <label for="description" class="form__label">Description</label>
          </div>
          <label>
            Encounter Type
            <select value={encounterType} onChange={handleEncounterChange} className='drop-down'>
              <option value="sighting">Sighting</option>
              <option value="encounter">Encounter</option>
              <option value="abduction">Abduction</option>
            </select>
          </label>
          <div className="container">
            <a target="_blank">
              <div className="button">
                <span>Submit</span>
              </div>
              <img src={ufoHover} className='submit ufoIcon'/>
            </a>
          </div>
        </div>
    </form>
  );
};

export default ReportForm;
