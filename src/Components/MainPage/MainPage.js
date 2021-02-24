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
              <a target="_blank">
                <div className="button mainBtns">
                  <span>Sightings</span>
                </div>
                <img src={ufoHover} className='submit ufoIcon'/>
              </a>
            </div>
              <div className="container">
                <a target="_blank">
                  <div className="button mainBtns">
                    <span>Report Sighting</span>
                  </div>
                  <img src={ufoHover} className='submit ufoIcon'/>
                </a>
              </div>
          {/* <Link to="/sightings-map">
            <button className="main-btns">Sightings</button>
          </Link>
          <Link to="/report-form">
            <button className="main-btns">Report Sighting</button>
          </Link> */}
{/* 
          I was unable to get the link element to work with the home page
          buttons so I went ahead and commented it out so that you could look over it */}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
