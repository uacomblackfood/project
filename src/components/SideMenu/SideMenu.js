import React, { Component } from 'react'

import pizza from '../../static/pizza.png'
import roll from '../../static/roll.png'
import pasta from '../../static/pasta.png'
import './styles.css'

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="item active">
            <img src={pizza} alt="" />
            <span>PIZZA</span>
        </div>
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
