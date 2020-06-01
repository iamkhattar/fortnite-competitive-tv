import React from "react";

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
      ></iframe>
    </div>
  );
};

export default OneStream;
