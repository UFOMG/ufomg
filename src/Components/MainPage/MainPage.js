import React, { useEffect } from "react";
import "./MainPage.scss";
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
      <div className="main-content ">
        <section className='content'>
          <div className="scene">
          <div className="ufoWrap">
          <div className='center'>
            <div className="ufoInner">
              <div id='ufo'>
                <ul className='blinkers'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="dome"></div>
                <div className="antigrav">
                  <div className="rings">
                    <div className="inner"></div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>

                    </ul>
                  </div>
                </div>
                <div className="thrust">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="foreground">
            <ul className="trees3">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="trees2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="trees1">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="background">
            <div className="stars">
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li></li>
              <li></li>
              <li className="small"></li>
              <li></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li className="small"></li>
              <li></li>
              <li></li>    
            </div>
          </div>
          </div>
          <div className="camera">
              <div className="battery">
                <div className="juice"></div>
              </div>
              <div className="rec">
                <span><span></span>REC</span>
              </div>
              <div className="meta">
                <p>F2.3&nbsp;&nbsp;0dB&nbsp;&nbsp;15.7V 
                  <span className="exposure">
                    <span className="plus">+</span>
                    <span className="minus">-</span>
                  </span>
                </p>
              </div>
              <div className="timer">
                <label id="hours">00</label>:
                <label id="minutes">00</label>:
                <label id="seconds">00</label>
              </div>
          </div>
          <div id="app">
            <div id="wrapper">
              <h1 className="glitch" data-text="UFOMG">
                UFOMG
              </h1>
            </div>
          </div>
          <div className="main-btns">
            <Link className="link-style" to="/sightings-map">
              <button className="btns">Sightings</button>
            </Link>
            <Link className="link-style" to="/report-form">
              <button className="btns">Report Sighting</button>
            </Link>
            <Link className="link-style" to="/sighting-research">
              <button className="btns">Research</button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
