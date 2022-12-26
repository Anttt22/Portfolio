import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFolderSettingsLine} from 'react-icons/ri'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
      <div className='about__me'>
      <div className="about__me-image">
        <img src={ME} alt='about image'></img>
      </div>
      </div>
     

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='avout__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FaUsers className='avout__icon'/>
            <h5>Clients</h5>
            <small>300+ worlwide</small>
          </article>

          <article className='about__card'>
            <RiFolderSettingsLine className='avout__icon'/>
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>
                  </div>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolores
                   inventore dicta vitae ad cumque magnam delectus, harum atque assumenda
                   repellendus facilis eius, voluptate quidem omnis totam et corporis modi?
                  </p> 
                  <a href='#contacts' className='btn btn-primary'>Lets Talk</a>

      </div>

    </div>


    </section>
  )
}

export default About