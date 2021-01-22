import React from 'react'

import './Checkout-item.styles.scss'

const CheckoutItem = ({cartItems : {name , price, imageUrl, quantity}}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <span className="remove-button">&#10005;</span>


  </div>
)

export default CheckoutItem