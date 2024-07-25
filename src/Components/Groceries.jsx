import './Groceries.css'

function Groceries({groceries}) {
    return (
        <>
            <p>Groceries List</p>
            <ul>
                {groceries.map( groceryItem => (
                    <li>
                        <p>{groceryItem.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Groceries