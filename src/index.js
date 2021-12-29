import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 1. imported createStore & Provider //

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/index";

import "bulma/css/bulma.css";
import "./styles.scss";

// 2. created reducer to hold state in for now //
// const reducer = () => {
// 	return {

// 	}

// }

// 3. made a store const with reducer //
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  // 4. wrapped Providers around App.js passing down store as well//
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
