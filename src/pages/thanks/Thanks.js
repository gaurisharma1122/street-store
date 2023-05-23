import React, { useEffect } from 'react'
import PageHero from '../../components/pageHero/PageHero'
import './Thanks.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/user_context'

const Thanks = () => {
    return (
        <div className='container'>
            <PageHero pageTitle='thanks' />
            <div className='thanks'>
                <div>
                    <h1>Payment Successful</h1>
                    <h2>Your order has been placed. Thanks for shopping with us!</h2>
                    <button>
                        <Link to='/products'>Continue Shopping</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Thanks
