import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa'
import Yourpic from '../image/developer.jpg'
import ReactTypingEffect from 'react-typing-effect';
import '../css/Header.css'
import resume from '../resume.pdf'

const Header = () => {

  return (
      <header className='header'>
        <div className="hero">
          <div className="l_hero">
            <div className="social">
              <div className="icon">
                <a  href="https://www.github.com/thecoinboy" target="_blank">
                  <FaGithub className='icons' />
                </a>
                <a href="https://www.linkedin.com/in/coinboy" target="_blank">
                  <FaLinkedinIn className='icons' />
                </a>
                <a href="https://twitter.com/thecoinboys" target="_blank">
                  <FaTwitter className='icons' />
                </a>
                <a href="https://www.facebook.com/thecoinboy/" target="_blank">
                  <FaFacebookF className='icons' />
                </a>
              </div>
              <div className="her_span">
                <h2>
                  Hello. I am <b>  @coinboy  </b>
                </h2>
              </div>
            </div>
            <h1>
              <ReactTypingEffect
                text={["Reactjs owesome projects", "Api's development", "Mern project development"]}
                eraseSpeed="100"
                speed="100"
                typingDelay="800"
                eraseDelay="800"
              />
            </h1>
            <p> We make owesome Reactjs project, api development, ui development, eccomerce project, Website development , landing pages etc </p>
              <button  className='button btn_hero'> <a href={resume} download > Get resume  </a> </button>
          </div>
          <div className="r_hero">
            <img src={Yourpic} alt="@thecoinboy" />
          </div>
        </div>
      </header>
  )
}
export default Header;