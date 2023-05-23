import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div>
                <h1>Subscribe to our newsletter</h1>
                <p>Join our newsletter and get 20% off on all your purchases.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder='Enter your email id' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
