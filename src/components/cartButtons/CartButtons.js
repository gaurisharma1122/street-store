import React from 'react'
import "./CartButtons.css"
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const CartButtons = () => {
    return (
        <div className='cart-btns'>
            
            <Link to="/wishlist" ><AiOutlineHeart /> <span className="item-no">{0}</span></Link>
            <Link to="/cart"><AiOutlineShoppingCart /> <span className="item-no">{0}</span></Link>
        </div>
    )
}

export default CartButtons
