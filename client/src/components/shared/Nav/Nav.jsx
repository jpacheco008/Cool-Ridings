import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


const Nav = (props) => {
  
    return (
        <>
        <div className="nav-container">
          <Link to="/">
            <img className="logo" src='https://i.imgur.com/2UtSIpm.png' alt='Cool Ridings' />
          </Link>
          <div className="welcome">
            {props.user? "Welcome " + props.user.username : "" }
          </div>
                <nav>
            <ul>
                        <Link to="/products" className="nav-link"><li>Browse</li></Link>
                        <Link to="/add-products" className="nav-link"><li>Add Item</li></Link>
                        <Link to="/sign-up" className="nav-link"><li>Sign Up</li></Link>
                        <Link to="/sign-in" className="nav-link"><li>Sign In</li></Link>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Nav;