import React, { Component } from 'react'
import { Link } from 'react-scroll'

import pizza from '../../static/pizza.png'
import roll from '../../static/roll.png'
import pasta from '../../static/pasta.png'
import './styles.css'

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <Link
          activeClass="active"
          to="test"
          spy={true}
          smooth={true}
          offset={-99}
          duration={500}
        >
          <div className="item active">
              <img src={pizza} alt="" />
              <span>PIZZA</span>
          </div>
        </Link>
        {/* <div className="item">
            <img src={roll} alt="" />
            <span>ROLL</span>
        </div>
        <div className="item">
            <img src={pasta} alt="" />
            <span>PASTA</span>
        </div> */}
      </div>
    )
  }
}

export default SideMenu
