import React from 'react';
import { Switch, Route } from "react-router-dom";

import Test from "./Views/Test"
import Home from "./Views/Home"

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/test" exact component={Test}/>
    </Switch>
  )
}
