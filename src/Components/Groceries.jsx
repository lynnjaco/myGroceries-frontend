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