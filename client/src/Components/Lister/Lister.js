import React, { useEffect } from 'react'

import exampleListing from '../../Examples/ExampleListing'
import ListerListing from './ListerListing'

import '../../Assets/css/Lister.css'
import fallingBike from '../../Assets/images/fallingBike.gif'

const generateExampleListing = (n) => {
  let out = exampleListing;
  out.id = n
  return out
}

const generateListings = (isExample = false, qty = 0) => {
  let out = []
  if (isExample && qty > 0) {
    for (let i = 0; i < qty; i++) {
      out.push(generateExampleListing(i))
    }
  } else {
    // Pull information from state
    // Eval listings
    // Return eval'd list
    out = out
  }
  return out
}

export default function Lister(props) {
  // Evaluate content from db to render selections in ListerForm
  useEffect(() => "cool", [])

  
  // const listingQty = 0 // var is only here for development

  const renderListings = (l) => {
    if (l.length === 0) {
      return (
        <div id="ListerNoListings">
          <img src={fallingBike} alt="No bikes found"/>
          <p>No bikes found :(</p>
        </div>
      )
    } else {
      l.map((e,i) => {})
      // return something here
    }
  }

  console.log(props.loggedIn)
  return (
    <div id="ListerWrapper">
      <div id="ListerContainer">
        <div className="Lister" id="ListerLeft">
          <form id="ListerForm">
            <label for="ListerFormBrand">Brand</label><br></br>
            <label for="ListerFormType">Type</label><br></br>
            <label for="ListerFormGender">Gender</label><br></br>
            <label for="ListerFormSize">Size</label><br></br>
            <label for="ListerFormLocation">Location</label><br></br>
            <label for="ListerFormPrice">Price</label><br></br>
          </form>
        </div>
        <div className="Lister" id="ListerRight">
          { renderListings(generateListings(0)) }
        </div>
      </div>
      <p>isLoggedIn: {props.loggedIn + ""}</p>
    </div>
  )
}
