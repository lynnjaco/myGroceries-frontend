import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div id='navbar-container' className='row space-evenly center'>
            <div className='navbar-section row center'>
                <Link to="/"><img className='navbar-icon' src='/assets/homeicon.svg' alt='Home Icon'/></Link>
                <Link to="/about"><img className='navbar-icon' src='/assets/abouticon.svg' alt='About Icon'/></Link>
            </div>
            <div className='navbar-section center'>
                <h2 id='mygroceries-title-text'>myGroceries</h2>
            </div>
            <div className='navbar-section center'>
                <Link to="/addgroceryitem"><img className='navbar-icon' src='/assets/addicon.svg' alt='Add Item Icon'/></Link>
            </div>
        </div>
    )
}

export default NavBar