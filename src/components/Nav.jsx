// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="nav-link" to="/">Cuentas coquetas</Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>)
}

export default Nav
