import React from 'react'
import "./CartButtons.css"
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'
import { useCartContext } from '../../context/cart_context'
import { useUserContext } from '../../context/user_context'

const CartButtons = () => {
    const { closeNavSidebar }= useProductContext();
    const { wishlist, total_cart_items }= useCartContext();
    const { myUser, loginWithRedirect, logout}= useUserContext();

    return (
        <div className='cart-btns'>
            
            <Link to="/wishlist" onClick={closeNavSidebar}><AiOutlineHeart /> <span className="item-no">{wishlist ? wishlist.length : 0}</span></Link>
            <Link to="/cart" onClick={closeNavSidebar}><AiOutlineShoppingCart /> <span className="item-no">{total_cart_items}</span></Link>
            {
                myUser?
                <button className='cart-login-logout-btn' onClick={()=> logout({ returnTo: window.location.origin })}>Logout </button> :
                <button className='cart-login-logout-btn' onClick={loginWithRedirect}>Login </button> 
            }
           
           
        </div>
    )
}

export default CartButtons
