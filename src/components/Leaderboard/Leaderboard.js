import React, { useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  useEffect(() => {
    var monitor = setInterval(function () {
      var elem = document.activeElement;
      if (elem && elem.tagName === "IFRAME") {
        document.activeElement.blur();
      }
    }, 500);
  }, []);

  return (
    <div className="mainApp" id="app">
      <iframe
        className="leaderboard-frame"
        id="leaderboardFrame"
        src="https://www.fortnitetracker.com/events"
      ></iframe>
    </div>
  );
};

export default Leaderboard;
