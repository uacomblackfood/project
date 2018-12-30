import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        <FontAwesomeIcon
            className="icon"
            size="lg"
            icon={faPhone}
        />
      </div>
    )
  }
}

export default Phone
