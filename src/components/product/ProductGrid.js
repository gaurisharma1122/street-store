import React from 'react'
import "./Product.css"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'

const ProductGrid = ({ id, title, price, category, thumbnail, rating, stock }) => {
    return (
        <div className='product-grid'>
            <div className="product-grid-img">
                <img src={thumbnail} alt={title} />
                <div className="product-grid-btns">
                    {
                        stock > 0 ?
                            <button>Add to cart</button> :
                            <button>Out of stock</button>
                    }
                    <button><AiOutlineHeart /></button>
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
