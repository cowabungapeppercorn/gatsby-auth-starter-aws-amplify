import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ThursdayAm from "../components/ThursdayAm"
import ThursdayPm from "../components/ThursdayPm"
import Friday from "../components/Friday"
import NurseTech from "../components/NurseTech"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/thursday-am" component={ThursdayAm} />
      <PrivateRoute path="/app/thursday-pm" component={ThursdayPm} />
      <PrivateRoute path="/app/friday" component={Friday} />
      <PrivateRoute path="/app/nurse-tech" component={NurseTech} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App