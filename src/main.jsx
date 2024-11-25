import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { MultipleCustomHooks } from "./03-examples";
import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";

import { BrowserRouter } from "react-router-dom";  
import { MainApp } from "./09-useContext/MainApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
