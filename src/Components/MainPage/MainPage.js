import React from "react";
import "./MainPage.scss";
import alienHead from "../../assets/alien-outline.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main className="main">
      <div className="main-content">
        <img src={alienHead} alt="alien head" className="alien-logo"/>
        <div className="btns">
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
