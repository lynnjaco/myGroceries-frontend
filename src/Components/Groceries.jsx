import './Groceries.css'
import GroceryItem from './GroceryItem'

function Groceries({groceries}) {
    return (
        <>
            <div className='container-label col center'>
                <p>Your Groceries</p>
            </div>

            <div id='groceries-container' className='flex-evenly'>
                {groceries.map( groceryItem => (
                    <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                ))}
            </div>
        </>
    )
}

export default Groceries