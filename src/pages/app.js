import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout/layout"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ThursdayAm from "../components/NYGSE/SegmentsDisplay/ThursdayAm"
import ThursdayPm from "../components/NYGSE/SegmentsDisplay/ThursdayPm"
import Friday from "../components/NYGSE/SegmentsDisplay/Friday"
import GeneralSession from "../components/NYGSE/TracksDisplay/GeneralSession"
import NurseTech from "../components/NYGSE/TracksDisplay/NurseTech"
import Presenters from "../components/NYGSE/PresentersDisplay/Presenters"
import EpicFriday from "../components/EpicSec/SegmentsDisplay/EpicFriday"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/thursday-am" component={ThursdayAm} />
      <PrivateRoute path="/app/thursday-pm" component={ThursdayPm} />
      <PrivateRoute path="/app/friday" component={Friday} />
      <PrivateRoute path="/app/general-session" component={GeneralSession} />
      <PrivateRoute path="/app/nurse-tech" component={NurseTech} />
      <PrivateRoute path="/app/presenters" component={Presenters} />
      <PrivateRoute path="/app/epic-friday" component={EpicFriday} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App