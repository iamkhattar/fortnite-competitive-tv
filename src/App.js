import React from "react";
import "./App.css";

import Landing from "./components/Landing/Landing";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Streams from "./components/Streams/Streams";
import AddStreams from "./components/AddStreams/AddStreams";
import KeyStrokeHandler from "./components/KeyStrokeHandler/KeyStrokeHandler";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <KeyStrokeHandler />
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/addstreams" component={AddStreams} />
        <Route exact path="/streams" component={Streams} />
      </Switch>
    </Router>
  );
};

export default App;
