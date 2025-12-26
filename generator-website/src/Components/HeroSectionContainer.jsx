import React, { memo, useMemo, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import img1 from "../assets/osgenpower_Herobannerbgimage.jpg"; // Background image 1
import img2 from "../assets/osgenpowerhero1.jpg"; // Background image 2
import img3 from "../assets/osgenpowerhero2.jpg"; // Background image 3
import img4 from "../assets/osgenpowerhero3.jpg"; // Background image 4
import img5 from "../assets/osgenpowerhero4.jpg"; // Background image 5

import { useNavigate } from "react-router-dom";
import { InputAdornment, Paper, IconButton, TextField } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";

// Optimized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.7, x: 150 },
  animate: { opacity: 1, scale: 1, x: 0 },
};

// Memoized button styles for better performance
const getButtonStyles = (theme) => ({
  primary: {
    background: "linear-gradient(135deg, #e81010 0%, #e81010 100%)", // Red gradient
    borderRadius: "12px",
    fontWeight: 600,
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.25, md: 1.5 },
    textTransform: "none",
    boxShadow: "0 4px 15px rgba(232, 16, 16, 0.4)", // Updated to red shadow
    border: "none",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: "linear-gradient(135deg, #c81010 0%, #c81010 100%)", // Darker red on hover
      transform: "translateY(-3px)",
      boxShadow: "0 8px 25px rgba(232, 16, 16, 0.5)", // Red shadow
    },
    "&:active": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 15px rgba(232, 16, 16, 0.4)",
    },
  },
  outlined: {
    color: "#ffffffff",
    borderColor: "rgba(255, 255, 255, 0.8)", // Red border
    borderWidth: "2px",
    borderRadius: "12px",
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.25, md: 1.5 },
    textTransform: "none",
    fontWeight: 600,
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    background: "rgba(201, 200, 200, 0.1)", // Red tint
    // backdropFilter: "blur(10px)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      // backgroundColor: "rgba(232, 16, 16, 0.2)",
      color: "#fff",
      borderColor: "rgba(232, 16, 16, 1)",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(232, 16, 16, 0.3)", // Red shadow
    },
    "&:active": {
      transform: "translateY(0px)",
    },
  },
});

const FloatingForm = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    altMobile: "",
    message: "",
  });

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

  return (
    <>
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Paper
            elevation={0} // Remove default shadow for modern glassmorphism
            sx={{
              mt: 12,
              mr: 5,
              width: 350,
              height: 420, // Slightly taller for modern spacing
              p: 3,
              zIndex: 9999,
              background: "#ff9c45ff", // Glassmorphism background
              // backdropFilter: "blur(20px)", // Modern blur effect
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#000000ff",
              borderRadius: "20px", // Softer rounded corners
              position: "relative",
              overflow: "hidden",
              // Add subtle gradient overlay for depth
              // "&::before": {
              //   content: '""',
              //   position: "absolute",
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   height: "2px",
              //   background: "linear-gradient(90deg, #e81010, #e81010)",
              // },
            }}
          >
            {/* Modern Title with Gradient */}
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 3,
                mt: 1,
                // color: "#",
                fontWeight: 700,
                background: "#ffffffff",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get in Touch
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              {/* Full Name - Modern Input Styling */}
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
                      <PersonIcon sx={{ color: "#e81010" }} /> {/* Red icon */}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2.5,
                  input: { color: "#ffffffff" },
                  label: { color: "rgba(255, 255, 255, 1)" },
                  fieldset: {
                    borderColor: "rgba(255, 255, 255, 1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffffff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f3f3f3ff",
                  },
                  
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ffffffff", 
                  },
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
                      <PhoneIcon sx={{ color: "#e81010" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2.5,
                  input: { color: "#ffffffff" },
                  label: { color: "rgba(255, 255, 255, 0.8)" },
                  fieldset: {
                    borderColor: "rgba(255, 255, 255, 1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffffff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f3f3f3ff",
                  },
                  
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ffffffff", 
                  },
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
                      <PhoneIcon sx={{ color: "#e81010" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2.5,
                  input: { color: "#ffffffff" },
                  label: { color: "rgba(255, 255, 255, 1)" },
                  fieldset: {
                    borderColor: "rgba(255, 255, 255, 1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffffff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f3f3f3ff",
                  },
                  
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ffffffff", 
                  },
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
                      <MessageIcon sx={{ color: "#e81010", mt: 1 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2.5,
                  input: { color: "#ffffffff" },
                  label: { color: "rgba(255, 255, 255, 1)" },
                  fieldset: {
                    borderColor: "rgba(255, 255, 255, 1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffffff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffffff",
                  },
                  
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ffffffff", 
                  },
                }}
              />

              {/* Modern Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #e81010 0%, #e81010 100%)",
                  borderRadius: "10px",
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(135deg, #c81010 0%, #c81010 100%)", // Darker red
                    transform: "scale(1.02)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </motion.div>
      )}
    </>
  );
};

const HeroSectionModern = memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const buttonStyles = getButtonStyles(theme);
  const navigate = useNavigate();

  // Slideshow state for background images
  const images = [ img2, img3, img4, img5]; // 5 images for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Memoize current background URL
  const currentBackground = useMemo(
    () => images[currentImageIndex],
    [currentImageIndex, images]
  );

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80svh", md: "100vh" },
        backgroundSize: "cover",
        backgroundPosition: { xs: "center right", md: "center" },
        backgroundRepeat: "no-repeat",
        color: "#fff",
        display: "flex",
        overflow: "hidden",
        minHeight: { xs: "600px", sm: "700px", md: "600px" },
      }}
    >
 
 <AnimatePresence mode="popLayout">
  <Box
    key={currentImageIndex}
    initial={{ x: "100%", opacity: 0 }}   // slide from right
    animate={{ x: "10%", opacity: 0 }}     // enter to center
    exit={{ x: "-100%", opacity: 0 }}     // slide out to left
    transition={{  ease: "easeInOut" }}
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${currentBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundBlendMode: "overlay",
      backdropFilter: " blur(55px)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* DARK OVERLAY (also animated) */}
    <Box
     
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#00000058", // Semi-transparent black
      }}
    />
  </Box>
</AnimatePresence>


     

      <Box sx={{ position: "absolute", zIndex: 0, width: "100%",mt: { xs: "0vh", md: "10vh" }, display: { xs: "block", md: "flex", justifyContent: "space-evenly" } }}>
        <Box
          sx={{
            mt: { xs: "16vh", sm: "10vh", md: "15vh" },
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "50%" },
            px: { xs: 2, sm: 0 },
            ml: { xs: 0, md: 5 },
          }}
        >
          {/* Main Heading */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: { xs: 600, md: 700 },
                lineHeight: { xs: 1.1, md: 1.2 },
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                mb: { xs: 1.5, md: 2 },
                background: "linear-gradient(135deg, #ffffffff 0%, #ffffff 100%)", // Gold-white gradient for visibility on black overlay
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))", // Subtle glow
              }}
            >
              Power That Drives the Future Generations
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: { xs: 2, md: 4 },
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                background: "linear-gradient(135deg, #ffffff 0%, #ffffffff 50%, #ffffffff 100%)", // White to red to gold for vibrancy
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Inter', 'Roboto', sans-serif",
                letterSpacing: "0.5px",
              }}
            >
              Reliable Generators • Smart Energy • Sustainable Solutions
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                mb: { xs: 3, sm: 4, md: 5 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#ffffffff",
                maxWidth: { xs: "100%", md: "600px" },
                fontWeight: 400,
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
                opacity: 0.95,
                "& strong": {
                  color: "#ffffffff", // Red highlight to match theme
                  fontWeight: 600,
                },
              }}
            >
              From homes to industries, we deliver <strong>uninterrupted power solutions</strong>
              that combine performance, efficiency, and eco-conscious design.
              <strong> Empower your business</strong> with the energy of innovation.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 2 },
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button variant="contained" size="large" sx={buttonStyles.primary} onClick={() => navigate("/Generatorsales/Delearership/Rental")}>
                Explore Generators
              </Button>

              <Button variant="outlined" size="large" sx={buttonStyles.outlined} onClick={() => navigate("/contact")}>
                Request Service
              </Button>

              {!isMobile && (
                <Button variant="outlined" size="large" sx={buttonStyles.outlined} onClick={() => navigate("/contact")}>
                  Request Dealership
                </Button>
              )}
            </Box>

            {/* Third button for mobile - stacked */}
            {isMobile && (
              <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" size="large" sx={buttonStyles.outlined}>
                  Request Dealership
                </Button>
              </Box>
            )}
          </motion.div>
        </Box>
        <FloatingForm />
      </Box>

     
    </Box>
  );
});

HeroSectionModern.displayName = "HeroSectionModern";

export default HeroSectionModern;













