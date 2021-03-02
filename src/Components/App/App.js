import React from "react";
import MainPage from "../MainPage/MainPage";
import ReportForm from "../ReportForm/ReportForm";
import MapDisplay from "../MapDisplay/MapDisplay";
import SightingsFilter from "../SightingsFilter/SightingsFilter";
import CommentPage from "../CommentPage/CommentPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/ufomg.github.io/ufomg/ufomg-fe"
          component={MainPage}
        />
        <Route exact path="/report-form" component={ReportForm} />
        <Route exact path="/sightings-map" component={MapDisplay} />
        <Route exact path="/sighting-research" component={SightingsFilter} />
        <Route
          exact
          path="/comment-page/:id"
          render={({ match }) => {
            return <CommentPage id={match.params.id} />;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
