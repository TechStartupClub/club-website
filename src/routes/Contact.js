import React from 'react';
import style from './style/contact.module.scss';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import uwLogo from '../assets/logos/Signature_Stacked_White.png';

const Contact = () => {
    const refForm = useRef()

    const sendEmail= (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ed0db6u', 'template_in0zoc9', refForm.current, 'HTL8crLZotnXzJw5h').then(
            () => {
                alert('Message Successfully Sent!')
                window.location.reload(false)
            },
            () => {
                alert("Failed to Send Message")
            }
        )
    }

    return (
        <>
            <NavBar />
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Us For More Info!
                    </h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}> 
                            <ul>
                                <li className='half'> 
                                    <input type='text' name='name' placeholder='Name' required></input>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required></input>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required></input>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div> 
                <div className="about-img">
                    <img className="UW-logo"src={uwLogo} alt="UW Logo Words" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact