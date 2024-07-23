import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="first">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias ea, delectus facere reprehenderit eius vero nisi ducimus dolores? Ea aut itaque dolor incidunt repudiandae.</p>

                <ul className='socila-media-icons'>
                    <li><img src={assets.facebook_icon} alt="" /></li>
                    <li> <img src={assets.twitter_icon} alt="" /></li>
                    <li><img src={assets.linkedin_icon} alt="" /></li>
                </ul>
            </div>

            <div className="second">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="third">
                <h2>GET IN TOUCH</h2>
                <p>+91-1234567890</p>
                <p>kamlesh...@gmail.com</p>
            </div>
        </div>
      <hr />
      <p>&copy; {new Date().getFullYear()} Tomato.com. All Rights Reserved.</p>
      {/* <p></p> */}
    </div>
  )
}

export default Footer
