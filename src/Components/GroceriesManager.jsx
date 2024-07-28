import './GroceriesManager.css'
// Components
import Groceries from './Groceries'

function GroceriesManager({groceries, setGroceries}) {
    return (
        <>
            <Groceries groceries={groceries} setGroceries={setGroceries}/>
        </>
    )
}

export default GroceriesManager