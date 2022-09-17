import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Navbar from '../../components/Navbar/Navbar'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'
import Avatar from '../../Assets/images/3DAvatarFinal.png'
import Logo from './../../Assets/images/Logo.svg'
import Name from './../../Assets/images/Name.svg'
import Intro from './../../Assets/images/Intro.svg'


const Home = () => {

  const [offsetY, setOffsetY] = useState(0);

  const HandleScroll = () => setOffsetY(window.pageYOffset);

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
                  <h1 className='heading'><Fade bottom delay={2000}><span>Hi, my name is</span> </Fade><Flip bottom delay={3000}><span className='name'>Mohammad Hasnat,</span></Flip> <br/> <Fade bottom delay={4000}><span>I'm a web developer</span></Fade></h1>
                  <Fade bottom delay={6000}><h3>A front-end web developer to be exact. I've worked on building several web-based applications and have years of experience</h3></Fade>
                </div>
                <Fade delay={1000} duration={1000}><img className='avatar' src={Avatar} alt="Avatar" /></Fade>
              </div>
            </div>

        </div>
        <PortfolioPage/>
        <AboutPage/>
        <ContactPage/>
    </div>
  )
}

export default Home