import './Groceries.css'
import GroceryItem from './GroceryItem'

function Groceries({groceries}) {
    return (
        <>
            <p>Groceries List</p>
            <div className='flex-evenly'>
                {groceries.map( groceryItem => (
                    <GroceryItem name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic}/>
                ))}
            </div>
        </>
    )
}

export default Groceries