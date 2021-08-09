import React from 'react'
import { Link } from 'react-router-dom'

import '../Assets/css/Navbar.css'

export default function Navbar() {
  return (
    <div id="NavbarBody">
      <div id="NavbarContainer">
        <div id="NavbarLogo">
          <h3>BiciTrader</h3>
        </div>
        <div id="NavbarUser">
          <Link class="NavbarVCenter" to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}
