import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss'

export default function contact() {

  function sendEmail(e, props) {
    e.preventDefault();
    
    
    emailjs.sendForm('service_mxjx3iz', 'template_wiw8kem', e.target, 'user_rWCesWhsBB4eCL8VQAOuJ')
    .then((result) => {
        alert("Thank you for the email!")
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

  return (
    <form className="contact" onSubmit={sendEmail}>
      <label className="contact__label">NAME</label>
      <input className="contact__form" type="text" name="name" />
      <label className="contact__label">EMAIL</label>
      <input className="contact__form" type="email" name="email" />
      <label className="contact__label">PHONE</label>
      <input className="contact__form" type="phone" name="phone" />
      <label className="contact__label">MESSAGE</label>
      <textarea className="contact__form-message" name="message" />
      <input className="contact__button" type="submit" value="Send" />
    </form>
  );
}