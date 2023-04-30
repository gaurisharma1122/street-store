import React from 'react'
import "./Cart.css"
import PageHero from '../../components/pageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import CartItem from '../../components/cartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className='container'>
        <PageHero pageTitle='Cart' />
        <h1 className='no-items-yet'>Your cart items will appear here...</h1>
      </div>
    )
  }
  else {
    return (
      <div className='container'>
        <PageHero pageTitle='Cart' />
        <div className="cart">
          <h1 className='cart-wishlist-title'>Your Cart</h1>
          {
            cart.map((cartItem) => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />
            })
          }
          <div className="cart-totals">
            <button onClick={clearCart}>Clear Cart</button>
            <button><Link to='/products'>Continue Shopping</Link></button>
          </div>
          <div className="order-totals-container">
            <div></div>
            <div className="order-totals">
              <h3>Subtotal :</h3>
              <h3>$ {total_price}</h3>
              <p>Shipping Fee :</p>
              <p>$ {shipping_fee}</p>
              <h2>Order Total :</h2>
              <h2>$ {total_price + shipping_fee}</h2>
              <button className='checkout'>Checkout</button>
            </div>
          </div>
        </div>


      </div>
    )
  }

}

export default Cart
