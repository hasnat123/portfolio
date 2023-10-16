import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub} from '@fortawesome/fontawesome-free-brands'

const Project = ({ delay, title, thumbnail, video, github, HandleEnlarge }) => {
  
  const [isLinkClickable, setLinkClickable] = useState(false);

  const handleMouseEnter = () => {
    // Add a delay (e.g., 500 milliseconds) before making the link clickable
    setTimeout(() => {
      setLinkClickable(true);
    }, 10);
  };

  const handleMouseLeave = () => {
    // Reset link clickability when mouse leaves the container
    setLinkClickable(false);
  };
  
  return (
    <Zoom delay={delay}>
        <div className="grid-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={thumbnail} alt={`${thumbnail}`} />
          <div className="overlay">
            <h1>{title}</h1>
            <div className="details">
              <FontAwesomeIcon className='icon' icon={faYoutube} data-image={video} onClick={HandleEnlarge} style={{ pointerEvents: isLinkClickable ? 'all' : 'none' }}/>
              <a href={github} target="_blank" rel="noopener noreferrer" style={{ pointerEvents: isLinkClickable ? 'all' : 'none' }}><FontAwesomeIcon className='icon' icon={faGithub}/></a>
            </div>
          </div>
        </div>
    </Zoom>
  )
}

export default Project