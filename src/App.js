import React, { useRef } from 'react';
import './App.css'; // Import CSS file for styling
import emailjs from '@emailjs/browser';

const App = () => { // Remove the export statement here
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4y37uik', 'template_x1z7rfv', form.current, {
        publicKey: '85V6R-3l__jMg6e4z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for showing your interest!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h1>Make a wish !</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <p>Thanks for showing your interest.</p>
      <p>Santhi Jewellers</p>
    </div>
  );
};

export default App; // Export the component here

