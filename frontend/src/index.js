import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import NotFoundPage from "./pages/404Page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
