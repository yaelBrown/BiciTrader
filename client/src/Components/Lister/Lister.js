import React, { useState, useEffect } from 'react'

import exampleListing from '../../Examples/ExampleListing'
// import ListerListing from './ListerListing'
import ListerListing from './ListerListing'

import '../../Assets/css/Lister.css'
import fallingBike from '../../Assets/images/fallingBike.gif'

import ListerService from '../../Services/ListerService'


export default function Lister(props) {

  const [state, setState] = useState({})

  // Evaluate content from db to render selections in ListerForm
  useEffect(() => {
    // Get from db or generate listings
    const listings = ListerService.generateListings(true, 10)
    const attrib = ListerService.generateAttributes(listings)

    setState({listings, attrib})
  }, [])

  
  // const listingQty = 0 // var is only here for development
  const renderListings = l => {
    
    if (l === undefined || l.length === 0) {
      return (
        <div id="ListerNoListings">
          <img src={fallingBike} alt="No bikes found"/>
          <p>No bikes found :(</p>
        </div>
      )
    } else {
      l.map((e,i) => {
        return (<ListerListing/>)
      })
    }
  }

  const renderAttributes = att => {

  }

  const handleInputChange = e => {
    console.log("Something changed !")
  }

  console.log(props.loggedIn)
  return (
    <div id="ListerWrapper">
      <div id="ListerContainer">
        <div className="Lister" id="ListerLeft">
          <form id="ListerForm">
            <label className="ListerAttrib" for="ListerFormBrand">
              <strong>Brand</strong>
              <span>
                <input 
                  type="checkbox"
                  name="ListerFormBrand"
                  checked={false}
                  onChange={handleInputChange}
                  value="Cannondale" />
                Cannondale ({state.attrib.brand.Cannondale})
              </span>
            </label>
            <label className="ListerAttrib" for="ListerFormType">Type</label><br></br>
            <label className="ListerAttrib" for="ListerFormGender">Gender</label><br></br>
            <label className="ListerAttrib" for="ListerFormSize">Size</label><br></br>
            <label className="ListerAttrib" for="ListerFormLocation">Location</label><br></br>
            <label className="ListerAttrib" for="ListerFormPrice">Price</label><br></br>
          </form>
        </div>
        <div className="Lister" id="ListerRight">
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          <ListerListing listing={exampleListing}/>
          { renderListings(state.listings) }
        </div>
      </div>
      <p>isLoggedIn: {props.loggedIn + ""}</p>
    </div>
  )
}
