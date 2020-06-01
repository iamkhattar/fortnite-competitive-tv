import React, { useEffect } from "react";

import { useHistory, withRouter } from "react-router-dom";

const KeyStrokeHandler = () => {
  const history = useHistory();

  useEffect(() => {
    const handleEscButtonClick = (e) => {
      if (e.keyCode === 27) {
        e.preventDefault();
        history.push("/");
      }
    };
    window.addEventListener("keydown", handleEscButtonClick);
  }, [history]);

  useEffect(() => {
    setInterval(function () {
      var elem = document.activeElement;
      if (elem && elem.tagName === "IFRAME") {
        document.activeElement.blur();
      }
    }, 500);
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default withRouter(KeyStrokeHandler);
