import React from 'react';
import './App.css';
import MainPage from "../MainPage/MainPage";
import ReportForm from "../ReportForm/ReportForm";
import MapDisplay from "../MapDisplay/MapDisplay";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/report-form" component={ReportForm} />
        <Route exact path="/sightings-map" component={MapDisplay} />
      </Switch>
    </>
  );
}

export default App;