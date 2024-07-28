import './ItemDetails.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ItemDetails({ convertDateToMMDDYYYY, getExpiringItems, getExpiredItems }) {
    const API = import.meta.env.VITE_API_URL;
    const {id} = useParams();
    const navigate = useNavigate();
    const [currentGroceryItem, setCurrentGroceryItem] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [inputResponses, setInputResponses] = useState({});
    const [mealSuggestions, setMealSuggestions] = useState([]);

    useEffect(() => {
        if (currentGroceryItem.name) {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${currentGroceryItem.name}`)
                .then(response => response.json())
                .then(res => {
                    setMealSuggestions(res.meals || []);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [currentGroceryItem]);

    useEffect(() => {
        fetch(`${API}/groceries/${id}`)
        .then(response => response.json())
        .then(res => {
            setCurrentGroceryItem(res);
            setInputResponses(res);
        })
        .catch((error) => {
            console.error(error);
            navigate("/");
        })
    }, [API, id, navigate])

    function handleDelete(e) {
        e.preventDefault();
        fetch(`${API}/groceries/${id}`, {
        method: "DELETE"
        })
        .then(() => {
        navigate("/")
        })
        .catch((error) => console.error(error))
    }    

    function handleUpdate(e) {
        e.preventDefault();
        return updateMode ? setUpdateMode(false) : setUpdateMode(true);
    }

    function handleCancel(e) {
        e.preventDefault();
        setUpdateMode(false);
    }

    function handleSaveChanges(e) {
        e.preventDefault();
        console.log(inputResponses);

        const jsonData = JSON.stringify(inputResponses); 
        fetch(`${API}/groceries/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(res => {
            console.log(inputResponses);
            setInputResponses(res);
            setCurrentGroceryItem(res);
            setUpdateMode(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // dynamically handle updateable inputs
    function handleInputChange(key, e) {
        setInputResponses(prevInputResponses => ({
            ...prevInputResponses,
            [key]: e.target.value
        }));
    }

    return (
        <div className='col center'>
            <div id='item-details-container' className='row'>
                <div id='detailed-item-img-cont' className='center'>
                    {getExpiredItems(currentGroceryItem.expiration) ? <img id='expired-stamp' src='/assets/expiredstamp-01.svg' alt='Expired Stamp' /> : null }
                    <img id='detailed-item-img' src={`https://www.themealdb.com/images/ingredients/${currentGroceryItem.name}.png`} alt={`${currentGroceryItem.name} Image`}/>
                </div>

                <div id='details-container' className='center'>
                    <img className='indicator-icon' src={ currentGroceryItem.is_organic ? '/assets/organic-green.svg' : '/assets/organic-greyed.svg'} alt='Organic Indicator' title='Organic Indicator'/>
                    {currentGroceryItem.is_organic ? <p id='organic-text' className='uppercase'>Organic</p> : null}
                    <p id='detailed-item-name'>{currentGroceryItem.name}</p>
                    <div className='row detail'>
                        <p>Quantity</p>
                        {updateMode ? <input type='number' min={1} value={inputResponses.quantity} onChange={(e) => handleInputChange("quantity", e) }/> : <p>{currentGroceryItem.quantity}</p>}
                    </div>

                    <div className='row detail'>
                        <p>Price Per Unit</p>
                        {updateMode ? <input type='number' min={0.01} value={inputResponses.price} onChange={(e) => handleInputChange("price", e)}/> : <p>${(currentGroceryItem.price)}</p>}
                    </div>

                    <div className='row detail'>
                        <p>Total Value Of Inventory</p>
                        <p>${(currentGroceryItem.price * currentGroceryItem.quantity).toFixed(2)}</p>
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
                        {updateMode ? <button className='modify-button' onClick={handleCancel}>Cancel</button> : <Link to="/"><button className='modify-button'>View Groceries</button></Link>}
                        {updateMode ? <button className='modify-button' onClick={handleSaveChanges}>Save</button> :<button className='modify-button' onClick={handleUpdate}>Update</button>}
                        <button className='modify-button' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>

            { getExpiringItems(currentGroceryItem.expiration) ? 
                <div id='meal-suggestions-cont' className='col'>
                    <img className='indicator-icon' src='/assets/expiringicon.svg' alt='Expiring Soon Icon'/>
                    <h3 className='meal-suggestions-text'>This Item Is Expiring Soon!</h3>
                    <h4 className='meal-suggestions-text'>To avoid wasting ${(currentGroceryItem.quantity * currentGroceryItem.price).toFixed(2)} worth of groceries, here are some meal suggestions...</h4>

                    <div id='meals-cont' className='row space-evenly'>
                        {mealSuggestions.map( meal => (
                            <div key={meal.idMeal} className='meal-container col center'>
                                <p className='meal-name'>{meal.strMeal}</p>
                                <img className='meal-image' src={meal.strMealThumb} alt={meal.strMeal}/>
                            </div>
                        ))}
                    </div>
                </div> : null}
        </div>
    )
}

export default ItemDetails