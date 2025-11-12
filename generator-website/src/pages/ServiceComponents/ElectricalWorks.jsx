import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Card, Stack,Chip ,Paper  } from "@mui/material"; 
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";


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
        py: { xs: 6, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          animation: 'pulse 5s infinite alternate', 
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
          },
        }}
      />


      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Typography
            variant="h3"
  fontWeight={1000}
            textAlign="center"
            sx={{
              background: "linear-gradient(90deg, #00e676, #00bfa5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
            Electrical Work in Commercial Premises
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              color: "#d1fff0",
              mb: 6,
              fontWeight: 300,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
           Different Careers Opportunities in the Electrical Trades
          </Typography>
        </motion.div>

        {/* Main Description Card */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
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
    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, minHeight: 400 }}>
      {/* Content Side */}
      <Box sx={{ flex: 1, p: { xs: 3, lg: 4 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
       
        
       <Typography
  variant="h4"
  fontWeight={600}
  sx={{ color: "white", mb: 2, whiteSpace: "nowrap" }}
>
  <Box component="span" sx={{ color: "#4CAF50", display: "inline" }}>
    KIRLOSKAR GREEN
  </Box>{" "}
  GENERATORS
</Typography>

        
        <Box sx={{ height: 4, width: 60, background: "linear-gradient(90deg, #4CAF50, #009688)", mb: 3, borderRadius: 2 }} />
        
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "1.05rem" }}>
Individuals who work in the electrical trades are commonly referred to as electricians. They may be involved with either construction or maintenance of electrical wiring and systems in residential, commercial or municipal environments. Different types of electricians perform different tasks, such as reading blueprints, installing and maintaining wiring, inspecting electrical components or identifying and repairing electrical problems. Different career opportunities for workers in the electrical trades include inside wiremen, outside linemen, residential wiremen and installer technicians.        </Typography>
      </Box>
      
      {/* Image Side */}
     {/* <Box sx={{ flex: 0.8, position: "relative", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(0, 150, 136, 0.1) 100%)",
                    clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
                  }}
                />
                <Box
                  component="img"
                  src={img1}
                  alt="Kirloskar Generator"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "80%",
                    maxWidth: 340,
                    borderRadius: "16px",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  onError={(e) => {
                    console.log("Image failed to load");
                    e.target.style.display = 'none';
                  }}
                />
              </Box> */}
            </Box>
  </Card>
</motion.div>

     
      </Container>
    </Box>
  );
}

export default ElectricalWorks