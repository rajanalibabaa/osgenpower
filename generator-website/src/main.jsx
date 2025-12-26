import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
// import CircularProgress from "@mui/material/CircularProgress";
import App from "./App";
import log from "./assets/omshakthigenpower_logo.jpg";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Suspense > */}
      <App />
    {/* </Suspense> */}
  </React.StrictMode>
);
