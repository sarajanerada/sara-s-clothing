import React from 'react'
import { connect } from 'react-redux'
import {  selectCartItemCount } from '../../Redux/Cart/cart.selector'
import { toggleHiddenCart } from '../../Redux/Cart/cart.action'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'

import './Cart-icon.styles.scss'

const CartIcon = ({toggleHiddenCart , itemCount}) => (
  <div className="cart-icon" onClick={toggleHiddenCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{itemCount}</span>
  </div>

)

const mapsDispatchToProps = dispatch => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapsDispatchToProps) (CartIcon);