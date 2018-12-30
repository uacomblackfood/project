import React, { Component } from 'react'
import pizza1 from '../../static/pizza1.jpg'
import './styles.css'

class ProductsContainer extends Component {
  render() {
    const {
      name,
      text,
      cost,
      imgSrc
    } = this.props

    return (
      <div className="product-item">
        <div className="img-wrap">
            <img src={imgSrc} alt="" />
        </div>
        <div className="inner">
            <div className="title">{name}</div>
            <div className="description">
                {text}
            </div>
            <div className="cost">
                {`${cost} грн`}
            </div>
        </div>
      </div>
    )
  }
}

export default ProductsContainer
