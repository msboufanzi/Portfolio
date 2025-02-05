import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    // Add additional template parameters
    const templateParams = {
      to_name: 'Mohamed Said Boufanzi', // Your name or recipient's name
      from_name: e.target.user_name.value, // From the form input
      message: e.target.message.value, // From the form input
      reply_to: e.target.user_email.value, // Optional: For reply-to email
    };

    emailjs
      .sendForm(
        'service_8n74gqt',       // Your NEW EmailJS Service ID
        'template_y9t41ll',      // Your EmailJS Template ID
        formRef.current,
        'lsl6VD_5dNrdvy4Zd',     // Your EmailJS Public Key
        templateParams           // Pass the template parameters
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mohameds.boufanzi@gmail.com</h5> {/* Your email */}
            <a href="mailto:mohameds.boufanzi@gmail.com">Send a message</a> {/* Your email */}
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;