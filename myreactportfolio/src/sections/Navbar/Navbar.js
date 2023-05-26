import React from 'react'
import Logo from '../../assets/unnamed.jpg'
import data from './data'
import "./Navbar.css"
import {IoIosColorPalette} from 'react-icons/io'
const Navbar = () => {
  return (
    <nav className='container nav__container'>
      <a href='index.html'className='nav__logo'>
        <img src={Logo}alt='Logo'></img>
      </a>
      <ul className='nav__menu'>
      {
        data.map(_item=><li key={_item.id}><a href={_item.link}>{_item.title}</a></li>)
      }
      </ul>
      <button id='theme__icon'><IoIosColorPalette/></button>
    </nav>
  )
}

export default Navbar
