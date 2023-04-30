import React from 'react'
import "./WishlistItem.css"
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'

const WishlistItem = ({ product }) => {
    const { removeFromWishlist, addToCart }= useCartContext();

    const handleWishlist= ()=>{
        addToCart(product.id, product, 1);
        removeFromWishlist(product.id);
    }
    return (
        <div className='wishlist-item'>
            <img src={product.thumbnail} alt={product.title} />
            <div className='wishlist-item-info-container'>
                <div className="wishlist-item-info">
                    <h2 className='item-title'>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </h2>
                    <p>Category: {product.category}</p>
                    <h2>$ {product.price}</h2>
                </div>
                <div className="wishlist-item-button">
                    <button onClick={handleWishlist}>Move to cart</button>
                    <button onClick={()=> removeFromWishlist(product.id)}>Remove from wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem
