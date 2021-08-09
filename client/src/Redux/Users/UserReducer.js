const initialState = {}

const UserReducer = ( state = initialState, action ) => {
  let out = {...state}
  switch (action.type) {
    case "ADD_USER_TO_STORE":
      out.loggedInUser = action.payload
      return out
    default: 
      return state
  }
}

export default UserReducer