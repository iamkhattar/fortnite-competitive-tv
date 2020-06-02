import React from "react";
import "./TwoStreams.css";
const TwoStream = ({ stream1, stream2 }) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1;
  const url2 = "https://player.twitch.tv/?channel=" + stream2;
  return (
    <div className="mainApp">
      <div className="row h-50 w-100 p-0 m-0">
        <iframe
          src={url1}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
          title={stream1}
        />
      </div>
      <div className="row h-50 w-100 p-0 m-0">
        <iframe
          src={url2}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
          title={stream2}
        />
      </div>
    </div>
  );
};

export default TwoStream;
