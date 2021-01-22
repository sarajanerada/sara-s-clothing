import React from 'react'

import './Cart-item.styles.scss'

const CartItems = ({item: {name, imageUrl , price , quantity}}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="image42432"/>

    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} * {price} </span>
    </div>
  </div>
)

export default CartItems