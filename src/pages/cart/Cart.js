import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import CartItem from '../../components/cartItem/CartItem';

const Cart = () => {
  const { cart }= useCartContext();

  if(cart.length<1){
    return (
      <div className='container'>
        <PageHero pageTitle='Cart'/>
        <h1 className='no-items-yet'>Your Items will appear here...</h1>
      </div>
    )
  }
  else{
    return (
      <div className='container'>
        <PageHero pageTitle='Cart'/>
        <h1 className='cart-wishlist-title'>Your Cart</h1>
        {
          cart.map((cartItem)=>{
            return <CartItem key={cartItem.id} cartItem= {cartItem}/>
          })
        }
      </div>
    )
  }
  
}

export default Cart
