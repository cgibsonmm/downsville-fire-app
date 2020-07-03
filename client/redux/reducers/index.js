import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import navReducer from "./navReducer";

let currentMember = loginReducer;

export default combineReducers({
  counter: counterReducer,
  currentMember,
  memberDropDown: navReducer,
});
