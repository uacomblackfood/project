import React, { Component } from 'react'
import './styles.css'
import logo from '../../static/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner"> 
          <a
            href="/"
            className="logo"
          >
            <img src={logo} alt="" />
          </a>
          <div className="rights">
            <span>
                All right reserved.
            </span>
            <span>
                &copy;
            </span>
            <span>
                2018
            </span>
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
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
