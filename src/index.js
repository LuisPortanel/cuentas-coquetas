import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import 'bootstrap/dist/css/bootstrap.min.css'

const browserHistory = createBrowserHistory()

const store = createStore(
  rootReducer,
  // initial State,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

ReactDOM.render(<App store={store} browserHistory={browserHistory} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
