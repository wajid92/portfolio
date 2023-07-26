import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact =()=>{

    const form = useRef();

    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_6mslv64','template_s68c2nd',form.current,'r9KFHRmStPDlc3BxH');
        e.target.reset()
    };
    return(
        <>
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option_icon'/>
                        <h4>Email</h4>
                        <h5>wajidmohdali786@gmail.com</h5>
                        <a href='mailto:wajidmohdali786@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <BsInstagram className='contact_option_icon'/>
                        <h4>Instagram</h4>
                        <h5>mohammad_wajid_ali</h5>
                        <a href='https://ig.me/m/mohammad_wajid_ali' target='_blank'>Instagram Chat</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option_icon'/>
                        <h4>Whatsapp</h4>
                        <h5>Wajid Ali</h5>
                        <a href='https://api.whatsapp.com/send?phone=+917007086010' target='_blank'>Whatsapp message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your full name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Enter your message here' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Contact;