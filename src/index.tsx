import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import  App  from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { initialStorage } from "./data";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
initialStorage();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
