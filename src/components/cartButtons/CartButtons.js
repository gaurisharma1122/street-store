import React from 'react'
import "./CartButtons.css"
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'
import { useCartContext } from '../../context/cart_context'

const CartButtons = () => {
    const { closeNavSidebar }= useProductContext();
    const { wishlist }= useCartContext();
    return (
        <div className='cart-btns'>
            
            <Link to="/wishlist" onClick={closeNavSidebar}><AiOutlineHeart /> <span className="item-no">{wishlist.length}</span></Link>
            <Link to="/cart" onClick={closeNavSidebar}><AiOutlineShoppingCart /> <span className="item-no">{0}</span></Link>
        </div>
    )
}

export default CartButtons
