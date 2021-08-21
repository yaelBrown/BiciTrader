import React from 'react';
import { Switch, Route } from "react-router-dom";

import Test from "./Views/Test"
import Home from "./Views/Home"
import Error from "./Views/Error"
import ListerListingCreate from './Components/Lister/ListerListingCreate';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/test" exact component={Test}/>
      <Route path="/createListing" exact component={ListerListingCreate}/>
      <Route component={Error}/>
    </Switch>
  )
}
