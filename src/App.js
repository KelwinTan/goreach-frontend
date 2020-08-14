import React from "react"
import 'App.css'
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "pages/Home"
import About from "pages/About"
import SponsorHome from "pages/SponsorHome"
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
         <Route exact path='/' render = {props =>(
            <AnimationRevealPage>
              <Home />
            </AnimationRevealPage>
         )}/>
         <Route path = '/About' component={About}/>
         <Route path = '/Sponsor' component={SponsorHome}/>
    </Router>

  )
}

export default App