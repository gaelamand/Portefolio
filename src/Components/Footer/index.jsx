import './styles.scss';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { BsSendFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { LINKEDIN_URL } from '../../data/links';

const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState("");
  const [isError, setIsError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3w3e56f', 'template_l5rtd81', form.current, 'D_JgUWxgbAYHBBUFR')
      .then(() => {
        return setIsSuccess("Votre message a bien été envoyé, je vous réponds au plus vite !")
      }, () => {
        return setIsError("Une erreur est survenue. Réessayez, ou contactez-moi directement à gael.amand@gmail.com.")
      });
  }

  return (
    <section id='contact' className='form'>
      <h2 className='form-title'><span className='numbers-span'>05.</span>Contact</h2>

      <ul className='contact-direct'>
        <li className='contact-direct__item'>
          <MdEmail className='contact-direct__icon' />
          <a href="mailto:gael.amand@gmail.com">gael.amand@gmail.com</a>
        </li>
        <li className='contact-direct__item'>
          <MdPhone className='contact-direct__icon' />
          <a href="tel:+33625690212">06 25 69 02 12</a>
        </li>
        <li className='contact-direct__item'>
          <AiFillLinkedin className='contact-direct__icon' />
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li className='contact-direct__item'>
          <MdLocationOn className='contact-direct__icon' />
          <span>Rennes (35)</span>
        </li>
      </ul>

      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Nom</label>
          <input placeholder='Prénom + Nom' required type="text" name="from_name" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Email</label>
          <input placeholder='votreemail@gmail.com' required type="email" name="from_email" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Téléphone</label>
          <input placeholder='00 00 00 00 00' required type="phone" name="from_phone" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Message</label>
          <textarea placeholder="N'hésitez pas à me dire ce qui vous amène 😊" required name="message" />
        </div>
        <button className='form-button' type="submit">Envoyer <BsSendFill /></button>
        <div className='error-message'>{isSuccess}</div>
        <div className='error-message'>{isError}</div>
      </form>
    </section>
  )
}

export default ContactForm
