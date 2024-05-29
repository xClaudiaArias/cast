import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="left-contact">
        <h1>CONTACT</h1>
        <h2>Send me a message</h2>

        <form action="">
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" id="firstname" />

          <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname" id="lastname" />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>

          <button>Submit</button>
        </form>
      </div>

      <div className="right-contact">
        <div className="socials">
          socials here
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Contact