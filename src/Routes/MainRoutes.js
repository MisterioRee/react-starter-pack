import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Navigation from "./Navigation"

import Login from "Containers/Login/Login";
import LandingPage from "Containers/LandingPage/LandingPage";


export default function MainRoutes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/admin" component={Navigation} />
        {/* <Route path="/merchant" component={Navigation} /> */}

      </Switch>
    </Router>
  )
}
