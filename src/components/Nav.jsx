// @flow
import React from 'react'
import { Link } from 'react-router-dom'

/* <nav class="navbar-dark unique-color-dark navbar" style="margin-top: 20px;">
      <a aria-current="page" class="navbar-brand active" data-test="navbar-brand" href="/navigation/navbar">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
          </a>
          </nav> */
/*
background-color: #d8f1f1;
blue-color: #65c8c6;
red-color: #e51b24;
overlap-color: #5b151c;
*/
const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top" style={{ backgroundColor: '#d8f1f1' }}>
      <div className="container">
        <Link className="nav-link" to="/" style={{ fontWeight: 'bolder', fontSize: '1.25em' }}>
          <span style={{ color: '#e51b24' }}>Cuentas</span> <span style={{ color: '#65c8c6' }}>coquetas</span>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button type="button" className="btn btn-link" style={{ padding: 0, fontSize: '1em' }} onClick={() => window.location.reload()}>
              <i className="fa fa-trash-alt cyan-text"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>)
}

export default Nav
