import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import WishlistItem from '../../components/wishlistItems/WishlistItem';

const Wishlist = () => {
  const { wishlist }= useCartContext();

  if(wishlist.length<1){
    return (
      <div className='container'>
        <PageHero pageTitle='Wishlist'/>
        <h1 className='no-items-yet'>Your wishlist items will appear here...</h1>
      </div>
    )
  }
  else{
    return (
      <div className='container'>
        <PageHero pageTitle='Wishlist'/>
        <h1 className='cart-wishlist-title'>Your Wishlist</h1>
        {
          wishlist.map((item)=>{
            return <WishlistItem key={item.id} product={item}/>
          })
        }
      </div>
    )
  }
  
}

export default Wishlist
