import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../assets/Realtimegeneratormonitoring.jpg";
import img2 from "../assets/PredictiveMaintenanceAlerts.jpg";
import img3 from "../assets/AutomaticLoadBalancing.jpg";
import img4 from "../assets/RemoteDiagnosticsSupport.jpg";
import img5 from "../assets/EnergyEfficiencyReports.jpg";
import ContactButtons from "./ContactButtons";

const features = [
  { img: img1, title: "Real-Time Generator Monitoring App" },
  { img: img2, title: "Predictive Maintenance Alerts" },
  { img: img3, title: "Automatic Load Balancing" },
  { img: img4, title: "Remote Diagnostics Support" },
  { img: img5, title: "Energy Efficiency Reports" },
];

const SmartTechnology = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  // Motion variants for smooth, batched animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // Faster sequence instead of delay * index
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 3, md: 8 },
        bgcolor: "#ffffffff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant={isSm ? "h4" : "h3"}
          fontWeight="bold"
          gutterBottom
          color="#ff4400ff"
        >
          Smart Technology
        </Typography>
        <Box
          sx={{
            maxWidth: 200,
            mx: "auto",
            mb: 5,
            backgroundColor: "#ff6a00ff",
            height: 3,
            borderRadius: 2,
          }}
        />
        <Typography
          variant="body1"
          sx={{ maxWidth: 600, mx: "auto", color: "#555", mb: 6 }}
        >
          We integrate the latest IoT & AI technologies to give our customers
          smarter insights, better uptime, and lower running costs.
        </Typography>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} justifyContent="center" mb={{xs: 4, md: 8}}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: "100%",
                    background: `url(${feature.img}) center/cover no-repeat`,
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 35px rgba(255,106,0,0.35)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      textAlign: "center",
                      backdropFilter: "blur(2px)",
                      p: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#ffffffff",
                        lineHeight: 1.3,
                        textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
      <ContactButtons />
    </Box>
  );
};

export default SmartTechnology;
