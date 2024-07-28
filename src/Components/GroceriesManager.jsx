import './GroceriesManager.css'
// Components
import Groceries from './Groceries'
import GroceryStats from './GroceryStats'

function GroceriesManager({groceries, setGroceries}) {
    return (
        <>
            <GroceryStats groceries={groceries} setGroceries={setGroceries}/>
            <Groceries groceries={groceries} setGroceries={setGroceries}/>
        </>
    )
}

export default GroceriesManager