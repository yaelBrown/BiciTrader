import React, { useState, useEffect } from 'react'

import LoadingBike from '../Assets/images/bikebiking.gif'

import '../Assets/css/Home.css'
import Lister from '../Components/Lister/Lister'
import { render } from 'react-dom'
import Footer from '../ReusuableComponents/Footer'

export default function Home() {
  let initialState = {
    isLoading: false,
    isError: false,
    isLoggedIn: true,
    msg: ""
  }
  
  const [state, setState] = useState(initialState)
  
  const renderHomePage = () => {
    if (state.isLoading) {
      return (
        <div id="HomeBody">
          <img src={LoadingBike} id="HomeLoadingBiker" alt="loading biker"/>
        </div>
      )
    } else {
      if (!state.isError) {
        return (
          <div id="HomeBody">
            <Lister loggedIn={state.isLoggedIn}/>
          </div>
        )
      } else {
        return ( <div><p>Error: {state.msg}</p></div>)
      }
    }
  }

  return (
    <div>
      { renderHomePage() }
      <Footer/>
    </div>
  )
}
