import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
<BrowserRouter basename="/thai-diner-restaurant">
      <App />
    </BrowserRouter>
  </ChakraProvider>
);


