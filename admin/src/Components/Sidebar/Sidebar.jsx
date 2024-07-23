import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p style={{ textDecoration: 'none' }}>Add Items</p>
        </NavLink>

        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}
import './Sidebar.css';
import { assets } from '../../assets/assets';

export default Sidebar
