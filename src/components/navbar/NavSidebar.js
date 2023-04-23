import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { navLinks } from '../../data'
import CartButtons from '../cartButtons/CartButtons'
import { useProductContext } from '../../context/product_context'

const NavSidebar = () => {
    const { showNavSidebar, closeNavSidebar }= useProductContext();
    return (
        <div className={showNavSidebar?'nav-sidebar active-nav-sidebar':'nav-sidebar'}>
            <div className="nav-sidebar-header">
                <h1 className="nav-logo">
                    <Link to="/">Street Store</Link>
                </h1>
                <span className='nav-close-btn' onClick={closeNavSidebar}><FaTimes/> </span>
            </div>
            <div className="nav-sidebar-links">
                {
                    navLinks.map((link)=>{
                        return <Link  key={link.id} to={link.link} onClick={closeNavSidebar}>{link.name}</Link>
                    })
                }
            </div>
            <CartButtons/>
        </div>
    )
}

export default NavSidebar
