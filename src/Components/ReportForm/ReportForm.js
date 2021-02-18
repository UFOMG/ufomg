import React, { useState } from "react";

const ReportForm = () => {
  const [encounterType, setEncounterType] = useState(null);
  const [name, setName] = useState("anonymous");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  
  const handleEncounterChange = (event) => {
    setEncounterType(event.target.value)
  }

  return (
    <form>
      <label>
        Name
        <input
          name="name"
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Name or remain anonymous"
        />
      </label>
      <label>
        Location
        {/* locate me functionality
        or convert city/state to lat/long */}
        <input
          name="location"
          value={location}
          onChange={handleLocationChange}
          type="text"
          placeholder="Location"
        />
      </label>
      <label>
        Description
        <input
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          type="textarea"
          placeholder="What happened?"
        />
      </label>
      <label>
        Encounter Type
        <select value={encounterType} onChange={handleEncounterChange}>
          <option value="sighting">Sighting</option>
          <option value="encounter">Encounter</option>
          <option value="abduction">Abduction</option>
        </select>
      </label>
    </form>
  );
};

export default ReportForm;
