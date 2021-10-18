import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./State/StateProvider";
import Reducer, { InitialState } from "./State/Reducer";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={Reducer} initialState={InitialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
