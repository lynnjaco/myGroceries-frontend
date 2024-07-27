import './NewGroceryForm.css'

function NewGroceryForm() {
    return (
        <>
            <p>New Grocery Form</p>
            <form>
                <label for='item-name'>Name</label>
                <input type='text' id='item-name'/>
                <label for='item-category'>Category</label>
                <select id='item-category'>
                    <option>Fruit</option>
                    <option>Vegetable</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Meat</option>
                    <option>Seafood</option>
                    <option>Beverage</option>
                    <option>Pantry</option>
                    <option>Frozen</option>
                </select>
                <label for='yes-organic'>Yes</label>
                <input type='radio' id='yes-organic' name='is_organic' value="yes"/>
                <label for='no-organic'>No</label>
                <input type='radio' id='no-organic' name='is_organic' value="no"/>
                <label for='item-quantity'>Quanity</label>
                <input type='number' id='item-quantity' min={1}/>
                <label for='item-price'>Price</label>
                <input type='number' id='item-price' min={0.01}/>
                <label for='item-expiry-date'>Expiration Date</label>
                <input type='date' id='item-expiry-date'/>
                <input type='submit'/>
            </form>
        </>
    )
}

export default NewGroceryForm