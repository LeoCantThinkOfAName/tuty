import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { inspect } from "@xstate/inspect";

inspect();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
