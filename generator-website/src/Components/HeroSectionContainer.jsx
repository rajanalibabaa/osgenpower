import React, { memo } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import { lazy } from "react";
import img1 from "../assets/Herobannerbgimage.jpg"; // background image
import img2 from '../assets/Ecofriendlyimages.png'
import img3 from '../assets/HerSectionBanner.png'
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
    background: "linear-gradient(135deg, #ef0168ff 0%, #6b46c1 100%)",
    borderRadius: "12px",
    fontWeight: 600,
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.25, md: 1.5 },
    textTransform: "none",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    border: "none",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      background: "linear-gradient(135deg, #ef016893 0%, #6b46c191 100%)",
      transform: "translateY(-3px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5)",
    },
    "&:active": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
  },
  outlined: {
    color: "white",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: "2px",
    borderRadius: "12px",
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.25, md: 1.5 },
    textTransform: "none",
    fontWeight: 600,
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#1a202c",
      borderColor: "rgba(255, 255, 255, 0.9)",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(255, 255, 255, 0.2)",
    },
    "&:active": {
      transform: "translateY(0px)",
    },
  },
});

const HeroSectionModern = memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const buttonStyles = getButtonStyles(theme);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80svh", md: "100vh" }, // Use svh for mobile
        backgroundImage: {
          xs: `linear-gradient(rgba(5, 20, 40, 0.8), rgba(5, 20, 40, 0.8)), url(${img1})`,
          md: `linear-gradient(rgba(5, 20, 40, 0.6), rgba(5, 20, 40, 0.7)), url(${img1})`,
        },
        backgroundSize: "cover",
        backgroundPosition: { xs: "center right", md: "center" },
        backgroundRepeat: "no-repeat",
        color: "#fff",
        display: "flex",
        overflow: "hidden",
        minHeight: { xs: "600px", sm: "700px" },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            mt: { xs: "8vh", sm: "10vh", md: "12vh" },
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "700px" },
            px: { xs: 2, sm: 0 },
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
background: "linear-gradient(135deg, #ffd700 800%, #d24a1dff 10%, #ffffff 70%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      // textShadow: "0 2px 20px rgba(255, 255, 255, 0.3)",
      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))",
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
      // background: "linear-gradient(135deg, #ffffffff 0%, #34d399 50%, #fbbf24 100%)",
      background:'white',
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "'Inter', 'Roboto', sans-serif",
      letterSpacing: "0.5px",
      // textShadow: "0 1px 10px rgba(96, 165, 250, 0.3)",
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
      color: "#f8fafc",
      maxWidth: { xs: "100%", md: "600px" },
      fontWeight: 400,
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
      opacity: 0.95,
      "& strong": {
        color: "#71f320ff",
        fontWeight: 600,
      },
    }}
  >
    From homes to industries, we deliver <strong>uninterrupted power solutions</strong> 
    that combine performance, efficiency, and eco-conscious design. 
    <strong>Empower your business</strong> with the energy of innovation.
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
              <Button variant="contained" size="large" sx={buttonStyles.primary}>
                Explore Generators
              </Button>

              <Button variant="outlined" size="large" sx={buttonStyles.outlined}>
                Request Service
              </Button>

              {!isMobile && (
                <Button variant="outlined" size="large" sx={buttonStyles.outlined}>
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
      </Container>

      {/* Eco-friendly badge - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: isMobile ? 490 : 30,
          right: isMobile ? 10 : 30,
          zIndex: 3,
        }}
      >
        <img
          src={img2}
          alt="Eco Friendly"
          style={{
            width: isMobile ? 120 : isTablet ? 100 : 220,
            height: isMobile ? 110 : isTablet ? 100 : 200,
            objectFit: "contain",
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Hero image - Responsive positioning */}
      {!isMobile && (
        <motion.div
          variants={fadeInScale}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: isTablet ? 430 : 280,
            right: isTablet ? -20 : -60,
            zIndex: 1,
          }}
        >
          <img
            src={img3}
            alt="Generator"
            style={{
              width: isTablet ? 800 : 800,
              height: isTablet ? 520 : 430,
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: "absolute",
          bottom: isMobile ? 10 : 15,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: isMobile ? 25 : 30,
            height: isMobile ? 40 : 50,
            border: "4px solid rgba(254, 29, 33, 1)",
            borderRadius: 25,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <motion.div
            animate={{ y: [3, 15, 3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              width: 5,
              height: isMobile ? 18 : 16,
              backgroundColor: "#f6e424ff",
              borderRadius: 2,
              position: "absolute",
              top: 6,
              left: "43%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 8px rgba(0, 255, 0, 0.6)",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
});

HeroSectionModern.displayName = "HeroSectionModern";

export default HeroSectionModern;
