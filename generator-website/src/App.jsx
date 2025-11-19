import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import   Fab  from "@mui/material/Fab";
import  WhatsAppIcon  from "@mui/icons-material/WhatsApp";
import ScrollToTop from "./Components/ScroolTop";
// Global Components (lazy-loaded)
const Navbar = React.lazy(() => import("./Components/Navbar"));
const NewsTicker = React.lazy(() => import("./Components/NewsTicker"));
const Footer = React.lazy(() => import("./Components/Footer"));

// Pages (lazy)
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const GalleryPage = React.lazy(() => import("./pages/GallerPage"));
const SalesRentalDealerPage = React.lazy(() => import("./pages/SalesRentalDealerPage"));
const ContactUsPage = React.lazy(() => import("./pages/ContactUsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));

// Service Subpages
const KirloskarGreenGenerators = React.lazy(() => import("./pages/ServiceComponents/KirloskarGreenGenerators"));
const AllTypeofDGSet = React.lazy(() => import("./pages/ServiceComponents/AllTypeofDGSet"));
const AllTurnkeyProject = React.lazy(() => import("./pages/ServiceComponents/AllTurnkeyProject"));
const ManufacturingAcoustic = React.lazy(() => import("./pages/ServiceComponents/ManufacturingAcoustic"));
const ElectricalWorks = React.lazy(() => import("./pages/ServiceComponents/ElectricalWorks"));
const PanelBoards = React.lazy(() => import("./pages/ServiceComponents/PanelBoards"));

// MUI Theme
const theme = createTheme({
  palette: {
    text: { primary: "#333333" },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
});

// Fallback Loader

const WhatsApp = () => {
  const mobileNumber = "+91 735 000 0000"; // Replace with your actual mobile number
  return(
     <Fab
      onClick={() => window.open(`https://wa.me/${mobileNumber}`, "_blank")}
      sx={{
        position: "fixed",
        bottom: 100,
        right: 20,
        backgroundColor: "#25D366",
        color: "#fff",
        width: 60,
        height: 60,
        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#1ebe5d",
        },
      }}
    >
      < WhatsAppIcon sx={{ fontSize: 32 }} />
    </Fab>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Suspense fallback={<Loader />}> */}
        <ScrollToTop/>
          <NewsTicker />
          <Navbar />
<WhatsApp/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Generatorsales/Delearership/Rental" element={<SalesRentalDealerPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/* Services Routes */}
            <Route path="/services" element={<ServicesPage />}>
              <Route index element={<Navigate to="kirloskar" replace />} />
              <Route path="kirloskar" element={<KirloskarGreenGenerators />} />
              <Route path="dg-set" element={<AllTypeofDGSet />} />
              <Route path="turnkey" element={<AllTurnkeyProject />} />
              <Route path="acoustic" element={<ManufacturingAcoustic />} />
              <Route path="electrical" element={<ElectricalWorks />} />
              <Route path="panels" element={<PanelBoards />} />
            </Route>
          </Routes>

          <Footer />
        {/* </Suspense> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
