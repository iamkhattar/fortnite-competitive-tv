import React from "react";
import "./ThreeStreams.css";

const ThreeStreams = ({ stream1, stream2, stream3 }) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1 + "&muted=true";
  const url2 = "https://player.twitch.tv/?channel=" + stream2 + "&muted=true";
  const url3 = "https://player.twitch.tv/?channel=" + stream3 + "&muted=true";
  return (
    <div className="mainApp">
      <div className="row three-row w-100 m-0 p-0">
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
      <div className="row three-row w-100 m-0 p-0">
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
      <div className="row three-row w-100 m-0 p-0">
        <iframe
          src={url3}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
          title={stream3}
        />
      </div>
    </div>
  );
};

export default ThreeStreams;
