import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quidem beatae perferendis fugiat voluptatem non odit illo eaque voluptates explicabo!</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero