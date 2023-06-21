import React from "react";
import ReactDOM from "react-dom";

import { legacy_createStore as createStore } from "redux";
import { Provider, middleWare } from "react-redux";

import App from "./App";
import "./index.css";

import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
