import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const form = useRef();

    const [sent, setSent] = useState(false);

    const HandleSendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_2043rcj', 'template_d8gc9bq', form.current, 'cg08ttnNgv3qrwoIK')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            setSent(true);
            setTimeout(()=> setSent(false), 5000);

        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div id="id-contact-page" className='section-container contact-page'>
        <div className="section-header">
            <h2 className='heading'>Contact Me</h2>
            <p>I am currently looking for job oppertunites. My inbox is always open so feel free to drop me a message.</p>
        </div>
        <div className="contact-page-inner">
            <div className="contact-details">
                <h3>My Details</h3>
                <div className="row"><span><FontAwesomeIcon icon={faEnvelope} className='icon'/></span><span>Email:</span>hasnat_45@hotmail.co.uk</div>
                <div className="row"><span><FontAwesomeIcon icon={faMobileScreenButton} className='icon'/></span><span>Phone:</span>07428338402</div>
                <div className="row"><span><FontAwesomeIcon icon={faLocationDot} className='icon'/></span><span>Location:</span>London, United Kingdom</div>

            </div>
            <form ref={form} className="contact-form" action="sumbit" onSubmit={HandleSendEmail}>
                <div className="first-line">
                    <input type="text" name='from_name' placeholder='Name' required="true"/>
                    <input type="email"  name='user_email' placeholder='Email' required="true"/>
                </div>
                <input type="text"  name='subject' placeholder='Subject'/>
                <textarea type="text"  name='message' placeholder='Message' required="true"/>

                <button type="submit">Send</button>
            </form>
        </div>


        {sent ?
        <div className="notification">
            <p>Message sent</p>
        </div> : null}
    </div>
  )
}

export default ContactPage