
import React from "react"
import Navbar from './componenets/Navbar/Navbar'
import Header from "./componenets/Header/Header"
import PartBackground from "./componenets/Particles/particles"
import About from "./componenets/About/About"
import Skill from "./componenets/Skill/Skill"
import Portfolio from "./componenets/Portfolio/portfolio"
import Contact from "./componenets/Contact/Contact"
const App = () => {
 
  return (
    <React.Fragment>
           <PartBackground/>
           <Navbar/>
           <Header/>
           <About/>
           <Skill/>
           <Portfolio/>
           <Contact/>
    </React.Fragment>
  )
}

export default App
