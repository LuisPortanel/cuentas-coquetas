// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className="Nav navbar navbar-expand navbar-dark fixed-top">
      <div className="container">
        <Link className="nav-link" to="/">
          <span className="logo-red">Cuentas</span> <span className="logo-blue">Coquetas</span>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button type="button" className="btn btn-link" onClick={() => window.location.reload()} title="Recargar">
              <i className="fa fa-redo-alt cyan-text"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>)
}

export default Nav
