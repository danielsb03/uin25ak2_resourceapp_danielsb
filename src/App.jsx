import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import Layout from './components/Layout'
import "./styles/style.scss"
import { resources } from "./assets/ressurser";
import Nav from './components/Nav'
function App() {
const [innhold, setInnhold] = useState ()

  return (
    <Layout element={<Resources />}>
      <Routes>
        {/* <Route path="/" element={<Resources  catagory={"html"} />} />
        <Route path="/css" element={<Resources catagory={"css"} />} />
        <Route path="/javascript" element={<Resources catagory={"javascript"}/>} />
        <Route path="/react" element={<Resources catagory={"react"}/>} />
        <Route path="/sanity" element={<Resources catagory={"sanity"}/>} /> */}
        
        
        <Route path="/category/:slug" element={<Resources resources={resources} />} />
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
