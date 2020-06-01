import React, { useState } from "react";
import "./Streams.css";
import OneStream from "./Handler/OneStream";

const Streams = () => {
  const [usernames, setUserNames] = useState(["tsm_zexrow"]);
  return (
    <div className="mainApp">
      {usernames.length === 1 ? <OneStream stream1={usernames[0]} /> : null}
    </div>
  );
};

export default Streams;
