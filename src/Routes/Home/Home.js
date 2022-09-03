import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'
import Avatar from '../../Assets/images/3DAvatarFinal.png'
import Logo from './../../Assets/images/Logo.svg'
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

              <ul class="box-area">
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
                  <h1 className='heading'><span>Hi, my name is </span><br/> <span className='name'>Mohammad Hasnat,</span> <br/> <span>I'm a web developer</span></h1>
                  <h3>A front-end web developer to be exact. I've worked on building several web-based applications and have years of experience</h3>
                </div>
                <img src={Avatar} alt="Avatar" />
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