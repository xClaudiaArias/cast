import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-contact">
        <h1>CONTACT</h1>
        <h2>Send me a message</h2>

        <form action="">
          <div className="contact-inputs">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" id="firstname" />

            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <br/>
          <div className="text-area-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <br/>
          <button>Submit</button>
        </form>
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