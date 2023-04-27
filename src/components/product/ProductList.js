import React from 'react'
import "./Product.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductList = ({ id, title, price, category, thumbnail, rating, stock }) => {
    return (
        <div className='product-list'>
            <img src={thumbnail} alt={title} />
            <div className="product-list-info">
                <h3><Link to={`/products/${id}`}>{title}</Link></h3>
                <p>Category: {category}</p>
                <h4>$ {price}</h4>
                <div className="product-list-btn">
                    {
                        stock > 0 ?
                            <button>Add to cart</button> :
                            <button>Out of stock</button>
                    }
                    <button><AiOutlineHeart /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductList
