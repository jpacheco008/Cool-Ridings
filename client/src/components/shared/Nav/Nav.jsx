import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <h1 className="site-title">Cool Runnings</h1>
                <nav>
                    <ul>
                        <Link to="/products"><li><button className="nav-button">Browse</button></li></Link>
                        <Link to="/add-products"><li><button className="nav-button">Add Item</button></li></Link>
                        <Link to="/sign-up"><li><button className="nav-button">Sign Up</button></li></Link>
                        <Link to="/sign-in"><li><button className="nav-button">Sign In</button></li></Link>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Nav;