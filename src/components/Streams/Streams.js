import React from "react";
import "./Streams.css";
import OneStream from "./Handler/OneStream/OneStream";
import NoStream from "./Handler/NoStream/NoStream";
import TwoStream from "./Handler/TwoStreams/TwoStreams";
import ThreeStreams from "./Handler/ThreeStreams/ThreeStreams";
import FourStreams from "./Handler/FourStreams/FourStreams";

import { useStoreState } from "easy-peasy";
import FiveStreams from "./Handler/FiveStreams/FiveStreams";
import SixStreams from "./Handler/SixStreams/SixStreams";
import SevenStreams from "./Handler/SevenStreams/SevenStreams";
import EightStreams from "./Handler/EightStreams/EightStreams";
import NineStreams from "./Handler/NineStreams/NineStreams";

const Streams = () => {
  const usernames = useStoreState((state) => state.usernames);
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
      {usernames.length === 4 ? (
        <FourStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
        />
      ) : null}
      {usernames.length === 5 ? (
        <FiveStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
          stream5={usernames[4]}
        />
      ) : null}
      {usernames.length === 6 ? (
        <SixStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
          stream5={usernames[4]}
          stream6={usernames[5]}
        />
      ) : null}
      {usernames.length === 7 ? (
        <SevenStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
          stream5={usernames[4]}
          stream6={usernames[5]}
          stream7={usernames[6]}
        />
      ) : null}
      {usernames.length === 8 ? (
        <EightStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
          stream5={usernames[4]}
          stream6={usernames[5]}
          stream7={usernames[6]}
          stream8={usernames[7]}
        />
      ) : null}
      {usernames.length === 9 ? (
        <NineStreams
          stream1={usernames[0]}
          stream2={usernames[1]}
          stream3={usernames[2]}
          stream4={usernames[3]}
          stream5={usernames[4]}
          stream6={usernames[5]}
          stream7={usernames[6]}
          stream8={usernames[7]}
          stream9={usernames[8]}
        />
      ) : null}
    </div>
  );
};

export default Streams;
