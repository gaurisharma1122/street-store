import React from 'react'
import "./PageHero.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const PageHero = ({ pageTitle, product }) => {
  if (pageTitle === 'thanks' || pageTitle === 'notfound') {
    return (
      <div className="page-hero">
        <h1>
          <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AiOutlineArrowLeft /> Back to Home
          </Link>
        </h1>
      </div>
    )
  }
  else {
    return (
      <div className='page-hero'>
        {
          product ?
            <h1>
              <Link to='/'>Home</Link> / <Link to={`/${pageTitle}`}>{pageTitle}</Link> / {product}
            </h1> :
            <h1>
              <Link to='/'>Home</Link> / {pageTitle}
            </h1>
        }
      </div>
    )
  }
}

export default PageHero
