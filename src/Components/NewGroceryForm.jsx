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
        console.log(newGroceryItem);
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
        <div id="add-item-form-container">
            <p>New Grocery Form</p>
            <form>
                <label for='item-name'>Name</label>
                <input type='text' id='item-name' onChange={(e) => handleInputResponse(e, "name")}/>

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

                <label for='yes-organic'>Yes</label>
                <input type='radio' id='yes-organic' name='is_organic' value={true} onChange={(e) => handleInputResponse(e, "is_organic")}/>

                <label for='no-organic'>No</label>
                <input type='radio' id='no-organic' name='is_organic' value={false} onChange={(e) => handleInputResponse(e, "is_organic")}/>
                
                <label for='item-quantity'>Quanity</label>
                <input type='number' id='item-quantity' onChange={(e) => handleInputResponse(e, "quantity")}/>

                <label for='item-price'>Price per Unit</label>
                <input type='number' id='item-price' onChange={(e) => handleInputResponse(e, "price")}/>

                <label for='item-expiry-date'>Expiration Date</label>
                <input type='date' id='item-expiry-date' onChange={(e) => handleInputResponse(e, "expiration")}/>

                <input type='submit' onClick={handleSubmit}/>
            </form>
            <Link to="/"><button>Cancel</button></Link>
        </div>
    )
}

export default NewGroceryForm