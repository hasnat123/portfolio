import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import Logo from "./../../Assets/images/Logo.svg"
import CV from "./../../Assets/images/ProgrammingCV.pdf"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState(false);

    const HandleToggle = () =>
    {
      setToggle(!toggle);
    }

    const HandleScroll = (e) =>
    { 
      let element = document.querySelector(e.currentTarget.getAttribute("data-scroll"));
      let pos = element.style.position;
      let top = element.style.top;
      element.style.position = 'relative';
      window.innerWidth <= 1023 ? element.style.top = '-70px' : element.style.top = '-20px';
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
      element.style.top = top;
      element.style.position = pos;
    }

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
            <Fade top delay={1000} duration={600}>
              <li><a onClick={(e)=>{setToggle(false); HandleScroll(e);}} data-scroll={"#id-intro-page"}>About</a></li>
            </Fade>
              {/* <li>Experience</li> */}
            <Fade top delay={1100} duration={600}>
              <li><a onClick={(e)=>{setToggle(false); HandleScroll(e);}} data-scroll={"#id-portfolio-page"}>Projects</a></li>
            </Fade>
            <Fade top delay={1200} duration={600}>
              <li><a onClick={(e)=>{setToggle(false); HandleScroll(e);}} data-scroll={"#id-about-page"}>Experience</a></li>
            </Fade>
            <Fade top delay={1300} duration={600}>
              <li><a onClick={(e)=>{setToggle(false); HandleScroll(e);}} data-scroll={"#id-contact-page"}>Contact</a></li>
            </Fade>
            <Fade top delay={1400} duration={600}>
              <li><a onClick={()=>setToggle(false)} href={CV} target="_blank" rel="noopener noreferrer">My C.V.</a></li>
            </Fade>
          </ul>
        </div>


    </nav>
  )
}

export default Navbar