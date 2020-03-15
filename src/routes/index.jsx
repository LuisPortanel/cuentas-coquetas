// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'

const Routes = () => (
  <>
    <Nav />
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  </>
)
export default Routes
