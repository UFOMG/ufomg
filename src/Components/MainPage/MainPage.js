import React from "react";
import "./MainPage.scss";
import alienHead from "../../assets/alien-head.jpg";

const MainPage = () => {
  return (
    <main>
      <div>
        <img src={alienHead} alt="alien head" />
        <div>
          <button>Sightings</button>
          <button>Report</button>
          <button>Something Here</button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
