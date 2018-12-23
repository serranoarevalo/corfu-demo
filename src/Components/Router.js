import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Buttons from "../Routes/Buttons";
import Forms from "../Routes/Forms";
import Tags from "../Routes/Tags";
import Notifications from "../Routes/Notifications";
import Modals from "../Routes/Modals";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/forms" component={Forms} />
      <Route path="/tags" component={Tags} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/modals" component={Modals} />
    </Switch>
  </Router>
);
