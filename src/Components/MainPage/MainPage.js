import React, { useEffect } from "react";
import "./MainPage.scss";
import alienHead from "../../assets/alien-head.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchSightingsAction from "../../api";
import {
  getSightings,
  getSightingsError,
  getSightingsPending,
} from "../../reducers/sightings";

const MainPage = (props) => {
  useEffect(() => {
    const { fetchSightings } = props;
    fetchSightings();
  });

  return (
    <main className="main">
      <div className="main-content">
        <div id="app">
          <div id="wrapper">
            <h1 className="glitch" data-text="UFOMG">UFOMG</h1>
          </div>
        </div>
        <img src={alienHead} alt="alien head" className="alien-logo"/>
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

const mapStateToProps = (state) => ({
  error: getSightingsError(state),
  sightings: getSightings(state),
  pending: getSightingsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchSightings: fetchSightingsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
