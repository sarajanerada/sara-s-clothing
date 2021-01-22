import React from 'react'
import  {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './Checkout.styles.scss'

import { selectCartItem , selectCartTotal } from '../../Redux/Cart/cart.selector'


const CheckoutPage = ({cartItems , total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
      { cartItems.map(cartItem => cartItem.name)}

    <div className="total">
      Total : {total}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)