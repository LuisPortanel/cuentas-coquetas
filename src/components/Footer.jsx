// @flow
import React from 'react'
import ReactGA from 'react-ga'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <p className="text-muted m-0">Por <ReactGA.OutboundLink eventLabel="Signature" to="mailto:luis@portanel.com" target="_self">Luis Portanel</ReactGA.OutboundLink>.</p>
        <p className="text-muted text-sm m-0"><small>v. 1.0.1</small></p>
      </div>
    </footer>)
}

export default Footer
