import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import navReducer from "./navReducer";

export default combineReducers({
  counter: counterReducer,
  currentMember: loginReducer,
  memberDropDown: navReducer,
});
