import './styles.scss';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { BsSendFill } from "react-icons/bs";

const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState("");
  const [isError, setIsError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3w3e56f', 'template_l5rtd81', form.current, 'D_JgUWxgbAYHBBUFR')
      .then((result) => {
        console.log(result.text);
        return setIsSuccess("Your message has been sent successfully, I will get back to you as soon as possible !")
      }, (error) => {
        console.log(error.text);
        return setIsError("An error has occurred, please try again or contact me through my social networks or at the following email address : gael.amand@gmail.com.")
      });
  }

  return (
    <section id='contact' className='form'>
      <h2 className='form-title'><span className='numbers-span'>06.</span>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Name</label>
          <input placeholder='Firstname + Lastname' required type="text" name="from_name" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Email</label>
          <input placeholder='youremail@gmail.com' required type="email" name="from_email" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Phone</label>
          <input placeholder='00 00 00 00 00' required type="phone" name="from_phone" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Message</label>
          <textarea placeholder="Do not hesitate to explain in detail the reason for your visit to my website 😊" required name="message" />
        </div>
        <button className='form-button' type="submit">Send <BsSendFill /></button>
        <div className='error-message'>{isSuccess}</div>
        <div className='error-message'>{isError}</div>
      </form>
    </section>
  )
}

export default ContactForm