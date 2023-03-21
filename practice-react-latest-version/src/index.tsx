// Libs
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

// CSS
import "./styles/globals.css";

// Themes
import themes from "./themes";

// Components
import App from "pages/DataTable";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={themes}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
