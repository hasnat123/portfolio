import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faReact, faSass, faNodeJs} from '@fortawesome/fontawesome-free-brands'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useEffect } from 'react';
import { useRef } from 'react';
import TagCloud from 'TagCloud';
import { useState } from 'react';
import { debounce } from 'lodash';

const AboutPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const tagCloudRef = useRef();

    const handleWindowResize = useMemo(
      () => debounce(() => {
        setWindowWidth(window.innerWidth);
      }, 100),
      []
    );

    const initializeTagCloud = () => {
        const container = tagCloudRef.current;
        const texts = [
          "HTML",
          "CSS",
          "REST",
          "SASS",
          "JavaScript",
          "React",
          "NPM",
          "Redux",
          "MongoDB",
          "TypeScript",
          "NodeJS",
          "JSON",
          "GITHUB",
          "Babel",
          "Jquery",
          "ExpressJS",
          "ES6",
          "GIT",
          "Jest",
          "NextJS"
        ];
        const options = {
          radius: (Math.max(window.innerWidth / 6, 100)),
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        };
        // Destroy the old instance if it exists
        if (container.hasChildNodes()) {
          container.removeChild(container.childNodes[0]);
        }
        // Create a new instance
        TagCloud(container, texts, options);
      };
      
      useEffect(() => {
        initializeTagCloud();
        return () => {
          // clean up
        };
      }, [windowWidth]);
      
      useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    

  return (
    <>
    <div id="id-about-page" className='section-container about-page'>
        <Fade left>
            <div className="section-text">
                <div className="section-header">
                    <h2 className='heading'>A Bit More About Myself...</h2>
                    <p>Having worked on numerous projects over the years, I have an extensive understanding of many commonly used programming languages and frameworks. I have proficiency in both frontend and backend technologies.</p>
                </div>
            </div>
        </Fade>
        {/* <Zoom delay={300}>
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
        </Zoom> */}
        <Zoom delay={300}>
            <div className="text-sphere">
              <span className="tagcloud" ref={tagCloudRef}></span>
            </div>
        </Zoom>
    </div>
</>
  )
}

export default AboutPage