import React from 'react'

const app_name = process.env.REACT_APP_NAME


const About = () => {
  return (
    <div>
      Hi {app_name}
    </div>
  )
}

export default About