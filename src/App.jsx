// @flow
import React from 'react'
import './assets/App.css'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Routes from './routes'

import { type Store as ReduxStore, type StoreEnhancer } from 'redux'
import { type State, type Action } from './redux/reducers'
import { type BrowserHistory } from 'history'

type Store = ReduxStore<State, StoreEnhancer<State, Action>>
type AppType = {
  store: Store,
  browserHistory: BrowserHistory
}

const App = ({ store, browserHistory }: AppType) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>
)

export default App
