import React, { Component } from 'react'
import logo from '../../static/logo.png'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner">
          <a
            href="/"
            className="logo"
          >
            <img src={logo} alt="" />
          </a>
          <div className="menu">
          </div>
          <a
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="social-section"
            href="https://instagram.com/blackfood.com.ua?utm_source=ig_profile_share&igshid=28yrg0tedpi8"
          >
            <FontAwesomeIcon
              className="icon"
              size="lg"
              icon={faInstagram}
            />
            <div className="phones">
              <a href="tel:+380963294559" className="phone">
                +380(96)-329-45-59
              </a>
              <a href="tel:+380955908554" className="phone">
                +380(95)-590-85-54
              </a>
              <a href="tel:+380633744549" className="phone">
                +380(63)-374-45-49
              </a>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
