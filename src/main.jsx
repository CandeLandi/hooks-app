import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { MultipleCustomHooks } from "./03-examples";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Padre />
  // </React.StrictMode>
);
