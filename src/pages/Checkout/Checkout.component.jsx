import React from 'react'
import  {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './Checkout.styles.scss'

import { selectCartItem , selectCartTotal } from '../../Redux/Cart/cart.selector'
import CheckoutItem from '../../components/Check-out/Checkout-item.component'
import StripeButton from 'react-stripe-checkout'


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
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
      { cartItems.map(cartItem => 
       <CheckoutItem cartItems={cartItem}/>
      )}

    <div className="total">
      Total : {total}
    </div>
    <div className="text-warning">
      *PLEASE USE THE FOLLOWING CARDS FOR PAYMENT*
      <br/>
      4242 4242 4242 4242 - Exp: 01/23 CVV: 123
    </div>
    <StripeButton price={total}/>

  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)