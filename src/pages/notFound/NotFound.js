import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <PageHero pageTitle='notfound' />
            <div className="notfound">
                <h1>Sorry, the page you requested does not exist!</h1>
            </div>
        </div>
    )
}

export default NotFound
