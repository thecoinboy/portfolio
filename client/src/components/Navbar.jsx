import React, { useState } from 'react'
import '../css/Navbar.css'
import {Link} from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">
                    <Link to='/'> Coinboy </Link>
                </div>
                <div className="list">
                    <span className='toggler' onClick={() => setToggle(!toggle)} > {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}  </span>
                    <ul className={toggle ? '' : "toggle"}>
                        <li> <Link to="/" > Home  </Link>  </li>
                        <li> <Link to="service" smooth={true} duration={1000}> Services  </Link>  </li>
                        <li> <Link to="about" smooth={true} duration={1000}> About  </Link>  </li>
                        <li> <Link to="project" smooth={true} duration={1000}> Projects</Link>  </li>
                        <li> <Link to="contact" smooth={true} duration={1000} > Contact   </Link>  </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


