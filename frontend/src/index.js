import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import MusicPage from "./pages/music";
import NotFoundPage from "./pages/404Page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/music" component={MusicPage} />
      <Route exact path="/" component={App} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
