import { combineReducers } from "redux";

import userReducer from './Users/UserReducer.js'

const RootReducer = combineReducers({
  users: userReducer
})

export default RootReducer