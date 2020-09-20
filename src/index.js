import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import { store } from "./Components/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
