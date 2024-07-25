import './GroceriesManager.css'
// Components
import Groceries from './Groceries'
import NewGroceryForm from './NewGroceryForm'

function GroceriesManager() {
    return (
        <>
            <NewGroceryForm />
            <Groceries />
        </>
    )
}

export default GroceriesManager