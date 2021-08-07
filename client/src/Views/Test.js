import React, { useState, useEffect } from 'react'

import TestService from '../Services/TestService';


export default function Test() {
  let initialState = {
    isLoading: true,
    isError: false,
    testData: []
  }
  
  const [state, setState] = useState(initialState)
  
  useEffect(() => {
    TestService.getTestData().then((res) => {
      console.log(res.data)
      if (res.data.msg === "ok") {
        let newState = {...state}
        newState.isLoading = false
        newState.testData = res.data.data
        setState(newState)
      } else {
        let newState = {...state}
        newState.isLoading = false
        newState.isError = true
        newState.testData = res.data.msg
        setState(newState)
      }
    })
    console.log(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  let renderTestData = () => {
    if (state.isError) {
      return (<p>{state.testData}</p>)
    } else {
      console.log(state)
      let listItems = state.testData.map((e,i) => {
        return <span>id: {e.id} name: {e.name} age: {e.age}<br></br></span>
      })
      console.log(listItems)
      return listItems
    }
  }
  
  if (state.isLoading) {
    return (
      <div>
        <h3>...Loading</h3>
      </div>
    )
  } else {
    return (
      <div>
        { renderTestData() }
      </div>
    )
  }
}
