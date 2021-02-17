import React from "react";
import "./MainPage.scss";
import alienHead from "../../assets/alien-head.jpg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main>
      <div>
        <img src={alienHead} alt="alien head" />
        <div>
          <Link to="/sightings-map">
            <button>Sightings</button>
          </Link>
          <Link to="/report-form">
            <button>Report Sighting</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
