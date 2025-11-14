import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import App from "./App";
import log from "./assets/omshakthigenpower_logo.jpg";

// ✅ Lightweight animation while App bundle loads
const Loader = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{ background: "#fff", gap: 2 }}
  >
    <Box
      component="img"
      src={log}
      alt="Om Shakthi Genpower Loading..."
      sx={{
        width: 150,
        height: "auto",
        mb: 2,
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    />
    <CircularProgress color="warning" />
  </Box>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
