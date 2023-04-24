import React from 'react'
import "./PageHero.css"
import { Link } from 'react-router-dom'

const PageHero = ({ pageTitle }) => {
  return (
    <div className='page-hero'>
        <h1>
            <Link to='/'>Home</Link> / {pageTitle}
        </h1>
    </div>
  )
}

export default PageHero
