import React from "react";
import "./FourStreams.css";

const FourStreams = ({ stream1, stream2, stream3, stream4 }) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1;
  const url2 = "https://player.twitch.tv/?channel=" + stream2;
  const url3 = "https://player.twitch.tv/?channel=" + stream3;
  const url4 = "https://player.twitch.tv/?channel=" + stream4;
  return (
    <div className="mainApp">
      <div className="row h-50 w-100 m-0 p-0">
        <div className="h-100 col-6 p-0 m-0">
          <iframe
            src={url1}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
          />
        </div>
        <div className="h-100 col-6 p-0 m-0">
          <iframe
            src={url2}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
          />
        </div>
      </div>
      <div className="row h-50 w-100 m-0 p-0">
        <div className="h-100 col-6 p-0 m-0">
          <iframe
            src={url3}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
          />
        </div>
        <div className="h-100 col-6 p-0 m-0">
          <iframe
            src={url4}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FourStreams;
