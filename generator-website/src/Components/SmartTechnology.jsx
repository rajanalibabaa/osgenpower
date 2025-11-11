import React from "react";
import { Box, Typography, Grid, Paper, useTheme, useMediaQuery,Card, } from "@mui/material";
import { motion } from "framer-motion";
import img1 from '../assets/Realtimegeneratormonitoring.jpg'
import img2 from '../assets/PredictiveMaintenanceAlerts.jpg'
import img3 from '../assets/AutomaticLoadBalancing.jpg'
import img4 from '../assets/RemoteDiagnosticsSupport.jpg'
import img5 from '../assets/EnergyEfficiencyReports.jpg'

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

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 3, md: 8 },
        bgcolor: "#ffffffff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant={isSm ? "h4" : "h3"} fontWeight="bold" gutterBottom color="#ff4400ff">
          Smart Technology
        </Typography>
        <Box sx={{ maxWidth: 200, mx: "auto", mb: 5,  backgroundColor: "#ff6a00ff", height: 3}}/>
        <Typography
          variant="body1"
          sx={{ maxWidth: 600, mx: "auto", color: "#555", mb: 6 }}
        >
          We integrate the latest IoT & AI technologies to give our customers smarter insights,
          better uptime, and lower running costs.
        </Typography>
      </motion.div>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
  {features.map((feature, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        whileHover={{ 
          y: -15, 
          transition: { duration: 0.3 } 
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
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            //   background: "rgba(255, 255, 255, 0.05)",
            //   backdropFilter: "blur(10px)",
            },
            "&:hover": {
              boxShadow: "0 20px 40px rgba(133, 234, 102, 0.3)",
              "& .feature-icon": {
                transform: "scale(1.1) rotate(5deg)",
              },
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* <Box
              className="feature-icon"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                // background: "rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                transition: "all 0.3s ease",
                // backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h3"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {index + 1}
              </Typography>
            </Box> */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#ffffffff",
                lineHeight: 1.3,
                textShadow: "5px 5px 10px rgba(0,0,0,0.3)",
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

    </Box>
  );
};

export default SmartTechnology;
