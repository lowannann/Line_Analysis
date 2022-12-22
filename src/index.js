import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrapper">
    <App />
  </div>
);
reportWebVitals();
