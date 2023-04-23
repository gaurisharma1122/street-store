import React from 'react'
import "./HomeHero.css"
import { Link } from 'react-router-dom'
import { homeHero } from '../../data';


const HomeHero = ({ homeHeroData, heroIndex, setHeroIndex }) => {
  const { id, title, button, url, img, description }= homeHeroData;
  return (
    <div className='home-hero'>
      <div className="home-hero-item ">
        <img src={img} alt="image" />
        <div className="home-hero-content-overlay">
          <div className="home-hero-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>
              <Link to={url}>{button}</Link>
            </button>
          </div>
          <div className="home-hero-buttons">
            {
              homeHero.map((item)=>{
                return <span key={item.id} className={heroIndex===item.id-1?'hero-btn active-hero-btn':'hero-btn'} 
                onClick={()=> setHeroIndex(item.id-1)}></span>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
