import './GroceriesManager.css'
// Components
import Groceries from './Groceries'
import NewGroceryForm from './NewGroceryForm'

function GroceriesManager({groceries}) {
    return (
        <>
            <NewGroceryForm />
            <Groceries groceries={groceries}/>
        </>
    )
}

export default GroceriesManager