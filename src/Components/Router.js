import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Buttons from "../Routes/Buttons";
import Cards from "../Routes/Cards";
import Forms from "../Routes/Forms";
import Dropdowns from "../Routes/Dropdowns";
import Tags from "../Routes/Tags";
import Notifications from "../Routes/Notifications";
import Modals from "../Routes/Modals";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/cards" component={Cards} />
      <Route path="/forms" component={Forms} />
      <Route path="/dropdowns" component={Dropdowns} />
      <Route path="/tags" component={Tags} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/modals" component={Modals} />
    </Switch>
  </Router>
);
