import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import CartButtons from '../cartButtons/CartButtons';
import { navLinks } from '../../data';
import { useProductContext } from '../../context/product_context';

const Navbar = () => {
    const { openNavSidebar, openSearchBar }= useProductContext();
    return (
        <nav>
            <div className="nav-center">
                <h1 className="nav-logo">
                    <Link to="/">Street Store</Link>
                </h1>
                <div className="nav-toggle">
                    <AiOutlineSearch className='search-btn' onClick={openSearchBar}/>
                    <FaBars className='toggle-btn' onClick={openNavSidebar}/>
                </div>
                <div className="nav-links">
                    {
                        navLinks.map((link)=>{
                            return <Link key={link.id} to={link.link}>{link.name}</Link>
                        })
                    }
                </div>
                <div className='nav-btns'>
                    <AiOutlineSearch className='search-btn' onClick={openSearchBar} />
                    <CartButtons/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
