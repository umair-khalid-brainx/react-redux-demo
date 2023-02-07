import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faGlobe } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header text-light text-center p-5">
      <span className="me-5"><FontAwesomeIcon icon={faGlobe} size="4x"/></span>
      <span className="display-1 fw-bold">SpaceX Launches</span>
      <span className="ms-5"><FontAwesomeIcon icon={faRocket} size="4x"/></span>
    </header>
  )
}