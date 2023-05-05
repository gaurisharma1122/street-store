import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import about_img from '../../assets/about-img.jpeg'
import "./About.css"

const About = () => {
  return (
    <div className='container'>
      <PageHero pageTitle='About'/>
      <div className="about-container">
        <img src={about_img} alt="About" />
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
        </div>
      </div>
    </div>
  )
}

export default About
