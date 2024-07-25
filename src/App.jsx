import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

// Components
import GroceriesManager from './Components/GroceriesManager'
import About from './Components/About'
import GroceryItem from './Components/GroceryItem'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={ <GroceriesManager /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/groceries/:id" element={ <GroceryItem /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
