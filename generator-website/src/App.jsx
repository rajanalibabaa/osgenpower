import React, { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Fab, Box, TextField, Button, Typography, Paper, IconButton, InputAdornment,useMediaQuery } from "@mui/material";
import  WhatsAppIcon  from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
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
  const mobileNumber = "+919841642050"; // Replace with your actual mobile number
  return(
     <Fab
      onClick={() => window.open(`https://wa.me/${mobileNumber}`, "_blank")}
      sx={{
        position: "fixed",
        bottom: 130,
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

const PhoneCallButton = () => {
  const phoneNumber = "+918248638595";   // your number here

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Fab
      onClick={handleCallClick}
      sx={{
        position: "fixed",
        bottom: { xs: 80, sm: 200, md: 280, lg: 120 },   
        right:  { xs: 295, sm: 10, md: 25 },             

        backgroundColor: "#28a745",
        color: "#fff",

        width:  { xs: 58, sm: 55, md: 55, lg: 60 },      
        height: { xs: 58, sm: 55, md: 55, lg: 60 },      

        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#218838",
          transform: "scale(1.1)",
        },
        transition: "all 0.3s ease",
      }}
      aria-label="Call Now"
    >
      <PhoneIcon sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
    </Fab>
  );
};


// Floating Form 

const FloatingForm = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  // NEW: Is scroll allowed to auto-collapse?
  const [autoCollapseEnabled, setAutoCollapseEnabled] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    altMobile: "",
    message: "",
  });

  // Detect scroll only ONCE
  useEffect(() => {
    const handleScroll = () => {
      if (autoCollapseEnabled && window.scrollY > 300) {
        setIsScrolled(true);
        setIsOpen(false); // collapse only the first time
        setAutoCollapseEnabled(false); // stop auto-collapsing forever
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoCollapseEnabled]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted!");
    setFormData({
    fullName: "",
    mobile: "",
    altMobile: "",
    message: "",
  });

  };

  // When user manually closes, disable future auto-collapse
  const manualClose = () => {
    setIsOpen(false);
    setAutoCollapseEnabled(false);
  };

  // When user manually opens, disable auto-collapse too
  const manualOpen = () => {
    setIsOpen(true);
    setAutoCollapseEnabled(false);
  };

  return (
    <>
      {/* Floating Icon */}
      {!isOpen && (
        <Fab
          onClick={manualOpen}
          sx={{
            position: "fixed",
            bottom: "30%",
            right: 20,
            backgroundColor: "#1976d2",
            color: "#fff",
            width: 60,
            height: 60,
            zIndex: 9999,
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          <ChatIcon sx={{ fontSize: 32 }} />
        </Fab>
      )}

      {/* Expanded Form */}
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            bottom:{xs: "20%", sm: "30%", md: "8%"},
            right: { xs: 20, sm: 40, md: '19%' },
            width: 320,
            p: 2,
            zIndex: 9999,
            backgroundColor: "#2fa6aaff",
            color: "#fff",
            borderRadius: 2,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={manualClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ textAlign: "center", mb: 2, mt: 1, color: "#fff" }}
          >
            Send Us a Message
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.fullName}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 1,
                input: { color: "#fff" },
                label: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />

            {/* Mobile Number */}
            <TextField
              name="mobile"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.mobile}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 1,
                input: { color: "#fff" },
                label: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />

            {/* Alternative Mobile */}
            <TextField
              name="altMobile"
              label="Alternative Mobile"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.altMobile}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 1,
                input: { color: "#fff" },
                label: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />

            {/* Message */}
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
              size="small"
              value={formData.message}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ alignSelf: "flex-start" }}>
                    <MessageIcon sx={{ color: "#fff", mt: 1 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 1,
                input: { color: "#fff" },
                label: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                mt: 1,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};



function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Suspense fallback={<Loader />}> */}
        <ScrollToTop/>
          <NewsTicker />
          <Navbar />
<WhatsApp/>
<FloatingForm/>
{isMobile &&<PhoneCallButton/>}

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
