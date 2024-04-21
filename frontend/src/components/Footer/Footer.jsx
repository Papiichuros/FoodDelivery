import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sunt maiores harum expedita mollitia? Iusto eum minus, voluptatum, totam corporis maiores voluptas culpa sint ad nam laborum, quos incidunt magni.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0912-3456-7890</li>
                <li>Contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 © Tomato | Food Delivery - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
