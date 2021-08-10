import React, { useEffect } from 'react'

import bicyclePlaceholder from '../../Assets/images/bicyclePlaceholder.png'

export default function ListerListing(props) {
  useEffect( () => console.log(props), [])

  const renderThumbnail = () => {
    if (props.listing.image === "" | props.listing.image === undefined) {
      return (<img src={bicyclePlaceholder} id="ListingThumbnail" alt="bicycleImage"/>)
    } else {
      return (<img src={props.listing.image} id="ListingThumbnail" alt="bicycleImage"/>)
    }
  }

  const renderPrice = () => {
    if (props.listing.price === "" | props.listing.price === undefined ) {
      return (<h5 id="ListingPrice">$0.00</h5>)
    } else {
      return (<h5 id="ListingPrice">${(props.listing.price).toFixed(2)}</h5>)
    }
  }

  const renderTitle = () => {
    if (props.listing.title === "" | props.listing.title === undefined) {
      return (<h4 className="ListingText" id="ListingTitle"><em>No title provided</em></h4>)
    } else {
      return (<h4 className="ListingText" id="ListingTitle">{props.listing.title}</h4>)
    }
  }
  const renderSubtitle = () => {
    if (props.listing.subtitle === "" | props.listing.subtitle === undefined) {
      return (<p className="ListingText" id="ListingSubtitle"></p>)
    } else {
      return (<p className="ListingText" id="ListingSubtitle">{props.listing.subtitle}</p>)
    }
  }
  const renderLocation = () => {
    if (props.listing.location === "" | props.listing.location === undefined) {
      return (<p className="ListingText" id="ListingLocation"><em>No location provided</em></p>)
    } else {
      return (<p className="ListingText" id="ListingLocation"><em>{props.listing.location}</em></p>)
    }
  }
  
  return (
    <div id="ListingContainer">
      <div className="ListingSections" id="ListingLeft">
        { renderThumbnail() }
      </div>
      <div className="ListingSections" id="ListingMiddle">
        { renderTitle() }
        { renderSubtitle() }
        { renderLocation() }
      </div>
      <div className="ListingSections" id="ListingRight">
        { renderPrice() }
      </div>
    </div>
  )
}
