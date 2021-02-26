import React, { useEffect, useState } from "react";
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
          <div class="scene">
          <div class="ufoWrap">
          <div class='center'>
            <div class="ufoInner">
              <div id='ufo'>
                <ul class='blinkers'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div class="dome"></div>
                <div class="antigrav">
                  <div class="rings">
                    <div class="inner"></div>
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
                <div class="thrust">
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
          <div class="foreground">
            <ul class="trees3">
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
            <ul class="trees2">
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
            <ul class="trees1">
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
          <div class="background">
            <div class="stars">
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="small"></li>
              <li></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li class="small"></li>
              <li></li>
              <li></li>    
            </div>
          </div>
          </div>
          <div class="camera">
              <div class="battery">
                <div class="juice"></div>
              </div>
              <div class="rec">
                <span><span></span>REC</span>
              </div>
              <div class="meta">
                <p>F2.3&nbsp;&nbsp;0dB&nbsp;&nbsp;15.7V 
                  <span class="exposure">
                    <span class="plus">+</span>
                    <span class="minus">-</span>
                  </span>
                </p>
              </div>
              <div class="timer">
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
            <Link to="/sightings-map">
              <button className="btns">Sightings</button>
            </Link>
            <Link to="/report-form">
              <button className="btns">Report Sighting</button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
