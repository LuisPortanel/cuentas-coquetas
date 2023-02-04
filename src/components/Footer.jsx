// @flow
import React from 'react'
import ReactGA from 'react-ga4'
import './Footer.scss'

const handleOutboundLink = () => {
  ReactGA.event({
    category: 'Signature',
    action: 'Signature'
  })
}

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <p className="text-muted m-0">Por <a href="mailto:luis@portanel.com" onClick={handleOutboundLink} target="_blank" rel="noopener noreferrer">Luis Portanel</a>.</p>
        <p className="text-muted text-sm m-0"><small>v. 1.0.1</small></p>
      </div>
    </footer>)
}

export default Footer
