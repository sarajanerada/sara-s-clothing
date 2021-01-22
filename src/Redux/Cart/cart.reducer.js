import cartActionType from './cart.type'

import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const CartReducer = (state=INITIAL_STATE , action) => {

  switch (action.type) {
    case cartActionType.TOGGLE_HIDDEN_CART:

      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActionType.ADD_ITEM: 

      return {
        ...state,
        cartItems: addItemToCart(state.cartItems , action.payload)
      }
        
    default:
      return state;
  }

}

export default CartReducer;