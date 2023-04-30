import React from 'react'
import "./Product.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'

const ProductGrid = ({ product }) => {
    const {id, title, price, category, thumbnail, rating, stock}= product;
    const { cart, wishlist, addToWishlist, removeFromWishlist, addToCart, removeFromCart }= useCartContext();

    const handleClick=()=>{
        if(cart.some((item)=> item.id===id)){
            removeFromCart(id);
        }
        else{
            addToCart(id, product, 1);
        }
    };

    return (
        <div className='product-grid'>
            <div className="product-grid-img">
                <img src={thumbnail} alt={title} />
                <div className="product-grid-btns">
                    {
                        stock > 0 ?
                        <button onClick={handleClick}>
                            {
                                cart.some((item)=> item.id===id)? 'Remove from Cart': 'Add To cart'
                            }
                        </button>:
                        <button >Out of stock</button>
                    }
                    {
                        wishlist?.some((item)=> item.id===id)?
                        <button onClick={()=> removeFromWishlist(id)}><AiFillHeart /></button>:
                        <button onClick={()=> addToWishlist(product)}><AiOutlineHeart /></button>
                    }
                    
                </div>
            </div>
            <div className="product-grid-info">
                <h3><Link to={`/products/${id}`}>{title}</Link></h3>
                <p>Category: {category}</p>
                <h4>$ {price}</h4>

            </div>
        </div>
    )
}

export default ProductGrid
