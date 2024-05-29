import React from 'react'


const About = () => {
  return (
    <div className='about'>
      <div className="left-container">
        <p className='about-left-header'>About this project</p>
        <p>CAST is a simple weather app created using the
OpenWeatherMap API It allows users to enter a city and country to access its current weather data and hourly forecast.
</p>
        <p>This project was created so that I can learn more about
APIs. I really enjoyed working on it and I hope you like
it as well.
</p>

      <p className='about-left-header'>Tools used to create this project</p>
      <div className="tools-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
      <div className="right-container">
        <p>whoami</p>
        <div className="about-personal">
          <h1>Claudia Arias</h1>
          <div className="about-personal-info">
            <p>Developer |</p>
            <p>Designer |</p>
            <p>Artist</p>
          </div>
        </div>
        <div className="about-image">
          <img src="" alt=""/>
        </div>
        <hr />
        <div className="about-desc">
        <p>Hello World!</p>
Nice to meet you. I’m Claudia, a web developer based in New York City. I have a Master of Science degree at Mercy College (‘24). I graduated with a Bachelor’ of Art degree in Studio Art. Combining two of my passions - <b>coding</b> and <b>art</b> - I aim to create visually stunning, accessible and unique web applications. 
        </div>
        <p className='about-right-header'>Skills</p>
        <div>skills here</div>
        <p className='about-right-header'>Skills</p>
        <div>socials here</div>
      </div>
      <a href='/contact'>Contact</a>
    </div>
  )
}

export default About