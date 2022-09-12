import React from "react"

import { Route, Switch } from "react-router-dom"
import awsPage from "./pages/awsPage"



import HomePage from "./pages/HomePage"

import awsPage from "./pages/awsPage"

export default function App() {

  return (

    <Switch>

      <Route exact path="/" component={HomePage} />

      <Route path="/" component={awsPage} />

    </Switch>

  )

}
