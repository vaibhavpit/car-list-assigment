import { combineReducers } from "redux";
import { carReducer } from "./carone";
import { carReducerTwo } from "./cartwo";
import { carReducerThree } from "./carthree";

export default combineReducers({
  carReducer,
  carReducerTwo,
  carReducerThree
});
