import React from 'react'
import "./PageHero.css"
import { Link } from 'react-router-dom'

const PageHero = ({ pageTitle, product }) => {
  return (
    <div className='page-hero'>
      {
        product?
        <h1>
          <Link to='/'>Home</Link> / <Link to={`/${pageTitle}`}>{pageTitle}</Link> / {product}
        </h1>:
        <h1>
            <Link to='/'>Home</Link> / {pageTitle}
        </h1>
      }
        
    </div>
  )
}

export default PageHero
