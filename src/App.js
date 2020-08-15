import React from "react"
import 'App.css'
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "pages/Home"
import About from "pages/About"
import SponsorHome from "pages/SponsorHome"
import JoinSponsor from "pages/JoinSponsor"
import JoinInfluencer from "pages/JoinInfluencer"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import InfluencerHome from "pages/InfluencerHome"

function App() {
  return (
    <Router>
      <Route exact path='/' render={props => (
        <AnimationRevealPage>
          <Home />
        </AnimationRevealPage>
      )} />
      <Route path='/influencer' component={InfluencerHome} />
      <Route path='/Sponsor' component={SponsorHome} />
      <Route path='/join-sponsor' component={JoinSponsor} />
      <Route path='/join-influencer' component={JoinInfluencer} />

    </Router>

  )
}

export default App
