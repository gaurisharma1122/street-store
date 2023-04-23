import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import CartButtons from '../cartButtons/CartButtons';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <h1 className="nav-logo">
                    <Link to="/">Street Store</Link>
                </h1>
                <div className="nav-toggle">
                    <AiOutlineSearch className='search-btn'/>
                    <FaBars className='toggle-btn'/>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/products">Products</Link>
                </div>
                <div className='nav-btns'>
                    <AiOutlineSearch className='search-btn'/>
                    <CartButtons/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
