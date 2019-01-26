import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (rootReducer, preloadedState) => {
  const middlewares = [ thunkMiddleware ]
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger()
    middlewares.push(loggerMiddleware)
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
}

export default configureStore
