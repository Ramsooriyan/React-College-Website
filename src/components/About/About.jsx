import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayer}) => {
  return (
    <section className='about'>
       <div className="about-left">
        <img src={about_img} alt="AboutImage" className='aboutImg'/>
        <img src={play_icon} alt="AboutImage" className='playIcon' onClick={()=>{setPlayer(true)}}/>
       </div>
       <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis eveniet dicta possimus nesciunt debitis assumenda deserunt eum quod! Aliquid.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis eveniet dicta possimus nesciunt debitis assumenda deserunt eum quod! Aliquid.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis eveniet dicta possimus nesciunt debitis assumenda deserunt eum quod! Aliquid.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis eveniet dicta possimus nesciunt debitis assumenda deserunt eum quod! Aliquid.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis eveniet dicta possimus nesciunt debitis assumenda deserunt eum quod! Aliquid.</p>
       </div>
    </section>
  )
}

export default About