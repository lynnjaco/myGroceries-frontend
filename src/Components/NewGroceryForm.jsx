import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewGroceryForm.css'

function NewGroceryForm() {
    const API = import.meta.env.VITE_API_URL;
    const [newGroceryItem, setNewGroceryItem ] = useState({});
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const jsonData = JSON.stringify(newGroceryItem);
        
        fetch(`${API}/groceries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then( data => {
            setNewGroceryItem({});
            navigate(`/groceries/${data.id}`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function handleInputResponse(e, key){
        e.preventDefault();
        setNewGroceryItem(prevNewGroceryItem => ({
            ...prevNewGroceryItem,
            [key]: e.target.value
        }));
    }

    return ( 
        <div className='col' id="add-item-form-container">
            <img id='groceries-icon' src='/assets/groceriesicon.svg' alt='Groceries Icon'/>
            <p id='form-instructions'>Fill in all details of the grocery item you want to add.</p>
            <hr/>
            <form className='col'>
                <div className='row form-input-cont'>
                    <label for='item-name'>Name</label>
                    <input type='text' id='item-name' onChange={(e) => handleInputResponse(e, "name")}/>
                </div>

                <div className='row form-input-cont'>
                    <label for='item-category'>Category</label>
                    <select id='item-category' onChange={(e) => handleInputResponse(e, "category")}>
                        <option value='Fruit'>Fruit</option>
                        <option value='Vegetable'>Vegetable</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Bakery'>Bakery</option>
                        <option value='Meat'>Meat</option>
                        <option value='Seafood'>Seafood</option>
                        <option value='Beverage'>Beverage</option>
                        <option value='Pantry'>Pantry</option>
                        <option value='Frozen'>Frozen</option>
                    </select>
                </div>

                <div className='row center form-input-cont'>
                    <p>Organic?</p>
                    <div className='row'>
                        <div className='col'>
                            <label for='yes-organic'>Yes</label>
                            <input type='radio' id='yes-organic' name='is_organic' value={true} onChange={(e) => handleInputResponse(e, "is_organic")}/>
                        </div>

                        <div className='col'> 
                            <label for='no-organic'>No</label>
                            <input type='radio' id='no-organic' name='is_organic' value={false} onChange={(e) => handleInputResponse(e, "is_organic")}/>
                        </div>   
                    </div>
                </div>

                <div className='row form-input-cont'>
                    <label for='item-quantity'>Quanity</label>
                    <input type='number' id='item-quantity' onChange={(e) => handleInputResponse(e, "quantity")}/>
                </div>

                <div className='row form-input-cont'>
                    <label for='item-price'>Price per Unit</label>
                    <input type='number' id='item-price' onChange={(e) => handleInputResponse(e, "price")}/>
                </div>

                <div className='row form-input-cont'>
                    <label for='item-expiry-date'>Expiration Date</label>
                    <input type='date' id='item-expiry-date' onChange={(e) => handleInputResponse(e, "expiration")}/>
                </div>

                <input className='form-button' type='submit' onClick={handleSubmit} value='Add Grocery Item'/>
                <Link to="/"><button className='form-button'>Cancel</button></Link>
            </form>
        </div>
    )
}

export default NewGroceryForm