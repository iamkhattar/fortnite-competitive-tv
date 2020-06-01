import React, { useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="mainApp" id="app">
      <iframe
        className="leaderboard-frame w-100 h-100"
        id="leaderboardFrame"
        src="https://www.fortnitetracker.com/events"
      />
    </div>
  );
};

export default Leaderboard;
