import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Navbar from '../../components/Navbar/Navbar'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'
import Avatar from '../../Assets/images/3DAvatarFinal.png'
import Avatar1 from '../../Assets/images/1.png'
import Avatar2 from '../../Assets/images/2.png'
import Logo from './../../Assets/images/Logo.svg'
import Name from './../../Assets/images/Name.svg'
import Intro from './../../Assets/images/Intro.svg'
import IntroPage from './components/IntroPage/IntroPage';


const Home = () => {

  const [offsetY, setOffsetY] = useState(0);

  const HandleScroll = () => setOffsetY(-window.pageYOffset * 2);

  useEffect(() =>
  {
    window.addEventListener('scroll', HandleScroll);

    return () => window.removeEventListener('scroll', HandleScroll);
  }, [])

  return (
    <div className='home-page'>
        <div className="hero">
            <Navbar/>

              <ul className="box-area">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
            
            <div className="profile">
              <div className="profile-main" style={{transform: `translateY(${offsetY * 0.15}px)`}}>
                <div className="profile-text">
                  <h1 className='heading'><Fade bottom delay={1500} duration={1600}><span id='intro'>Hi, my name is</span> </Fade><Flip bottom delay={1600} duration={1600}><span className='name'>Mohammad Hasnat.</span></Flip> <br/> <Fade bottom delay={1700} duration={1600}><span className='sub-heading'>I'm a web developer.</span></Fade></h1>
                  <Fade delay={1800} duration={1600}><h3 className='description'>Web wizardry honed through years of experience. I've conjured up countless captivating web applications!</h3></Fade>
                </div>
                <Zoom delay={500} duration={800}><img className='avatar' src={Avatar1} alt="Avatar" /></Zoom>
              </div>
            </div>

        </div>
        <IntroPage/>
        <PortfolioPage/>
        <AboutPage/>
        <ContactPage/>
    </div>
  )
}

export default Home