import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useProductContext } from '../../context/product_context'
import { useCartContext } from '../../context/cart_context'

const SearchResultItem = ({ product }) => {
    const { closeSearchBar } = useProductContext();
    const { cart, addToCart, wishlist, addToWishlist, removeFromWishlist } = useCartContext();

    const handleClick = () => {
        if (cart.some((item) => item.id === product.id)) {
            closeSearchBar();
        }
        else {
            addToCart(product.id, product, 1);
        }
    };
    
    return (
        <div className='search-result-item'>
            <img src={product.thumbnail} alt={product.title} />
            <h2><Link to={`/products/${product.id}`} onClick={closeSearchBar}>{product.title}</Link></h2>
            <p>By: {product.brand}</p>
            <h3>$ {product.price}</h3>
            <div className="search-result-item-btns">
                {
                    product.stock > 0 ?
                        <button onClick={handleClick}>
                            {
                                cart.some((item) => item.id === product.id) ?
                                    <Link to='/cart'>View Cart</Link> :
                                    'Add to cart'
                            }
                        </button> :
                        <button>Out of stock</button>
                }
                {
                    wishlist?.some((item) => item.id === product.id) ?
                        <button onClick={() => removeFromWishlist(product.id)}><AiFillHeart /></button> :
                        <button onClick={() => addToWishlist(product)}><AiOutlineHeart /></button>
                }
            </div>
        </div>
    )
}

export default SearchResultItem
