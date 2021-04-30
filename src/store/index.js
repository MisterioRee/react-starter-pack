import { combineReducers, configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./Auth/AuthReducer";
import apiStatusReducer from "./Api/ApiStatusReducer";



const reducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  apiStatus: apiStatusReducer,
})
const middleware = [...getDefaultMiddleware()]
export default configureStore({
  reducer,
  middleware,
})




