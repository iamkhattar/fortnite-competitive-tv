import React from "react";
import "./ThreeStreams.css";

const ThreeStreams = ({ stream1, stream2, stream3 }) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1;
  const url2 = "https://player.twitch.tv/?channel=" + stream2;
  const url3 = "https://player.twitch.tv/?channel=" + stream3;
  return (
    <div className="mainApp">
      <div className="row row-height w-100 m-0 p-0">
        <iframe
          src={url1}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
        />
      </div>
      <div className="row row-height w-100 m-0 p-0">
        <iframe
          src={url2}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
        />
      </div>
      <div className="row row-height w-100 m-0 p-0">
        <iframe
          src={url3}
          height="100%"
          width="100%"
          frameborder="0"
          scrolling={false}
          allowfullscreen={true}
        />
      </div>
    </div>
  );
};

export default ThreeStreams;
