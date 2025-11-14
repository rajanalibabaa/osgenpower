import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
// import CircularProgress from "@mui/material/CircularProgress";
import App from "./App";
import log from "./assets/omshakthigenpower_logo.jpg";

// ✅ Lightweight animation while App bundle loads
const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: "#fff", gap: 3 }}
    >
      {/* Glowing Ring Animation */}
      <motion.div
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "6px solid #ffb300ff",
          borderTopColor: "transparent",
          
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Logo Pulse Animation */}
      <motion.img
        src={log}
        alt="Loading..."
        style={{ width: 150, height: "auto", position: "absolute" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

   
    </Box>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
