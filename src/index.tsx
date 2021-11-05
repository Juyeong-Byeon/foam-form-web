import "./index.css";

import App from "./app/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
