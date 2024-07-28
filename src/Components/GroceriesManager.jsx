import './GroceriesManager.css'
// Components
import Groceries from './Groceries'
import GroceryStats from './GroceryStats'
import ExpiringList from './ExpiringList'

function GroceriesManager({groceries, setGroceries, convertDateToMMDDYYYY}) {
    return (
        <>
            <GroceryStats groceries={groceries} setGroceries={setGroceries}/>
            <Groceries groceries={groceries} setGroceries={setGroceries}/>
        </>
    )
}

export default GroceriesManager