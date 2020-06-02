import React from "react";
import "./OneStream.css";

const OneStream = ({ stream1 }) => {
  const url = "https://player.twitch.tv/?channel=" + stream1;
  return (
    <div className="mainApp">
      <iframe
        src={url}
        height="100%"
        width="100%"
        frameborder="0"
        scrolling={false}
        allowfullscreen={true}
        title={stream1}
      />
    </div>
  );
};

export default OneStream;
