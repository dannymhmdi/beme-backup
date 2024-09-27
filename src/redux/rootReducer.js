import { combineReducers } from "@reduxjs/toolkit"
import counterReducer from './reducers/counterSlice'
import tokenReducer from './reducers/tokenSlice'
import loginReducer from './reducers/checkLoginSlice'
const rootReducer = combineReducers({
    counter:counterReducer,
    hasToken:tokenReducer,
    checkLogin: loginReducer
})

export default rootReducer;