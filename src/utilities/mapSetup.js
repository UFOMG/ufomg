import React from "react";
// import "./mapSetup.scss";
import ufo from "../assets/ufobeam.png";
import alien from "../assets/alienmarker.png";
import lights from "../assets/skylights.png";
import blueBlur from "../assets/blue-blur.png";
import greenBlur from "../assets/green-blur.png";
import redBlur from "../assets/red-blur.png";
import alienstock from "../assets/alienstock.jpeg";
import lightsstock from "../assets/lightsstock.jpeg";
import ufostock from "../assets/ufostock.jpeg";

export const containerStyle = {
  width: "90vw",
  height: "80vh",
};

export const mapCenter = {
  lat: 39.8283,
  lng: -98.5795,
};

export const generateStockImage = (eventType) => {
  switch (eventType) {
    case "sighting":
      return lightsstock;
    case "encounter":
      return alienstock;
    case "abduction":
      return ufostock;
    default:
      return lightsstock;
  }
};

export const generateEventIcons = (eventType, images) => {
  switch (eventType) {
    case "sighting":
      return images[0];
    case "encounter":
      return images[1];
    case "contact":
      return images[1];
    case "abduction":
      return images[2];
    default:
      return images[0];
  }
};

export const generateDateIcons = (date, images) => {
  const today = new Date();
  const oneWeekAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() - 7
  );
  const oneMonthAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() - 30
  );

  const sightingDate = new Date(date);

  if (sightingDate >= oneWeekAgo) {
    return images[0];
  } else if (sightingDate < oneWeekAgo && sightingDate > oneMonthAgo) {
    return images[1];
  } else if (sightingDate <= oneMonthAgo) {
    return images[2];
  } else {
    return images[0];
  }
};

export const handleOnLoad = (map) => {
  const centerControlDiv = document.createElement("div");
  centerControlDiv.id = "custom-buttons";
  centerControl(centerControlDiv, map);
  generateLegend(map);
};

const generateLegend = (map) => {
  const legendDiv = document.createElement("div");
  const legendUI = document.createElement("div");
  legendUI.id = "legend";
  legendUI.style.backgroundColor = "#fff";
  legendUI.style.border = "2px solid #fff";
  legendUI.style.borderRadius = "3px";
  legendUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  legendUI.style.cursor = "pointer";
  legendUI.style.marginBottom = "22px";
  legendUI.style.marginTop = "10px";
  legendUI.style.textAlign = "center";
  legendUI.title = "Reset map zoom";
  legendDiv.appendChild(legendUI);
  // Set CSS for the control interior.
  const legendText = document.createElement("div");
  legendText.style.color = "rgb(25,25,25)";
  legendText.style.fontFamily = "Roboto,Arial,sans-serif";
  legendText.style.fontSize = "16px";
  legendText.style.lineHeight = "38px";
  legendText.style.paddingLeft = "30px";
  legendText.style.paddingRight = "30px";
  legendText.innerHTML = "Reset Zoom";
  legendDiv.appendChild(legendText);

  var content = [];
  content.push("<h2>Icon Legend</h2>");
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      lights +
      '"><p>Lights in Sky</p></div>'
  );
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      alien +
      '"><p>Alien Sighting</p></div>'
  );
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      ufo +
      '"><p>Abduction</p></div>'
  );
  content.push("<h2>Sighting Legend</h2>");
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      redBlur +
      '"><p>Within last week</p></div>'
  );
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      greenBlur +
      '"><p>Within last month</p></div>'
  );
  content.push(
    '<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="' +
      blueBlur +
      '"><p>Over a month</p></div>'
  );

  legendUI.innerHTML = content.join("");
  legendUI.index = 1;
  map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(legendDiv);
};

export const generateHeatMapData = (sightingsInfo) => {
  return sightingsInfo.sightings.map((sighting) => {
    return new window.google.maps.LatLng(
      parseFloat(sighting.lat),
      parseFloat(sighting.long)
    );
  });
};

export const mapGradient = [
  "rgba(0, 255, 255, 0)", // less dense
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)", // more dense
];

export const libraries = ["places", "visualization"];

export const centerControl = (controlDiv, map) => {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.id = "toggle-heatmap";
  // controlUI.style = uiStyle
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginBottom = "22px";
  controlUI.style.marginTop = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to center map";
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Center Map";
  controlUI.appendChild(controlText);
  controlUI.addEventListener("click", () => {
    map.setCenter(mapCenter);
  });
  const zoomUI = document.createElement("div");
  zoomUI.id = "reset-zoom";
  zoomUI.style.backgroundColor = "#fff";
  zoomUI.style.border = "2px solid #fff";
  zoomUI.style.borderRadius = "3px";
  zoomUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  zoomUI.style.cursor = "pointer";
  zoomUI.style.marginBottom = "22px";
  zoomUI.style.marginTop = "10px";
  zoomUI.style.textAlign = "center";
  zoomUI.title = "Reset map zoom";
  controlDiv.appendChild(zoomUI);
  // Set CSS for the control interior.
  const zoomText = document.createElement("div");
  zoomText.style.color = "rgb(25,25,25)";
  zoomText.style.fontFamily = "Roboto,Arial,sans-serif";
  zoomText.style.fontSize = "16px";
  zoomText.style.lineHeight = "38px";
  zoomText.style.paddingLeft = "5px";
  zoomText.style.paddingRight = "5px";
  zoomText.innerHTML = "Reset Zoom";
  zoomUI.appendChild(zoomText);
  zoomUI.addEventListener("click", () => {
    map.setZoom(5);
  });
  map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
};

export const customMap = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70",
      },
    ],
  },
];

export const usStates = [
  { name: "ALABAMA", abbreviation: "AL" },
  { name: "ALASKA", abbreviation: "AK" },
  { name: "ARIZONA", abbreviation: "AZ" },
  { name: "ARKANSAS", abbreviation: "AR" },
  { name: "CALIFORNIA", abbreviation: "CA" },
  { name: "COLORADO", abbreviation: "CO" },
  { name: "CONNECTICUT", abbreviation: "CT" },
  { name: "DELAWARE", abbreviation: "DE" },
  { name: "DISTRICT OF COLUMBIA", abbreviation: "DC" },
  { name: "FLORIDA", abbreviation: "FL" },
  { name: "GEORGIA", abbreviation: "GA" },
  { name: "GUAM", abbreviation: "GU" },
  { name: "HAWAII", abbreviation: "HI" },
  { name: "IDAHO", abbreviation: "ID" },
  { name: "ILLINOIS", abbreviation: "IL" },
  { name: "INDIANA", abbreviation: "IN" },
  { name: "IOWA", abbreviation: "IA" },
  { name: "KANSAS", abbreviation: "KS" },
  { name: "KENTUCKY", abbreviation: "KY" },
  { name: "LOUISIANA", abbreviation: "LA" },
  { name: "MAINE", abbreviation: "ME" },
  { name: "MARYLAND", abbreviation: "MD" },
  { name: "MASSACHUSETTS", abbreviation: "MA" },
  { name: "MICHIGAN", abbreviation: "MI" },
  { name: "MINNESOTA", abbreviation: "MN" },
  { name: "MISSISSIPPI", abbreviation: "MS" },
  { name: "MISSOURI", abbreviation: "MO" },
  { name: "MONTANA", abbreviation: "MT" },
  { name: "NEBRASKA", abbreviation: "NE" },
  { name: "NEVADA", abbreviation: "NV" },
  { name: "NEW HAMPSHIRE", abbreviation: "NH" },
  { name: "NEW JERSEY", abbreviation: "NJ" },
  { name: "NEW MEXICO", abbreviation: "NM" },
  { name: "NEW YORK", abbreviation: "NY" },
  { name: "NORTH CAROLINA", abbreviation: "NC" },
  { name: "NORTH DAKOTA", abbreviation: "ND" },
  { name: "OHIO", abbreviation: "OH" },
  { name: "OKLAHOMA", abbreviation: "OK" },
  { name: "OREGON", abbreviation: "OR" },
  { name: "PALAU", abbreviation: "PW" },
  { name: "PENNSYLVANIA", abbreviation: "PA" },
  { name: "PUERTO RICO", abbreviation: "PR" },
  { name: "RHODE ISLAND", abbreviation: "RI" },
  { name: "SOUTH CAROLINA", abbreviation: "SC" },
  { name: "SOUTH DAKOTA", abbreviation: "SD" },
  { name: "TENNESSEE", abbreviation: "TN" },
  { name: "TEXAS", abbreviation: "TX" },
  { name: "UTAH", abbreviation: "UT" },
  { name: "VERMONT", abbreviation: "VT" },
  { name: "VIRGINIA", abbreviation: "VA" },
  { name: "WASHINGTON", abbreviation: "WA" },
  { name: "WEST VIRGINIA", abbreviation: "WV" },
  { name: "WISCONSIN", abbreviation: "WI" },
  { name: "WYOMING", abbreviation: "WY" },
];
