import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3s7zicb', 'template_kcbroqg', form.current, 'bmBVsv_TTq5-WqmGe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sdsd@gmail.com</h5>
            <a href='mailto:sdsd@gmail.com' target="_blank">send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Anttt</h5>
            <a href='https://m.me/erneter.dfdfj' target="_blank">send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsUp</h4>
            <h5>+1233424</h5> 
            <a href="https://api.whatsup.com/send?phone+2332242424" target="_blank">Send a Message</a>
          {/* number and country code */}
          </article>
        </div>
        {/* END OF CONTACTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact