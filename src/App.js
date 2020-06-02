import React from "react";
import "./App.css";

import Landing from "./components/Landing/Landing";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Streams from "./components/Streams/Streams";
import AddStreams from "./components/AddStreams/AddStreams";
import KeyStrokeHandler from "./components/KeyStrokeHandler/KeyStrokeHandler";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import model from "./model";

import { StoreProvider, createStore } from "easy-peasy";

const store = createStore(model);
const App = () => {
  return (
    <StoreProvider store={store}>
      <Router>
        <KeyStrokeHandler />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/addstreams" component={AddStreams} />
          <Route exact path="/streams" component={Streams} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
