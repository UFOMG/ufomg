import React, { useEffect } from "react";
import "./MainPage.scss";
import alienHead from "../../assets/alien-head.jpg";
import { Link } from "react-router-dom";
import fetchSightings from "../../api";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSightings(dispatch);
  });

  return (
    <main className="main">
      <div className="main-content">
        <div id="app">
          <div id="wrapper">
            <h1 className="glitch" data-text="UFOMG">
              UFOMG
            </h1>
          </div>
        </div>
        <img src={alienHead} alt="alien head" className="alien-logo" />
        <div className="btns">
          <Link to="/sightings-map">
            <button className="main-btns">Sightings</button>
          </Link>
          <Link to="/report-form">
            <button className="main-btns">Report Sighting</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
