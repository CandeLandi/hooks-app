import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { MultipleCustomHooks } from "./03-examples";
import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";



ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <TodoApp />
 </React.StrictMode>
);
