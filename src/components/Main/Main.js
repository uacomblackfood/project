import React, { Component } from 'react'
import Header from '../Header/index'
// import SideMenu from '../SideMenu/index'
import '../../styles/styles.css'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-bg">
        </div>
        <div className="main-inner">
            <div className="main-text">
                <div className="text-b">
                    HEY!
                </div>
                <div className="text-x">
                    MAKE ORDER, SNOW MAN
                </div>
            </div>
        </div>
        <div className="citate">
            “Excellence in the perfection of construction”
        </div>
      </div>
    )
  }
}

export default Main
