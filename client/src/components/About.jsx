import React from 'react'
import '../css/About.css'
import myPic from '../image/image dev.png'
import { Projects } from './Projects'


const About = () => {
  return (
    <div className="about_wrapper">
    <div className='about'>
      <div className="a_left">
        <img src={myPic} alt="" />
      </div>
      <div className="a_right">
        <div className="a_title">
          <span>ABOUT ME </span>
        </div>
        <div className="a_intro">
          <div className="intro_detail">
            <span> Hello there! My name is Rahul. I am a Reactjs developer, and I’m very passionate and dedicated to my work.
              With 1 years experience as a personal Reactjs development, I have acquired the skills and knowledge necessary to make your project a success.
            </span>
          </div>
          <div className="a_detail">
            <div className='flex_detail' style={{color:"var(--bg)"}}>
              <span> <b>   Name:  </b> </span>
              <span> <b>   Address  </b>: </span>
              <span> <b>   Study:   </b></span>
              <span> <b>   Degree:  </b> </span>
              <span> <b>   E-mail:  </b> </span>
              <span> <b>   Phone:   </b></span>
            </div>
            <div className='flex_detail' style={{color:"var(--primery)"}}>
              <span> Rahul kumar (coinboy) </span>
              <span> Bareilly, India </span>
              <span> Mjpru </span>
              <span>  b.com </span>
              <span> **********@gmail.com </span>
              <span> +9190******** </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Projects />
    </div >
  )
}

export default About