import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub} from '@fortawesome/fontawesome-free-brands'

const Project = ({ delay, title, thumbnail, video, github, HandleEnlarge }) => {
  return (
    <Zoom delay={delay}>
        <div className="grid-item"><img src={thumbnail} alt={`${thumbnail}`} />
          <p>{title}</p>
          <div className="overlay">
            <FontAwesomeIcon className='icon' icon={faYoutube} data-image={video} onClick={HandleEnlarge}/>
            <a href={github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
          </div>
        </div>
    </Zoom>
  )
}

export default Project