import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player";
import Fade from 'react-reveal/Fade';
import React, { useState } from 'react'
import Project from '../../../../components/Navbar/Project';


import Project1Thumbnail from '../../../../Assets/images/Project1Thumbnail.jpg'
import Project2Thumbnail from '../../../../Assets/images/Project2Thumbnail.jpg'
import Project3Thumbnail from '../../../../Assets/images/Project3Thumbnail.jpg'
import Project4Thumbnail from '../../../../Assets/images/Project4Thumbnail.jpg'
import Project5Thumbnail from '../../../../Assets/images/Project5Thumbnail.jpg'
import Project6Thumbnail from '../../../../Assets/images/Project6Thumbnail.jpg'
import Project7Thumbnail from '../../../../Assets/images/Project7Thumbnail.jpg'
import Project8Thumbnail from '../../../../Assets/images/Project8Thumbnail.jpg'
import Project9Thumbnail from '../../../../Assets/images/Project9Thumbnail.jpg'
import Project10Thumbnail from '../../../../Assets/images/Project10Thumbnail.jpg'
import Project11Thumbnail from '../../../../Assets/images/Project11Thumbnail.jpg'
import Project12Thumbnail from '../../../../Assets/images/Project12Thumbnail.jpg'

import Project1 from '../../../../Assets/videos/Project1.mp4'
import Project2 from '../../../../Assets/videos/Project2.mp4'
import Project3 from '../../../../Assets/videos/Project3.mp4'
import Project4 from '../../../../Assets/videos/Project4.mp4'
import Project5 from '../../../../Assets/videos/Project5.mp4'
import Project6 from '../../../../Assets/videos/Project6.mp4'
import Project7 from '../../../../Assets/videos/Project7.mp4'
import Project8 from '../../../../Assets/videos/Project8.mp4'
import Project9 from '../../../../Assets/videos/Project9.mp4'
import Project10 from '../../../../Assets/videos/Project10.mp4'
import Project11 from '../../../../Assets/videos/Project11.mp4'
import Project12 from '../../../../Assets/videos/Project12.mp4'



const PortfolioPage = () => {

  const [enlarge, setEnlarge] = useState(false);
  const [videoFilePath, setVideoFilePath] = useState(null);

  const HandleEnlarge = (e) =>
  {
    setEnlarge(!enlarge);
    setVideoFilePath(e.currentTarget.getAttribute("data-image"));
    console.log(videoFilePath);
  }


  return (
    <div id="id-portfolio-page" className={enlarge ? 'section-container portfolio-page active' : 'section-container portfolio-page'}>
      <div className="section-text">
        <div className="section-header">
          <Fade bottom><h2 className='heading'>Things I've Built</h2></Fade>
          <Fade bottom delay={300}><p>A collection of recent applications I developed at home and work using various programming languages and tools. All are fully functional and mobile-responsive.</p></Fade>
        </div>
      </div>
        <div className="portfolio-grid">
          <Project delay={600} title='Mobile Job Search App' thumbnail={Project12Thumbnail} video={Project12} github='https://github.com/hasnat123/Mobile-Job-App' HandleEnlarge={HandleEnlarge}/>
          <Project delay={800} title='AI Image Generator App' thumbnail={Project11Thumbnail} video={Project11} github='https://github.com/hasnat123/AI-Image-Generator' HandleEnlarge={HandleEnlarge}/>
          <Project delay={1000} title='Mobile App Showcase' thumbnail={Project9Thumbnail} video={Project9} github='https://github.com/hasnat123/NFT-App-Showcase' HandleEnlarge={HandleEnlarge}/>
          <Project delay={1200} title='NFT Marketplace App' thumbnail={Project10Thumbnail} video={Project10} github='https://github.com/hasnat123/NFT-App' HandleEnlarge={HandleEnlarge}/>
          <Project delay={1400} title='E-commerce Website' thumbnail={Project7Thumbnail} video={Project7} github='https://github.com/hasnat123/e-commerce' HandleEnlarge={HandleEnlarge}/>
          <Project delay={1600} title='Restaurant Web Page' thumbnail={Project2Thumbnail} video={Project2} github='https://github.com/hasnat123/Restaurant' HandleEnlarge={HandleEnlarge}/>
          <Project delay={1800} title='Recipe App Showcase' thumbnail={Project8Thumbnail} video={Project8} github='https://github.com/hasnat123/Recipe-App-Website' HandleEnlarge={HandleEnlarge}/>
          <Project delay={2000} title='Anime Rating Site' thumbnail={Project1Thumbnail} video={Project1} github='https://github.com/hasnat123/anime' HandleEnlarge={HandleEnlarge}/>
          <Project delay={2200} title='Web Weather App' thumbnail={Project4Thumbnail} video={Project4} github='https://github.com/hasnat123/weather' HandleEnlarge={HandleEnlarge}/>
          {/* <Project delay={2400} title='Hangman Game' thumbnail={Project6Thumbnail} video={Project6} github='https://github.com/hasnat123/hangman' HandleEnlarge={HandleEnlarge}/> */}
        </div>

      
      <FontAwesomeIcon onClick={HandleEnlarge} icon={faTimes}/>
      <div className="grid-item-large">
        <ReactPlayer className='player' width="100%" height="100%" controls={true} muted={true} playing={true} url={videoFilePath}/>
      </div>
    </div>
  )
}

export default PortfolioPage