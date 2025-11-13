import React, { useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import  {useTheme}  from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";


import { easeIn, motion } from "framer-motion";
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

  // 🔥 Added for scroll indicator
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // 🔥 Scroll tracking for dot indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const progress = scrollLeft / width;
      setScrollIndex(progress);
    };
    const container = scrollRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () => container && container.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, easeIn: "easeOut" } },
  };

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, md: 8 },
        bgcolor: "#fff",
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
        {isSm ? (
          // 🔥 Mobile horizontal scroll version
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              overflowY: "hidden",
              px: 1,
              pb: 2,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ flex: "0 0 80%", scrollSnapAlign: "center" }}
              >
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: 260,
                    background: `url(${feature.img}) center/cover no-repeat`,
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(255,106,0,0.35)",
                    },
                    willChange: "transform, opacity", // 🔥 GPU acceleration
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
                        color: "#fff",
                        lineHeight: 1.3,
                        textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </Box>
        ) : (
          // 🔥 Original grid view for larger screens
          <Grid container spacing={4} justifyContent="center" mb={{ xs: 4, md: 8 }}>
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
                      willChange: "transform, opacity",
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
                          color: "#fff",
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
        )}
      </motion.div>

      {/* 🔥 Dots indicator for mobile */}
      {isSm && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2,mb:3, gap: 0.8 }}>
          {features.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  Math.round(scrollIndex * (features.length - 1)) === i
                    ? "#ff4400"
                    : "rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      )}

      <ContactButtons />
    </Box>
  );
};

export default SmartTechnology;
