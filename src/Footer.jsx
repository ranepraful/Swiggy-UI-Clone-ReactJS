import React from 'react'
import './Footer.css'
import googlePlay from './assets/icon-GooglePlay.webp'
import appstore from './assets/app-store.webp'

function Footer() {
  return (
    <div className='footer-container'>
      <div style={{width: '25%'}}>
        <ul className='footer'>
          <li className='footer-header'>COMPANY</li>
          <li className='footer-link'>About us</li>
          <li className='footer-link'>Team</li>
          <li className='footer-link'>Careers</li>
          <li className='footer-link'>Swiggy Blog</li>
          <li className='footer-link'>Bug Bounty</li>
          <li className='footer-link'>Swiggy One</li>
          <li className='footer-link'>Swiggy Corporate</li>
          <li className='footer-link'>Swiggy Internet</li>
          <li className='footer-link'>Swiggy Genie</li>
          <li className='footer-link'>Swiggy HDFC Bank Credit Card</li>
        </ul>
      </div>
      <div style={{width: '20%'}}>
        <ul className='footer'>
          <li className='footer-header'>CONTACT</li>
          <li className='footer-link'>Help & Support</li>
          <li className='footer-link'>Partner with us</li>
          <li className='footer-link'>Rate with us</li>
        </ul>
      </div>
      <div style={{width: '35%'}}>
        <ul className='footer'>
          <li className='footer-header'>LEGAL</li>
          <li className='footer-link'>Terms & Conditions</li>
          <li className='footer-link'>Refund & Cancellation</li>
          <li className='footer-link'>Privacy Policy</li>
          <li className='footer-link'>Cookie Policy</li>
          <li className='footer-link'>Offer Terms</li>
          <li className='footer-link'>Phishing & Fraud</li>
          <li className='footer-link'>Corporate - Swiggy Money Codes Terms and Conditions</li>
          <li className='footer-link'>Corporate - Swiggy Discount Vouher Terms and Conditions</li>
        </ul>
      </div>
      <div className='footer-availableon' style={{width: '20%', paddingTop:'30px'}}>
        <img src={appstore} alt="" style={{marginBottom: '20px'}} />
        <img src={googlePlay} alt="" />
      </div>
    </div>
  )
}

export default Footer