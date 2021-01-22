import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../Custom-button/Custom-button.component'
import CartItems from '../Cart-item/Cart-item.component'
import { createStructuredSelector } from 'reselect'

import {withRouter} from 'react-router-dom';
import './Cart-dropdown.styles.scss'
import { selectCartItem } from '../../Redux/Cart/cart.selector'
import {toggleHiddenCart} from '../../Redux/Cart/cart.action'



const CartDropdown = ({cartItems , history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items"> 
    {cartItems.length
        ?   cartItems.map(cartItem => (
          <CartItems key={cartItem.id} item={cartItem} />
      )) 
      : <span className="empty-message">Your Cart is Empty</span> 
      
      }
    </div>
    <CustomButton onClick={() => 
     { history.push('/checkout');
      dispatch(toggleHiddenCart());
     } }> GO TO CHECKOUT </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
}
)

export default withRouter(connect(mapStateToProps)(CartDropdown));