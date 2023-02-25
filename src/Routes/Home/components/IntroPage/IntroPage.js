import React from 'react'
import VR from './../../../../Assets/images/VR.png'
import three from './../../../../Assets/images/3.png'

const IntroPage = () => {
    return (
        <div id="id-intro-page" className='section-container intro-page'>
            <img src={three} alt="" />
            <div className="section-text">
                <div className="section-header">
                    <h2 className='heading'>About Me</h2>
                    <p>My journey in web development began many years ago when I created my first HTML website, and since then, I've immersed myself in this ever-evolving field to become an experienced professional. Feel free to browse through my portfolio to see some examples of my skills and expertise.</p>
                </div>
            </div>
        </div>
      )
}

export default IntroPage