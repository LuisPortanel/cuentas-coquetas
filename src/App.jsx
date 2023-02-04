// @flow
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Routes from './routes'

import { type Store as ReduxStore, type StoreEnhancer } from 'redux'
import { type State, type Action } from './redux/reducers'
import { type BrowserHistory } from 'history'

import ReactGA from 'react-ga4'
ReactGA.initialize('G-J741V4FD6J')

type Store = ReduxStore<State, StoreEnhancer<State, Action>>
type AppType = {
  store: Store,
  browserHistory: BrowserHistory
}

const App = ({ store, browserHistory }: AppType) => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search })
  }, [])

  return <Provider store={store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>
}

export default App
