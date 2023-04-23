import React, { useState } from 'react'
import HomeHero from '../../components/homeHero/HomeHero'
import { homeHero } from '../../data';

const Home = () => {
  const [heroIndex, setHeroIndex]= useState(0);
  return (
    <div className='container'>
      <HomeHero homeHeroData={homeHero[heroIndex]} heroIndex={heroIndex} setHeroIndex={setHeroIndex}/>
    </div>
  )
}

export default Home
