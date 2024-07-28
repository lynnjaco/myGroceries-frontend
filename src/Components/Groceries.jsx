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
                {
                    ["Fruit", "Vegetable", "Dairy", "Bakery", "Meat", "Seafood", "Beverage", "Pantry", "Frozen"].map( groceryCategory => (
                        <div className='col'>
                            <h2 className='category-title'>{groceryCategory}</h2>
                            <div className='flex-evenly'>
                                {groceries.filter( el => el.category === groceryCategory).map( groceryItem => (
                                    <GroceryItem key={groceryItem.id} name={groceryItem.name} category={groceryItem.category} quantity={groceryItem.quantity} organic={groceryItem.is_organic} id={groceryItem.id} expiration={groceryItem.expiration}/>
                                ))}
                            </div>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Groceries