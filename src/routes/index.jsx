// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Routes = () => (
  <>
    <Nav />
    <main className="container" style={{ maxWidth: '900px' }}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </main>
    <Footer />
  </>
)
export default Routes
