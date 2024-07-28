import './GroceryStats.css'

function GroceryStats({ groceries, setGroceries }) {

    return (
       <div id='stats-container' className='row space-evenly center'>
            <div className='stat row center'>
                <p>Total Grocery Items:  </p>
                <p className='stat-total'>{groceries.length}</p>
            </div>
            <div className='stat row center'>
                <p>Groceries Total Value:  </p>
                <p className='stat-total'>${groceries.reduce((sum, groceryItem) => sum + (groceryItem.quantity * groceryItem.price), 0)}</p>
            </div>
       </div>
    )
}

export default GroceryStats