import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub} from '@fortawesome/fontawesome-free-brands'
import ReactPlayer from "react-player";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react'

import Project1Thumbnail from '../../../../Assets/images/Project1Thumbnail.jpg'
import Project2Thumbnail from '../../../../Assets/images/Project2Thumbnail.jpg'
import Project3Thumbnail from '../../../../Assets/images/Project3Thumbnail.jpg'
import Project4Thumbnail from '../../../../Assets/images/Project4Thumbnail.jpg'
import Project5Thumbnail from '../../../../Assets/images/Project5Thumbnail.jpg'
import Project6Thumbnail from '../../../../Assets/images/Project6Thumbnail.jpg'

import Project1 from '../../../../Assets/videos/Project1.mp4'
import Project2 from '../../../../Assets/videos/Project2.mp4'
import Project3 from '../../../../Assets/videos/Project3.mp4'
import Project4 from '../../../../Assets/videos/Project4.mp4'
import Project5 from '../../../../Assets/videos/Project5.mp4'
import Project6 from '../../../../Assets/videos/Project6.mp4'



const PortfolioPage = () => {

  const [enlarge, setEnlarge] = useState(false);
  const [largeImage, setLargeImage] = useState();
  const [videoFilePath, setVideoFilePath] = useState(null);

  const HandleEnlarge = (e) =>
  {
    setEnlarge(!enlarge);
    setVideoFilePath(e.currentTarget.getAttribute("data-image"));
    console.log(videoFilePath);
  }


  return (
    <div id="id-portfolio-page" className={enlarge ? 'section-container portfolio-page active' : 'section-container portfolio-page'}>
      <div className="section-header">
        <Fade bottom><h2 className='heading'>Things I've Built</h2></Fade>
        <Fade bottom delay={300}><p>A collection of applications I developed at home and at work using various programming languages and tools. All fully functional and mobile-responsive. Feel free to take a look!</p></Fade>
      </div>
        <div className="portfolio-grid">
          <Zoom delay={600}>
            <div className="grid-item"><img src={Project1Thumbnail} alt="Project1Thumbnail" />
              <p>Anime rating site</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project1} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/anime" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
          <Zoom delay={800}>
            <div className="grid-item"><img src={Project2Thumbnail} alt="Project2Thumbnail" />
              <p>Restaurant web page</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project2} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/Restaurant" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1000}>
            <div className="grid-item"><img src={Project3Thumbnail} alt="Project3Thumbnail" />
              <p>React file uploader</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project3} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/file-loader" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1200}>
            <div className="grid-item"><img src={Project4Thumbnail} alt="Project4Thumbnail" />
              <p>Weather app</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project4} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/weather" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1400}>
            <div className="grid-item"><img src={Project5Thumbnail} alt="Project5Thumbnail" />
              <p>Crypto info site</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project5} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/crypto-list" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1600}>
            <div className="grid-item"><img src={Project6Thumbnail} alt="Project6Thumbnail" />
              <p>Hangman game</p>
              <div className="overlay">
                <FontAwesomeIcon className='icon' icon={faYoutube} data-image={Project6} onClick={HandleEnlarge}/>
                <a href="https://github.com/hasnat123/hangman" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
              </div>
            </div>
          </Zoom>
        </div>

      
      <FontAwesomeIcon onClick={HandleEnlarge} icon={faTimes}/>
      <div className="grid-item-large">
        <ReactPlayer className='player' width="100%" height="100%" controls={true} muted={true} playing={true} url={videoFilePath}/>
      </div>
    </div>
  )
}

export default PortfolioPage