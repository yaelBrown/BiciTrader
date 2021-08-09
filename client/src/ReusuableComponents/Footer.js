import React from 'react'
import { Link } from "react-router-dom"

import AppStoreBtn from '../Assets/images/footerAppStoreBtn.gif'
import PlayStoreBtn from '../Assets/images/footerPlayStoreBtn.gif'

import '../Assets/css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div id="footerContainer" class="biciContainer">
        <div class="footerColumns" id="footerLeft">
          <a href="/">Home</a><br></br>
          <a href="/test">Test</a><br></br>
          <a href="/fdfsgsdfgsdshafadf">Home</a><br></br>
          <a href="/admin">Admin</a><br></br>
        </div>
        <div class="footerColumns" id="footerMiddle">
          <p>middle</p>
        </div>
        <div class="footerColumns" id="footerRight">
          <img class="footerAppButtons" src={AppStoreBtn} alt="app store button"/><br></br>
          <img class="footerAppButtons" src={PlayStoreBtn} alt="play store button"/><br></br>
        </div>
      </div>
    </footer>
  )
}




