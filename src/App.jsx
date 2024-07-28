import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

// Components
import GroceriesManager from './Components/GroceriesManager'
import About from './Components/About'
import NavBar from './Components/NavBar'
import ItemDetails from './Components/ItemDetails'
import NewGroceryForm from './Components/NewGroceryForm'

function App() {
  const [groceries, setGroceries] = useState([]);

  function convertDateToMMDDYYYY(isoDate) {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}

  const today = new Date();

  function getExpiredItems(expiration) {
      return new Date(expiration) < today;
  } 

  function getExpiringItems(expiration) {
      const oneDay = 24 * 60 * 60 * 1000;
      const expirationDate = new Date(expiration);
      const differenceInDays = (expirationDate - today) / oneDay;
      return differenceInDays >= 0 && differenceInDays <= 14;
  }

  return (
    <div className='col'>
      <Router>
          <NavBar/>
        <Routes>
          <Route path="/" element={ <GroceriesManager setGroceries={setGroceries} groceries={groceries} convertDateToMMDDYYYY={convertDateToMMDDYYYY}/> }/>
          <Route path="/addgroceryitem" element={ <NewGroceryForm/> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/groceries/:id" element={ <ItemDetails getExpiredItems={getExpiredItems} getExpiringItems={getExpiringItems} convertDateToMMDDYYYY={convertDateToMMDDYYYY}/> }/>
        </Routes>
      </Router> 
    </div>
  )
}

export default App
