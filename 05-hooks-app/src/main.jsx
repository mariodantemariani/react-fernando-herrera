//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { HooksApp } from "./HooksApp.jsx";
import "./index.css";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memo/Memorize";
//import { MemoHook } from "./06-memo/MemoHook";
//import { CallbackHook } from "./06-memo/CallbackHook";
//import { Padre } from "./07-tarea-memo/Padre";
//import { TodoApp } from "./08-useReducer/TodoApp";
//import "./08-useReducer/intro-reducer";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);

/*
  <MultipleCustomHooks />
  <React.StrictMode>
     <HooksApp />
    <CounterApp />
    <CounterWithCustomHooks /> 
   </React.StrictMode> */
