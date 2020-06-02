import React from "react";
import "./EightStreams.css";

const EightStreams = ({
  stream1,
  stream2,
  stream3,
  stream4,
  stream5,
  stream6,
  stream7,
  stream8,
}) => {
  const url1 = "https://player.twitch.tv/?channel=" + stream1 + "&muted=true";
  const url2 = "https://player.twitch.tv/?channel=" + stream2 + "&muted=true";
  const url3 = "https://player.twitch.tv/?channel=" + stream3 + "&muted=true";
  const url4 = "https://player.twitch.tv/?channel=" + stream4 + "&muted=true";
  const url5 = "https://player.twitch.tv/?channel=" + stream5 + "&muted=true";
  const url6 = "https://player.twitch.tv/?channel=" + stream6 + "&muted=true";
  const url7 = "https://player.twitch.tv/?channel=" + stream7 + "&muted=true";
  const url8 = "https://player.twitch.tv/?channel=" + stream8 + "&muted=true";
  return (
    <div className="mainApp">
      <div className="row h-50 w-100 m-0 p-0">
        <div className="h-100 col-3 p-0 m-0">
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
        <div className="h-100 col-3 p-0 m-0">
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
        <div className="h-100 col-3 p-0 m-0">
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
        <div className="h-100 col-3 p-0 m-0">
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
      <div className="row h-50 w-100 m-0 p-0">
        <div className="h-100 col-3 p-0 m-0">
          <iframe
            src={url5}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
            title={stream5}
          />
        </div>
        <div className="h-100 col-3 p-0 m-0">
          <iframe
            src={url6}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
            title={stream6}
          />
        </div>
        <div className="h-100 col-3 p-0 m-0">
          <iframe
            src={url7}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
            title={stream7}
          />
        </div>
        <div className="h-100 col-3 p-0 m-0">
          <iframe
            src={url8}
            height="100%"
            width="100%"
            frameborder="0"
            scrolling={false}
            allowfullscreen={true}
            title={stream8}
          />
        </div>
      </div>
    </div>
  );
};

export default EightStreams;
