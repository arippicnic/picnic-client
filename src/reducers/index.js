import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const appReducer = combineReducers({ auth: authReducer, post: postReducer });

export default appReducer;
