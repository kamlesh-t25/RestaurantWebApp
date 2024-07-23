import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <h2>Order your favourite food here</h2>
        <p>Embark on a Gastronomic Adventure with Our Exquisite Menu Selections. From Classic Favorites to Inspired Creations, Each Dish Tells a Story of Flavors and Passions. Join Us and Let Your Taste Buds Journey Through a World of Culinary Bliss, Where Every Bite Leaves a Lasting Impression of Pure Satisfaction and Delight</p>
        <button className='viewMenu'  ><li><a href="#menu-container" >View Menu</a></li></button>
      </div>
    </div>
  )
}

export default Header
