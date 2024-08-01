import { Facebook, Instagram, KeyboardArrowRight, LinkedIn, Twitter, Web } from '@mui/icons-material'
import React from 'react'
import HTML from '../Assets/images/HTML.jpg'
import CSS from '../Assets/images/CSS.jpg'
import MU from '../Assets/images/MU.jpg'
import NODEJS from '../Assets/images/NODEJS.jpg'
import OPWE from '../Assets/images/OPWE.jpg'
import REACT from '../Assets/images/REACT.jpg'
import cl from '../Assets/images/cl.jpg'
import cc from '../Assets/images/cc.jpg'
import pyth from '../Assets/images/pyth.jpg'
import figg from '../Assets/images/figg.jpg'
import ruby from '../Assets/images/ruby.jpg'
import sqls from '../Assets/images/sqls.jpg'
import mongologo from '../Assets/images/mongologo.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="left-container">
        <p className='about-left-header'>About this project</p>
        <p className='about-p'><b>CAST</b> is a simple weather app created using the  
<span><a href='http://www.openweathermap.org'> OpenWeatherMap</a></span> API It allows users to enter a city and country to access its current weather data and hourly forecast.
</p>
        <p className='about-p'>This project was created so that I can learn more about
APIs. I really enjoyed working on it and I hope you like
it as well.
</p>

      <p className='about-left-header'>Tools used to create this project</p>
      <div className="about-tools-container">
        <img src={HTML} alt="HTML" />
        <img src={CSS} alt="css" />
        <img src={REACT} alt="react" />
        <img src={NODEJS} alt="node js" />
        <img src={MU} alt="material ui" />
        <img src={OPWE} alt="open weather" />
      </div>
      </div>
      <div className="right-container">
        <p className='whoami'> <KeyboardArrowRight /> whoami</p>
        <div className="about-personal">
          <div className="about-personal-info">
            <h1>Claudia Arias</h1>
            <div>
              <p>Developer |</p>
              <p>Designer |</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="about-image">
            <img src={cl} alt="claudia"/>
          </div>
        </div>
        <hr />
        <div className="about-desc">
        <p>Hello World!</p>
Nice to meet you. I’m Claudia, a web developer based in New York City. I graduated with a Bachelor’ of Art degree in Studio Art at Lehman College ('18) and a Master of Science degree at Mercy College ('24). Combining two of my passions - <b>coding</b> and <b>art</b> - I aim to create visually stunning, accessible and unique web applications. 
        </div>
        <p className='about-right-header'><b>Skills</b></p>
        <div className='about-skills'>
          <img src={pyth} alt="pyth" />
          <img src={NODEJS} alt="NODEJS" />
          <img src={HTML} alt="html" />
          <img src={CSS} alt="CSS" />
          <img src={REACT} alt="REACT" />
          <img src={cc} alt="cc" />
          <img src={figg} alt="figg" />
          <img src={sqls} alt="sqls" />
          <img src={mongologo} alt="mongologo" />
          <img src={ruby} alt="ruby" />
        </div>
        <p className='about-right-header'><b>Follow me on my journey</b></p>
        <div className='about-socials'>
          <div>
            <a className='about-socials-btns' href='/contact'> <KeyboardArrowRight />Contact</a>
            <a className='about-socials-btns' href='/'> <Web />  Portfolio</a>
          </div>
          <div>
            <a href="/"><Facebook style={{color: '#464646', paddingRight: 10}}/></a>
            <a href="/"><Instagram style={{color: '#464646', paddingRight: 10}}/></a>
            <a href="/"><Twitter style={{color: '#464646', paddingRight: 10}}/></a>
            <a href="/"><LinkedIn style={{color: '#464646', paddingRight: 10}}/></a>      
          </div>
        </div>

      </div>
    </div>
  )
}

export default About