import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js';


const Navbar = () => (
  <div>
    <div className='navbar'>
    
    <img className='logo' src={assets.logo} alt="" />
    <img className='profile-image' src={assets.profile_image} alt="" />
  </div>
  <hr />
  </div>
)
import './Navbar.css'

export default Navbar
