import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "./index.css";
import "./assets/fonts/fonts.css";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
