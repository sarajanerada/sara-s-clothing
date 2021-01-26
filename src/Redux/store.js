import { createStore , applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './root.reducer'

import logger from 'redux-logger';

const middlewares = [logger];

const store = createStore(rootReducer , applyMiddleware(...middlewares) + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store)

export { store , persistor};