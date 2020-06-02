import React, { useState } from "react";
import "./Streams.css";
import OneStream from "./Handler/OneStream/OneStream";
import NoStream from "./Handler/NoStream/NoStream";
import TwoStream from "./Handler/TwoStreams/TwoStreams";
import ThreeStreams from "./Handler/ThreeStreams/ThreeStreams";

const Streams = () => {
  const [usernames, setUserNames] = useState(["tfue", "tsm_zexrow", "tfue"]);
  return (
    <div className="mainApp">
      {usernames.length === 0 ? <NoStream /> : null}
      {usernames.length === 1 ? <OneStream stream1={usernames[0]} /> : null}
      {usernames.length === 2 ? (
        <TwoStream stream1={usernames[0]} stream2={usernames[1]} />
      ) : null}
      {usernames.length === 3 ? (
        <ThreeStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
        />
      ) : null}
    </div>
  );
};

export default Streams;
