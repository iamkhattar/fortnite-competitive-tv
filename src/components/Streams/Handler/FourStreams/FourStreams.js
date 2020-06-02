import React from "react";
import "./FourStreams.css";

const FourStreams = ({ stream1, stream2, stream3, stream4 }) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1 + "&muted=true";
  const url2 = "https://player.twitch.tv/?channel=" + stream2 + "&muted=true";
  const url3 = "https://player.twitch.tv/?channel=" + stream3 + "&muted=true";
  const url4 = "https://player.twitch.tv/?channel=" + stream4 + "&muted=true";
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
            title={stream1}
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
            title={stream2}
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
            title={stream3}
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
            title={stream4}
          />
        </div>
      </div>
    </div>
  );
};

export default FourStreams;
