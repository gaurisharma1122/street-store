import React, { useEffect, useRef, useState } from 'react'
import "./CartItem.css"
import AmountButtons from '../amountButtons/AmountButtons';
import { useCartContext } from '../../context/cart_context';

const CartItem = ({ cartItem }) => {
    const { toggleAmount }= useCartContext();
    const { id, product, amount }= cartItem;
    const [itemAmount, setItemAmount]= useState(amount);
    const [toggleType, setToggleType]= useState('inc')

    useEffect(()=>{
        toggleAmount(id, toggleType, itemAmount);
    }, [itemAmount]);

  return (
    <div className='cart-item'>
      <img src={product.thumbnail} alt={product.title} />
      <div className="cart-item-info">
        <h2>{product.title}</h2>
        <h3>$ {product.price}</h3>
        <AmountButtons amount={itemAmount} setAmount={setItemAmount} stock={product.stock} setToggleType={setToggleType} />
      </div>
      <h2 className="cart-item-subtotal">$ {itemAmount * product.price}</h2>
      <button>Remove from cart</button>
    </div>
  )
}

export default CartItem
