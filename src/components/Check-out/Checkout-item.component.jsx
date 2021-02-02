import React from 'react'
import {connect} from 'react-redux'
import { addItem, clearItemFromCart , removeItem } from '../../Redux/Cart/cart.action'

import './Checkout-item.styles.scss'

const CheckoutItem = ({cartItems , clearItemFromCart , addItem , removeItem}) =>{

const {name , price, imageUrl, quantity} = cartItems;

return (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItems)}>&#10094;</div>
       <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItems)}>&#10095;</div>
    </span>
    <div className="remove-button"  onClick={() => clearItemFromCart(cartItems)}>&#10005;</div>
  </div>
)
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)