import cartActionType from './cart.type'

export const toggleHiddenCart = () => ({
  type: cartActionType.TOGGLE_HIDDEN_CART
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
})