import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import WishlistItem from '../../components/wishlistItems/WishlistItem';
import { useUserContext } from '../../context/user_context';

const Wishlist = () => {
  const { wishlist } = useCartContext();
  const { myUser }= useUserContext();

  if (wishlist.length < 1) {
    return (
      <div className='container'>
        <PageHero pageTitle='Wishlist' />
        <div className="wishlist-container" style={{ minHeight: '40vh' }}>
          {
            myUser?
            <h1 className="no-items-yet">Hi, {myUser.name}<br/> Your wishlist items will appear here...</h1>: 
            <h1 className='no-items-yet'>Your wishlist items will appear here...</h1>
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='container'>
        <PageHero pageTitle='Wishlist' />
        <div className="wishlist-container" style={{ minHeight: '40vh' }}>
          <h1 className='cart-wishlist-title'>Your Wishlist</h1>
          {
            wishlist.map((item) => {
              return <WishlistItem key={item.id} product={item} />
            })
          }
        </div>
      </div>
    )
  }

}

export default Wishlist
