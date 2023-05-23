import React, { useState } from 'react'
import HomeHero from '../../components/homeHero/HomeHero'
import { homeHero } from '../../data';
import Features from '../../components/features/Features';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  return (
      <div className='container'>
        <HomeHero homeHeroData={homeHero[heroIndex]} heroIndex={heroIndex} setHeroIndex={setHeroIndex} />
        <Features/>
        <FeaturedProducts/>
      </div>
  )
}

export default Home
