import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import Layout from './components/Layout'
import "./styles/style.scss"
import { resources } from "./assets/ressurser";
function App() {
const [innhold, setInnhold] = useState ()

  return ( 
      
    <Layout element={<Resources />}>
      <Routes>
        {/* Fikk hjelp av Ingrid*/}
        
       
        <Route path="/category/:slug" element={<Resources resources={resources}  />} />
      </Routes>
        

      
  </Layout>
  ) 
}

export default App
