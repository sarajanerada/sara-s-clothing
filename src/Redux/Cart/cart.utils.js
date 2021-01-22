
export const addItemToCart = (cartItems , cartItemsToAdd) => {
  const existingItem = cartItems.find( 
    cartItem => cartItem.id === cartItemsToAdd.id
  )

  if (existingItem) {
    return cartItems.map(cartItem => 
        cartItem.id === cartItemsToAdd.id
         ? {...cartItem , quantity : cartItem.quantity + 1}
        : cartItem
      
      )
  }

  return [...cartItems , {...cartItemsToAdd , quantity: 1}]
}

export const removeItemFromCart = (cartItems , cartItemsToRemove) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemsToRemove.id
  );

  if (existingItem.quantity === 1 ) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
  }

  return cartItems.map(cartItem => 
      cartItem.id === cartItemsToRemove.id ?
      {...cartItem , quantity: cartItem.quantity -1 } 
      : cartItem
      );
  
};