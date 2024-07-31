import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage('Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact">
      <div className="left-contact">
        <h1>CONTACT</h1>
        <h2>Send me a message</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="contact-inputs">
            <label htmlFor="fullname">Full name </label>
            <input type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <br/>
          <div className="text-area-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} required ></textarea>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>

      <div className="right-contact">
        <div className="contact-socials">
          <div><Facebook style={{fontSize: 38, color: '#1e1e1e', cursor: 'pointer'}} /></div>
          <div><LinkedIn style={{fontSize: 38, color: '#1e1e1e', cursor: 'pointer'}} /></div>
          <div><Twitter style={{fontSize: 38, color: '#1e1e1e', cursor: 'pointer'}} /></div>
          <div><Instagram style={{fontSize: 38, color: '#1e1e1e', cursor: 'pointer'}} /></div>
        </div>
      </div>
    </div>
  )
}

export default Contact