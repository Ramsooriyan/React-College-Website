import React, { useRef } from 'react';
import './Testimonial.css';
import nextButton from '../../assets/next-icon.png';
import backButton from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }


  return (
    <section className='testimonials'>
      <img src={nextButton} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={backButton} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
         <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Ram</h3>
                  <span>Pondy</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel doloribus qui aut in eligendi repellendus, ipsam eaque voluptate tempora veritatis, nesciunt perferendis voluptatem excepturi?</p>
            </div>
          </li>
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>sharan</h3>
                  <span>Pondy</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel doloribus qui aut in eligendi repellendus, ipsam eaque voluptate tempora veritatis, nesciunt perferendis voluptatem excepturi?</p>
            </div>
          </li>
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>kumar</h3>
                  <span>Pondy</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel doloribus qui aut in eligendi repellendus, ipsam eaque voluptate tempora veritatis, nesciunt perferendis voluptatem excepturi?</p>
            </div>
          </li>
          <li>
          <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>vasu</h3>
                  <span>Pondy</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel doloribus qui aut in eligendi repellendus, ipsam eaque voluptate tempora veritatis, nesciunt perferendis voluptatem excepturi?</p>
            </div>
          </li>
         </ul>
      </div>
    </section>
  )
}

export default Testimonials