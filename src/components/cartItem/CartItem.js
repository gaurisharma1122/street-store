import React, { useEffect, useRef, useState } from 'react'
import "./CartItem.css"
import AmountButtons from '../amountButtons/AmountButtons';
import { useCartContext } from '../../context/cart_context';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
    const { toggleAmount, removeFromCart, addToWishlist } = useCartContext();
    const { id, product, amount } = cartItem;
    const [itemAmount, setItemAmount] = useState(amount);
    const [toggleType, setToggleType] = useState('inc');

    const handleClick= ()=>{
        addToWishlist(product);
        removeFromCart(id);
    };

    useEffect(() => {
        toggleAmount(id, toggleType, itemAmount);
    }, [itemAmount]);

    
    return (
        <div className='cart-item'>
            <img src={product.thumbnail} alt={product.title} />
            <div className="cart-item-info">
                <h2>
                    <Link to={`/products/${id}`}>{product.title}</Link>
                </h2>
                <h3>$ {product.price}</h3>
                <AmountButtons amount={itemAmount} setAmount={setItemAmount} stock={product.stock} setToggleType={setToggleType} />
            </div>
            <h2 className="cart-item-subtotal">$ {itemAmount * product.price}</h2>
            <div className='cart-item-buttons'>
                <button onClick={() => removeFromCart(id)}>Remove from cart</button>
                <button onClick={handleClick}>Move to wishlist</button>
            </div>
        </div>
    )
}

export default CartItem
