import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import App from './components/app'
import reducers from './reducers'

// Middleware logic - unwrapping a promise
// ReduxPromise looks at payload property of incoming actions
// If the payload is a 'promise', it stops the action.
// once the promise is resolved, it dispatches another action of the same
// type with the payload being the result of the promise
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app'))
