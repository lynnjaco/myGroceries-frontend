import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

// Components
import GroceriesManager from './Components/GroceriesManager'
import About from './Components/About'
import NavBar from './Components/NavBar'
import ItemDetails from './Components/ItemDetails'

function App() {
  const API = import.meta.env.VITE_API_URL;
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetch(`${API}/groceries`)
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      setGroceries(res);
    })
    .catch( error => console.error(error))
  }, [])

  
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={ <GroceriesManager groceries={groceries}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/groceries/:id" element={ <ItemDetails API={API}/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
