import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/user.reducer'
import CartReducer from './Cart/cart.reducer'
import directoryReducer from './Directory/directory.reducer'
import shopReducer from './Shop/shop.reducer'



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers ({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig , rootReducer)