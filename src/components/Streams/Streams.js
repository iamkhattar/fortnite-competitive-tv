import React, { useState } from "react";
import "./Streams.css";
import OneStream from "./Handler/OneStream/OneStream";
import NoStream from "./Handler/NoStream/NoStream";

const Streams = () => {
  const [usernames, setUserNames] = useState(["tfue"]);
  return (
    <div className="mainApp">
      {usernames.length === 0 ? <NoStream /> : null}
      {usernames.length === 1 ? <OneStream stream1={usernames[0]} /> : null}
    </div>
  );
};

export default Streams;
