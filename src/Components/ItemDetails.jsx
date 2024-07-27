import './ItemDetails.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ItemDetails({ API, convertDateToMMDDYYYY }) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [currentGroceryItem, setCurrentGroceryItem] = useState("");

    useEffect(() => {
        fetch(`${API}/groceries/${id}`)
        .then(response => response.json())
        .then(res => {
            setCurrentGroceryItem(res);
        })
        .catch((error) => {
            console.error(error);
            navigate("/");
        })
    }, [API, id, navigate])

    return (
        <div id='item-details-container' className='row'>
            <div id='detailed-item-img-cont' className='center'>
                <img id='detailed-item-img' src={`https://www.themealdb.com/images/ingredients/${currentGroceryItem.name}.png`} alt={`${currentGroceryItem.name} Image`}/>
            </div>

            <div id='details-container' className='center'>
                <img className='organic-indicator' src={ currentGroceryItem.is_organic ? '/assets/organic-green.svg' : '/assets/organic-greyed.svg'} alt='Organic Indicator' title='Organic Indicator'/>
                <p id='detailed-item-name'>{currentGroceryItem.name}</p>

                <div className='row detail'>
                    <p>Quantity</p>
                    <p>{currentGroceryItem.quantity}</p>
                </div>

                <div className='row detail'>
                    <p>Price Per Unit</p>
                    <p>${currentGroceryItem.price}</p>
                </div>

                <div className='row detail'>
                    <p>Total Value Of Inventory</p>
                    <p>${currentGroceryItem.price * currentGroceryItem.quantity}</p>
                </div>

                <div className='row detail'>
                    <p>Category</p>
                    <p>{currentGroceryItem.category}</p>
                </div>

                <div className='row detail'>
                    <p>Expiration Date</p>
                    <p>{convertDateToMMDDYYYY(currentGroceryItem.expiration)}</p>
                </div>

                <p id='item-added-text'>Item Added: {convertDateToMMDDYYYY(currentGroceryItem.dateadded)}</p>

                <div id='moidfy-button-cont' className='row'>
                    <Link to="/"><button className='modify-button'>Go Back</button></Link>
                    <button className='modify-button'>Update</button>
                    <button className='modify-button'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetails