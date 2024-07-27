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

  function convertDateToMMDDYYYY(isoDate) {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}
  
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={ <GroceriesManager groceries={groceries}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/groceries/:id" element={ <ItemDetails API={API} convertDateToMMDDYYYY={convertDateToMMDDYYYY}/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
