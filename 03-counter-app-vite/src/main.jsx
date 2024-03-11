import React from "react";
import ReactDOM from "react-dom/client";
//import { App, HelloWorld } from "./HelloWorld";
//import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp/CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />
    <HelloWorld /> */}
    {/* <FirstApp title="Hola, soy Gku" /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
