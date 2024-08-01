import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // Add custom breakpoints
      tablet: 768,
      laptop: 1024,
    },
  },
});

const IconWrapper = styled('div')(({ theme }) => ({
  fontSize: 64,
  color: '#1e1e1e',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: 35,
  },
  [theme.breakpoints.down('laptop')]: {
    fontSize: 32,
  },
}));

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
    <ThemeProvider theme={theme}>
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
            <br />
            <div className="text-area-container">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>

        <div className="right-contact">
          <div className="contact-socials">
            <IconWrapper><Facebook /></IconWrapper>
            <IconWrapper><LinkedIn /></IconWrapper>
            <IconWrapper><Twitter /></IconWrapper>
            <IconWrapper><Instagram /></IconWrapper>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
