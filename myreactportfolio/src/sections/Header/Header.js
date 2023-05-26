import React from 'react'
import "./Header.css"
import data from './data'
import HeaderImage from '../../assets/istockphoto-1151140471-612x612.jpg'
const Header = () => {
  return (
   <header id='header'>
  < div className='container header__container'>
    <div className='header__profile'>
      <img src={HeaderImage}alt='Header Portait'></img>
    </div>
    <h3>Muhammad Muzammil</h3>
    <p>Your are a click away from building you  dream website or web app.
      Send me the details of your project fro a modern,mobile<br/>responsive,highly performance website today!
    </p>
  <div className='header_cta'>
    <a href='#contact'>Let's Talk</a>
    <a href='#portfolio'>My Work</a>
  </div>
  <div className='header__socials'>
    {
    data.map(items=><a key={items.id} href={items.link} target='_blank' rel='noopener noreferrer'>{items.icon}</a>)
    }
  </div>
  </div>
   </header>
  )
}

export default Header
