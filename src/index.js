import React from "react";
import ReactDOM from "react-dom";
import App from "pages/App";
import { StateProvider } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
