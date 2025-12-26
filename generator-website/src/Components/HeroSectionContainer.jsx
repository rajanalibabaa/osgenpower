import React, { memo, useMemo, useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import img2 from "../assets/osgenpowerHeroSec1.png";
import img3 from "../assets/2.png";
import img4 from "../assets/3.png";
import img5 from "../assets/4.png";
import { useNavigate } from "react-router-dom";

// Slide data with different content for each image
const slideData = [
  {
    id: 1,
    image: img2,
    title: "Power That Drives the Future",
    subtitle: "Industrial Generators • Heavy Duty • Commercial Solutions",
    description: "Experience unmatched reliability with our industrial-grade generators. Built for continuous operation and designed to power your most demanding applications with precision and efficiency.",
    primaryBtn: "View Industrial Range",
    secondaryBtn: "Get Quote",
    gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
    theme: "industrial"
  },
  {
    id: 2,
    image: img3,
    title: "Smart Energy Solutions",
    subtitle: "Home Backup • Smart Control • Eco-Friendly",
    description: "Transform your home energy experience with intelligent backup systems. Our smart generators automatically detect power outages and provide seamless energy transition for modern living.",
    primaryBtn: "Explore Home Series",
    secondaryBtn: "Smart Features",
    gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
    theme: "smart"
  },
  {
    id: 3,
    image: img4,
    title: "Portable Power Revolution",
    subtitle: "Outdoor Adventures • Mobile Power • Compact Design",
    description: "Take power anywhere with our lightweight, portable generators. Perfect for camping, events, and emergency situations. Clean energy that doesn't compromise on performance or portability.",
    primaryBtn: "Shop Portable",
    secondaryBtn: "Compare Models",
    gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
    theme: "portable"
  },
  {
    id: 4,
    image: img5,
    title: "Sustainable Energy Future",
    subtitle: "Green Technology • Solar Hybrid • Zero Emissions",
    description: "Join the renewable energy revolution with our hybrid solar generators. Combining traditional reliability with sustainable innovation for a cleaner, more efficient energy solution.",
    primaryBtn: "Green Solutions",
    secondaryBtn: "Learn More",
    gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
    theme: "sustainable"
  }
];

// Enhanced animation variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    scale: 0.9,
    transition: { duration: 0.4 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const buttonHoverVariants = {
  hover: { 
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.98,
    y: 0,
  }
};

const dotVariants = {
  inactive: { 
    scale: 1, 
    opacity: 0.4,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  active: { 
    scale: 1.2, 
    opacity: 1,
    backgroundColor: "#fff",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// Memoized button styles
const getButtonStyles = (theme) => ({
  primary: {
    background: "#f5c21b", // Red gradient
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
      borderColor: "#f5c21b",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(232, 16, 16, 0.3)", // Red shadow
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
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const buttonStyles = getButtonStyles(theme, slideData[currentSlide]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Manual slide change
  const goToSlide = useCallback((index) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoplay(false);
    
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoplay(true), 10000);
  }, [currentSlide]);

  const currentSlideData = slideData[currentSlide];

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "100vh" },
        overflow: "hidden",
        minHeight: { xs: "500px", sm: "800px", md: "700px" },
      }}
    >
      {/* Background Images with Animation */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${currentSlideData.image})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dynamic Overlay */}
        <Box
  sx={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0, 0, 0, 0.51) 30%, rgba(0, 0, 0, 0.34) 60%)",
    backdropFilter: "blur(1px)",
  }}
/>

        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      {/* <Box
        sx={{
          position: "absolute",
          left: { xs: 20, sm: 30, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
        }}
      >
        {slideData.map((_, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            animate={currentSlide === index ? "active" : "inactive"}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            style={{
              width: isMobile ? "12px" : "16px",
              height: isMobile ? "12px" : "16px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          />
        ))}
      </Box> */}

      {/* Progress Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "80%", sm: "300px" },
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "2px",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
          style={{
            height: "100%",
            background: "#f5c21b",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 5, height: "100%",mt:{xs:-12,md:10} }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            pt: { xs: 8, sm: 10, md: 0 },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "60%", lg: "50%" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 0 },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Title */}
                <motion.div variants={childVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: { xs: 700, md: 800 },
                      lineHeight: { xs: 1.1, md: 1.2 },
                      fontSize: {
                        xs: "2.2rem",
                        sm: "3rem",
                        md: "3.5rem",
                        lg: "4rem",
                      },
                      mb: { xs: 2, md: 3 },
                      background: currentSlideData.gradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {currentSlideData.title}
                  </Typography>
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={childVariants}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 500,
                      mb: { xs: 2, md: 3 },
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" },
                      color: "rgba(255, 255, 255, 1)",
                      letterSpacing: "0.5px",
                      // textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                    }}
                  >
                    {currentSlideData.subtitle}
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={childVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      mb: { xs: 4, sm: 5, md: 6 },
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      color: "rgba(255, 255, 255, 1)",
                      maxWidth: { xs: "100%", md: "600px" },
                      fontWeight: 400,
                      // textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    {currentSlideData.description}
                  </Typography>
                </motion.div>

                {/* Buttons */}
                <motion.div variants={childVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: 2, sm: 3 },
                      flexDirection: { xs: "row", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <motion.div
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={buttonStyles.primary}
                        onClick={() => navigate("/Generatorsales/Delearership/Rental")}
                      >
                        {currentSlideData.primaryBtn}
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        sx={buttonStyles.outlined}
                        onClick={() => navigate("/contact")}
                      >
                        {currentSlideData.secondaryBtn}
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Container>

      {/* Floating Elements for Visual Enhancement */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { xs: "60px", md: "100px" },
          height: { xs: "60px", md: "100px" },
          background: currentSlideData.gradient,
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />
    </Box>
  );
});

HeroSectionModern.displayName = "HeroSectionModern";

export default HeroSectionModern;