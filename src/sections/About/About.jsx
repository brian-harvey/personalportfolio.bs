import React from 'react'
import './About.css'
import Card from '../../compenents/Card.jsx'
import AboutImage from '../../assests/About.jpg'
import {FiDownloadCloud} from 'react-icons/fi'
import CV from '../../assests/CV.pdf'
import data from './data'
const About = () => {
  return (
    <section id="About">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About - Software Engineer" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__card">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }

          </div>
          <p>
            Building projects that my clients love has always been my passion. 
            With over 3 years of experience in the web development industry and
             having served more than 70 happy clients worldwide, I'm constantly 
             motivated to do more!
          </p>
          <p>
            Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web 
            developer with a Bachelor's degree in Computer Science. My top priority
            is to help your business establish a strong online presence, providing
            you with industry-standard design and all the necessary functionality
            for smooth online operations. Get in touch today with the details of
            your project and let's get started! Feel free to check out my resume
            below!
          </p>
          <a href={CV} download className='btn primary'>Download CV<FiDownloadCloud/></a>
        </div>
      </div>
    </section>
  )
}

export default About