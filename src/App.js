import React from "react";
import "./App.css";

import Landing from "./components/Landing/Landing";
import AddStreams from "./components/AddStreams/AddStreams";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Switch>
        <Route exact path="/addstreams" component={AddStreams} />
      </Switch>
    </Router>
  );
}

export default App;
