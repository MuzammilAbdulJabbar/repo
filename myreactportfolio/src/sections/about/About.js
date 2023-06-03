import React from 'react'
import './About.css'
import CV from '../../assets/CV-Muzammil.pdf'
import AboutImage from '../../assets/istockphoto-1151140471-612x612.jpg' 
import {HiDownload} from 'react-icons/hi'
const About = () => {
  return (
    <section id='about'>
      <div className='container about_container'>
      <h2 className='about_heading'>About Me</h2>
      <div className='image_left'>
        <img src={AboutImage}></img>
      </div>
      <p className='para'>I'm a frontend enthusiast with a passion for crafting captivating digital experiences.With a skill set that includes HTML, CSS, Bootstrap, JavaScript, and ReactJS,
        I possess the tools to transform ideas into beautiful and functional websites. 
        I thrive on the thrill of creating seamless user interfaces and bringing designs to life with pixel-perfect precision. 
        By combining my technical expertise with an eye for aesthetics, I strive to create websites that not only look 
        stunning but also provide an intuitive and engaging user journey.<br/>With an ever-curious mind, I'm constantly exploring 
        new trends and techniques to keep pushing the boundaries of what's possible in the digital world. 
        If you're looking for someone who can turn your visions into reality, I'm here to make that happen!</p>
      </div>
      <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
    </section>
  )
}

export default About
