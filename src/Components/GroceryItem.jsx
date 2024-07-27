import './GroceryItem.css'

function GroceryItem({name, category, quantity, organic}) {
    return (
        <div className='grocery-item-container col'>
            <img className='organic-indicator' src={ organic ? '/assets/organic-green.svg' : '/assets/organic-greyed.svg'} alt='Organic Indicator' title='Organic Indicator'/>
            <div className='grocery-item-image-container col center'>
                <img className='grocery-item-image' src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt={`${name} Image`}/>
            </div>

            <p className='grocery-item-name'>{name}</p>
            <div className='grocery-detail row'>
                <p>Category</p>
                <p className='grocery-item-category'>{category}</p>
            </div>

            <div className='grocery-detail row'>
                <p>Quantity</p>
                <p className='grocery-item-quantity'>{quantity}</p>
            </div>

            {/* <div className='grocery-detail row'>
                <p>Price</p>
                <p className='grocery-item-price'>$1.98</p>
            </div> */}

            <div className='row center'>
                <button className='grocery-item-button'>Details</button>
                <button className='grocery-item-button'>Delete</button>
            </div>

        </div>
    )
}

export default GroceryItem