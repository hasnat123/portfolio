import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faSass, faNodeJs} from '@fortawesome/fontawesome-free-brands'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutPage = () => {
  return (
    <div id="id-about-page" className='section-container about-page'>
        <Fade left>
            <div className="section-text">
                <div className="section-header">
                    <h2 className='heading'>A bit more about myself...</h2>
                    <p>I possess extensive knowledge of a variety of widely used programming languages and frameworks, and have worked on a number of projects of different scales. I was most recently employed at a language teaching company where I collaborated with talented individuals and helped in developing the main user web application. I have a deep passion for creating professional, high-quality websites and have the drive to continually advance my programming skills.</p>
                </div>
            </div>
        </Fade>
        <Zoom delay={300}>
            <div className="cube-container">
                <div className="cube">
                    <div className="face1">
                        <h3>HTML</h3>
                        <FontAwesomeIcon className='icon' icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face2">
                        <h3>CSS</h3>
                        <FontAwesomeIcon className='icon' icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face3">
                        <h3>JavaScript</h3>
                        <FontAwesomeIcon className='icon' icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face4">
                        <h3>React</h3>
                        <FontAwesomeIcon className='icon' icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <h3>Sass</h3>
                        <FontAwesomeIcon className='icon' icon={faSass} color="#CD669A"/>
                    </div>
                    <div className="face6">
                        <h3>NodeJS</h3>
                        <FontAwesomeIcon className='icon' icon={faNodeJs} color="#539E43"/>
                    </div>
                </div>
            </div>
        </Zoom>
    </div>
  )
}

export default AboutPage