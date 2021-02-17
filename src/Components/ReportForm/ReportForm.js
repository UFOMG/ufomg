import React, { useState } from "react";

const ReportForm = () => {
  const [encounterType, setEncounterType] = useState(null);
  const [name, setName] = useState("anonymous");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <label>
        Name
        <input
          name="name"
          value={name}
          onChange={setName}
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
          onChange={setLocation}
          type="text"
          placeholder="Location"
        />
      </label>
      <label>
        Description
        <input
          name="description"
          value={description}
          onChange={setDescription}
          type="textarea"
          placeholder="What happened?"
        />
      </label>
      <label>
        Encounter Type
        <select value={encounterType} onChange={setEncounterType}>
          <option value="sighting">Sighting</option>
          <option value="encounter">Encounter</option>
          <option value="abduction">Abduction</option>
        </select>
      </label>
    </form>
  );
};

export default ReportForm;
