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
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/thursday-am" component={ThursdayAm} />
      <PrivateRoute path="/thursday-pm" component={ThursdayPm} />
      <PrivateRoute path="/friday" component={Friday} />
      <PrivateRoute path="/nurse-tech" component={NurseTech} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App