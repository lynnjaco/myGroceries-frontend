import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

// Components
import GroceriesManager from './Components/GroceriesManager'
import About from './Components/About'
import NavBar from './Components/NavBar'
import ItemDetails from './Components/ItemDetails'
import GroceryStats from './Components/GroceryStats'

function App() {
  const [groceries, setGroceries] = useState([]);

  function convertDateToMMDDYYYY(isoDate) {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}

  return (
    <>
      <div id='navbar-container'>
        <NavBar/>
      </div>

      <div>
        <GroceryStats groceries={groceries} setGroceries={setGroceries}/>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={ <GroceriesManager setGroceries={setGroceries} groceries={groceries}/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/groceries/:id" element={ <ItemDetails convertDateToMMDDYYYY={convertDateToMMDDYYYY}/> }/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
