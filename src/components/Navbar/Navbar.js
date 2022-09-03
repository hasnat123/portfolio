import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Logo from "./../../Assets/images/Logo.svg"
import CV from "./../../Assets/images/ProgrammingCV.pdf"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState(false);

    const HandleToggle = () => setToggle(!toggle);
    const HandleColor = () => window.scrollY >= 90 ? setColor(true) : setColor(false);

    window.addEventListener('scroll', HandleColor);

    /*Classnames*/
    let cs1 = toggle ? 'open' : '';

  return (
    <nav className={ color ? `navbar navbar-bg ${cs1}` : `navbar ${cs1}`} >
        <a href="#"><img src={Logo}  className='logo' alt="Logo" /></a>

        <div className="nav-toggle">
            {toggle ? <FontAwesomeIcon onClick={HandleToggle} icon={faTimes} /> : <FontAwesomeIcon onClick={HandleToggle} icon={faBars} />}
            
        </div>

        <div className={toggle ? "nav-list open" : "nav-list"}>
          <ul>
              <li><a href='#id-portfolio-page'>Projects</a></li>
              {/* <li>Experience</li> */}
              <li><a href='#id-about-page'>About</a></li>
              <li><a href='#id-contact-page'>Contact</a></li>
              <li><a href={CV} target="_blank" rel="noopener noreferrer">My C.V.</a></li>
          </ul>
        </div>


    </nav>
  )
}

export default Navbar