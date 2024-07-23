import React, { useContext, useState } from 'react'
import './Navbar.css';
import {Link, useNavigate} from 'react-router-dom'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setLoginPopup}) => {
  const [activeState,setActiveState]=useState("home");

  const {getTotalCost,token,setToken}=useContext(StoreContext);
  // const [loginPopup,setLoginPopup]=useState(false);

  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar' id='home'>
      <li><a href="/"><img src={assets.logo} alt="" className='logo' /></a></li>
        <ul className='navbar-menu'>
        <li>
        <a to="/" href="#home" onClick={() => scrollToSection("home")} className={activeState === "home" ? "active" : ""}>home</a>
      </li>
      <li>
        <a href="#menu-container" onClick={() => scrollToSection("menu")} className={activeState === "menu" ? "active" : ""}>menu</a>
      </li>
      {/* Uncomment this line if you have a section with id "mobile-app" */}
      {/* <li>
        <a href="#mobile-app" onClick={() => scrollToSection("mobile-app")} className={activeState === "mobile-app" ? "active" : ""}>mobile-app</a>
      </li> */}
      <li>
        <a href="#footer" onClick={() => scrollToSection("contact-us")} className={activeState === "contact-us" ? "active" : ""}>contact-us</a>
      </li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            {getTotalCost()==0?<></>:<div className="dot"></div>}
                {/* <div className="dot"></div> */}
            </div>
            {!token?<button onClick={()=>setLoginPopup(true)}>sign in</button> :
            <div className='login-popup-list'>
              <img src={assets.profile_icon} alt="" />
                <ul className="logout-list">
                  <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                  <hr />
                  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  <hr />
                </ul>                
            </div>}
           {/* <button onClick={()=>setLoginPopup(true)}>sign in</button>  */}
      </div>
    </div>
  )
}

export default Navbar
