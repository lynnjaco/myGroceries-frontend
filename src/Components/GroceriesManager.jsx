import './GroceriesManager.css'
// Components
import Groceries from './Groceries'
import NewGroceryForm from './NewGroceryForm'

function GroceriesManager({groceries, setGroceries}) {
    return (
        <>
            {/* <NewGroceryForm /> */}
            <Groceries groceries={groceries} setGroceries={setGroceries}/>
        </>
    )
}

export default GroceriesManager