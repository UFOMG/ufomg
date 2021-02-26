import React, { useEffect } from "react";
import "./MainPage.scss";
import ufoHover from '../../assets/ufo.png'
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
        <div className="btn-container">
            <div className="container">
              <Link to="/sightings-map">
                <div className="button mainBtns">
                  <span>Sightings Map</span>
                </div>
                <img src={ufoHover} className='submit ufoIcon'/>
              </Link>
            </div>
            <div className="container">
              <Link to="/report-form">
                <div className="button mainBtns">
                  <span>Report Sighting</span>
                </div>
                <img src={ufoHover} className='submit ufoIcon'/>
              </Link>
            </div>
            <div className="container">
              <Link to="/sighting-reports">
                <div className="button mainBtns">
                  <span>Research</span>
                </div>
                <img src={ufoHover} className='submit ufoIcon'/>
              </Link>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
