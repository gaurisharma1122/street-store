import React from 'react'
import "./Cart.css"
import PageHero from '../../components/pageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import CartItem from '../../components/cartItem/CartItem';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect }= useUserContext();

  console.log(myUser)
  if (cart.length < 1) {
    return (
      <div className='container'>
        <PageHero pageTitle='Cart' />
        <div className="cart" style={{ minHeight: '40vh' }}>
          {
            myUser? 
            <h1 className="no-items-yet">Hi, {myUser.name}<br/> Your cart items will appear here...</h1>: 
            <h1 className='no-items-yet'>Your cart items will appear here...</h1>
          }
        </div>
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
              {
                myUser ?
                <button className='checkout'>Checkout</button>:
                <button className='checkout' onClick={loginWithRedirect}>Login to Checkout</button>
              }
              
            </div>
          </div>
        </div>


      </div>
    )
  }

}

export default Cart
