import cartActionType from './cart.type'

export const toggleHiddenCart = () => ({
  type: cartActionType.TOGGLE_HIDDEN_CART
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
})