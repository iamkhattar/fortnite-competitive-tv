import React from "react";
import "./Landing.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="mainApp landingPage">
      <div className="container h-100">
        <div className="h-25"></div>
        <div className="row align-items-center h-25 justify-content-center mb-5">
          <div className="col-8">
            <img src={require("../../assets/fortnite-logo.png")} width="100%" />
          </div>
        </div>
        <div className="row align-items-center button-height justify-content-center mt-5">
          <div className="col-2 h-100">Leaderboard</div>
          <div className="col-2 h-100">Streams</div>
          <div className="col-2 h-100">Add Streams</div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
