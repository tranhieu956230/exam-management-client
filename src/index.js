import React from "react";
import ReactDOM from "react-dom";
import App from "pages/App";
import { StateProvider } from "./store";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
