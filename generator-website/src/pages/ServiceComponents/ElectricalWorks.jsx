// src/pages/ServiceComponents/ElectricalWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import  Card  from "@mui/material/Card"; 
import Typography from "@mui/material/Typography"; 
import  Container from "@mui/material/Container"; 
import Box from "@mui/material/Box"; 

import img3 from "../../assets/osgenpower_ElectricalWorksServiceimage.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ElectricalWorks = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #081a20 0%, #1f4640 100%)",
        color: "#fff",
        py: { xs: 8, sm: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing background effects */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #00ff99 0%, transparent 70%)",
          opacity: 0.15,
          top: "10%",
          right: "10%",
          filter: "blur(120px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 100,
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #1de9b6 0%, transparent 70%)",
          opacity: 0.15,
          bottom: "10%",
          left: "10%",
          filter: "blur(100px)",
          animation: "pulse 5s infinite alternate",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.1)" },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Typography
            variant="h3"
            fontWeight={1000}
            textAlign="center"
            sx={{
              background: "linear-gradient(90deg, #00e676, #00bfa5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            }}
          >
            Electrical Work in Commercial Premises
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              color: "#d1fff0",
              mb: { xs: 5, md: 8 },
              fontWeight: 300,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            }}
          >
            Different Careers Opportunities in the Electrical Trades
          </Typography>
        </motion.div>

        {/* Main Card Section */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(16px)",
              borderRadius: "32px",
              border: "1px solid rgba(76, 175, 80, 0.2)",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              backgroundImage: `
                radial-gradient(at 80% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                radial-gradient(at 20% 80%, rgba(0, 150, 136, 0.1) 0%, transparent 50%)
              `,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Text Side */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 3, sm: 4, md: 6 },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{
                    color: "white",
                    mb: 2,
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  <Box component="span" sx={{ color: "#4CAF50" }}>
                    ELECTRICAL
                  </Box>{" "}
                  WORKS
                </Typography>

                <Box
                  sx={{
                    height: 4,
                    width: { xs: 50, sm: 60 },
                    mx: { xs: "auto", lg: 0 },
                    background: "linear-gradient(90deg, #4CAF50, #009688)",
                    mb: 3,
                    borderRadius: 2,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    textAlign: { xs: "center", lg: "justify" },
                  }}
                >
                  Individuals who work in the electrical trades are commonly
                  referred to as electricians. They may be involved with either
                  construction or maintenance of electrical wiring and systems
                  in residential, commercial or municipal environments.
                  Different types of electricians perform different tasks, such
                  as reading blueprints, installing and maintaining wiring,
                  inspecting electrical components or identifying and repairing
                  electrical problems. Different career opportunities for
                  workers in the electrical trades include inside wiremen,
                  outside linemen, residential wiremen and installer technicians.
                </Typography>
              </Box>

              {/* Image Side */}
              <Box
                sx={{
                  flex: 0.8,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: { xs: 3, sm: 4, md: 6 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(0, 150, 136, 0.1) 100%)",
                    clipPath: {
                      xs: "none",
                      lg: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                />
                <Box
                  component="img"
                  src={img3}
                  alt="Electrical Works"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: { xs: "90%", sm: "80%", md: "70%", lg: "75%" },
                    maxWidth: { xs: 300, sm: 350, md: 400 },
                    borderRadius: "16px",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    console.log("Image failed to load");
                    e.target.style.display = "none";
                  }}
                />
              </Box>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ElectricalWorks;
