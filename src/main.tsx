import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "bootswatch/dist/cosmo/bootstrap.min.css";

import "@aws-amplify/ui-react/styles.css";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
