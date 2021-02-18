import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers";
import App from "./Components/App/App";
import "./index.css";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// state: array of sightings
// sighting:
// {
//   name: '',
//   location: lat/long = '',
//   description: '',
//   eventType?: ''
//   comments?: [{name: '', comment: ''}, {name: '', comment: ''}]
// }
