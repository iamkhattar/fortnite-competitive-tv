import React from "react";
import "./NoStream.css";

import { Link } from "react-router-dom";

const NoStream = () => {
  return (
    <div className="mainApp landingPage" id="app">
      <div className="container h-100">
        <div className="spacer"></div>
        <div className="row align-items-center h-25 justify-content-center">
          <div className="col-9">
            <img
              src={require("../../../../assets/fortnite-logo.png")}
              className="fortnite-logo"
              alt="Fortnite Logo"
            />
          </div>
        </div>
        <div className="mt-5 row align-items-center button-height justify-content-center">
          <div className="col-9 h-100">
            <button className="landing-button">
              <Link
                className="landing-button-text w-100 p-3"
                to="/addstreams"
                style={{ textDecoration: "none", color: "black" }}
              >
                ADD A STREAM
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoStream;
