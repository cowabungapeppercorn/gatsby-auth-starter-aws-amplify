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
import EpicThursday from "../components/EpicSec/SegmentsDisplay/EpicThursday"
import EpicFriday from "../components/EpicSec/SegmentsDisplay/EpicFriday"
import EpicSaturday from "../components/EpicSec/SegmentsDisplay/EpicSaturday"
import EpicPresenters from "../components/EpicSec/PresentersDisplay/EpicPresenters"
import AppSymposium from "../components/EpicSec/TracksDisplay/AppSymposium"
import CardiologyClinicUpdate from "../components/EpicSec/TracksDisplay/CardiologyClinicUpdate"
import CocktailsAndCases from "../components/EpicSec/TracksDisplay/CocktailsAndCases"
import Coronary from "../components/EpicSec/TracksDisplay/Coronary"
import FellowsCorner from "../components/EpicSec/TracksDisplay/FellowsCorner"
import EpicGeneralSession from "../components/EpicSec/TracksDisplay/GeneralSession"
import EpicGeneralSession from "../components/EpicSec/TracksDisplay/GeneralSession"
import InnovationSummit from "../components/EpicSec/TracksDisplay/InnovationSummit"
import LazarusBattle from "../components/EpicSec/TracksDisplay/LazarusBattle"
import LiveCases from "../components/EpicSec/TracksDisplay/LiveCases"
import Nursing from "../components/EpicSec/TracksDisplay/Nursing"
import Peripheral from "../components/EpicSec/TracksDisplay/Peripheral"
import Structural from "../components/EpicSec/TracksDisplay/Structural"


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
      <PrivateRoute path="/app/epic-thursday" component={EpicThursday} />
      <PrivateRoute path="/app/epic-friday" component={EpicFriday} />
      <PrivateRoute path="/app/epic-saturday" component={EpicSaturday} />
      <PrivateRoute path="/app/epic-presenters" component={EpicPresenters} />
      <PrivateRoute path="/app/epic-app-symposium" component={AppSymposium} />
      <PrivateRoute path="/app/epic-cardiology-clinic-update" component={CardiologyClinicUpdate} />
      <PrivateRoute path="/app/epic-cocktails-and-cases" component={CocktailsAndCases} />
      <PrivateRoute path="/app/epic-coronary" component={Coronary} />
      <PrivateRoute path="/app/epic-fellows-corner" component={FellowsCorner} />
      <PrivateRoute path="/app/epic-general-session" component={EpicGeneralSession} />
      <PrivateRoute path="/app/epic-innovation-summit" component={InnovationSummit} />
      <PrivateRoute path="/app/epic-lazarus-battle" component={LazarusBattle} />
      <PrivateRoute path="/app/epic-live-cases" component={LiveCases} />
      <PrivateRoute path="/app/epic-nursing" component={Nursing} />
      <PrivateRoute path="/app/epic-peripheral" component={Peripheral} />
      <PrivateRoute path="/app/epic-structural" component={Structural} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App