import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import NavItem from './components/NavItem'
import Nav from './components/Nav'
import Layout from './components/Layout'
import "./styles/style.scss"
function App() {
const [innhold, setInnhold] = useState ()

  return (
    <Layout resources={resources} catagory={catagory}>
      <Routes>
        <Route path="/" element={<Resources  />} />
        <Route path="/css" element={<Resources />} />
        <Route path="/javascript" element={<Resources />} />
        <Route path="/react" element={<Resources />} />
        <Route path="/sanity" element={<Resources/>} />
      </Routes>
  

      
  </Layout>
  ) /* Sett opp Routing til sidene /html, /css,
   /javascript, /react og /sanity, hvor hver 
   av disse router til componenten "Resources",
    og sender med en prop til "Resources" med riktig 
    ressurskategori ( eks: category={"html"} ).
     Bruk prop-en "category" og moderne javascript 
     for å liste opp riktige ressurser fra ressurser.js.*/
}

export default App
