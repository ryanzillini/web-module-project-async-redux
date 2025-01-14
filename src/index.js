import React from "react";
import ReactDOM from "react-dom";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

import thunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
