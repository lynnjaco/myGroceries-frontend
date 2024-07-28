import './Groceries.css'
import { useEffect } from 'react'
import GroceryItem from './GroceryItem'

function Groceries({groceries, setGroceries}) {
    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/groceries`)
        .then((response) => {
        return response.json()
        })
        .then((res) => {
        setGroceries(res);
        })
        .catch( error => console.error(error))
    }, [])

    return (
        <>
            <div id='groceries-container' >
                <div className='col'>
                    <h2 className='category-title'>Fruit</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Fruit").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                 </div>

                <div className='col'>
                    <h2 className='category-title'>Vegetables</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Vegetable").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Dairy</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Dairy").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Bakery</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Bakery").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Meat</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Meat").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Seafood</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Seafood").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Beverage</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Beverage").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Pantry</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Pantry").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

                <div className='col'>
                    <h2 className='category-title'>Frozen</h2>
                    <div className='flex-evenly'>
                        {groceries.filter( el => el.category === "Frozen").map( groceryItem => (
                            <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id}/>
                        ))}
                    </div>
                    <hr/>
                </div>

            </div>
        </>
    )
}

export default Groceries