import React from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img5 from "../assets/osgenpower_Untitleddesign.jpg";
import GradientButton from "./ContactButtons";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1 * (i + 5),
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
  hover: {
    scale: 1.05,
    backgroundColor: "#ff4400",
    x: 5,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
};

const ServiceHighlightSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // ⭐ Add navigation path for each button
  const serviceButtons = [
    { text: "Generator Sales", color: "#9e1c60", path: "/Generatorsales/Delearership/Rental" },
    { text: "Generator Services", color: "#9e1c60", path: "/services/kirloskar" },
    { text: "Generator Rental", color: "#9e1c60", path: "/services/kirloskar" },
    { text: "Dealers Support", color: "#9e1c60", path: "/contact" },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            flex: "1",
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            maxWidth: isMobile ? "100%" : "50%",
          }}
        >
          <Box
            component={motion.img}
            src={img5}
            alt="Kirloskar Generator Services"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2 }}
            loading="lazy"
            sx={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* Floating badges */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#ff4400",
              py: 0.5,
              px: 2,
              borderRadius: "30px",
              fontWeight: "bold",
              fontSize: "0.85rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              zIndex: 2,
            }}
          >
            5kVA to 1500kVA
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            sx={{
              position: "absolute",
              top: 20,
              left: 200,
              backgroundColor: "rgba(255, 68, 0, 0.9)",
              color: "white",
              py: 1,
              px: 2,
              borderRadius: "30px",
              fontWeight: "bold",
              fontSize: "0.85rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: 2,
            }}
          >
            Authorized Dealer
          </Box>
        </motion.div>

        {/* Content Section */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: isMobile ? "100%" : "50%",
          }}
        >
         <motion.div variants={itemVariants}>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    <Typography
      variant={isMobile ? "h5" : "h3"}
      fontWeight="bold"
      gutterBottom
      color="#ff4400"
    >
      Kirloskar Green Generators
    </Typography>

    <Box
      sx={{
        width: { xs: "80%", md: "50%" },
        height: 3,
        backgroundColor: "#ff6a00",
      }}
    />
  </Box>
</motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                // color: "#666",
                lineHeight: 1.8,
                // fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
             We are the Dealer for Kirloskar Green Generators(KGD) & we have an entire range of diesel generators which starts from 5kVA to 1500kVA DG sets. Our generators provide reliable power solutions for businesses of all sizes across various industries.
            </Typography>
          </motion.div>

          {/* ⭐ Dynamic Buttons with Individual Navigation */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {serviceButtons.map((button, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="contained"
                  onClick={() => navigate(button.path)}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 3,
                    borderRadius: "8px",
                    textTransform: "none",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "white",
                    backgroundColor: button.color,
                    boxShadow: `0 4px 15px ${button.color}40`,
                    width: "100%",
                    "&:hover": {
                      backgroundColor: button.color,
                      boxShadow: `0 6px 20px ${button.color}70`,
                    },
                  }}
                >
                  {button.text}
                </Button>
              </motion.div>
            ))}
          </Box>

          <motion.div variants={itemVariants}>
            <GradientButton />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceHighlightSection;
