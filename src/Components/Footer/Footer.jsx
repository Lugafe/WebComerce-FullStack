import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import ins from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import wzpp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Styles's</p>
      </div>
      <ul className="footer-links">
        <li>Empresa</li>
        <li>Produto</li>
        <li>Lojas</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={ins} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pin} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={wzpp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright 2024</p>
      </div>
    </div>
  )
}

export default Footer