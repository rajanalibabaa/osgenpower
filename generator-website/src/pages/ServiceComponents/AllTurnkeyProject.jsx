import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Card, Stack,Chip ,Paper  } from "@mui/material"; 
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import img2 from "../../assets/TurnkeyServiceimage.jpg"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AllTurnkeyProject = () => {
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
          height: 300,
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
          Turnkey Project Undertaken 
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
 Hiring <strong>5kVA to 1500kVA</strong> compliance generators with enhanced fuel efficiency and EU environmental standards.
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
    TURNKEY 
  </Box>{" "}
  PROJECT
</Typography>

        
        <Box sx={{ height: 4, width: 60, background: "linear-gradient(90deg, #4CAF50, #009688)", mb: 3, borderRadius: 2 }} />
        
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "1.05rem" }}>
Our hire fleet ranges in size from <strong>10kVA – 1250kVA</strong>. All our generators comply with the latest European Union Environmental Standards for exhaust emissions, fuel efficiency and noise pollution. Each undergo a rigourous and comprehensive safety and load test prior to dispatch to ensure they can deliver a reliable supply of electricity when you need it.        </Typography>
      </Box>
      
      {/* Image Side */}
     <Box sx={{ flex: 0.8, position: "relative", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                  src={img2}
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
              </Box>
            </Box>
  </Card>
</motion.div>



{/* O2E Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <Box
    sx={{
      mt: 4,
      px: { xs: 2, md: 8 },
      py: { xs: 6, md: 10 },
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative angled gradient stripe */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(120deg, rgba(0,255,157,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,255,157,0.05) 100%)",
        zIndex: 0,
        opacity: 0.5,
      }}
    />

    <Grid
      container
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{ position: "relative", zIndex: 1 }}
    >
      {/* Left side — minimal visual / icon */}
      <Grid item xs={12} md={5} textAlign="center">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
          <motion.div
            animate={{
              y: [0, -11, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BoltOutlinedIcon
              sx={{
                fontSize: 80,
                color: "#4CAF50",
                filter: "drop-shadow(0 0 20px rgba(76,175,80,0.5))",
          
              }}
            />
          </motion.div>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              background: "linear-gradient(90deg, #00e676, #00bfa5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              letterSpacing: 1,
            }}
          >
            O2E SERIES
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontWeight: 400,
            letterSpacing: 2,
          }}
        >
          Optimal Operating Efficiency
        </Typography>
      </Grid>

      {/* Right side — text content */}
      <Grid item xs={12} md={7}>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.15rem",
            lineHeight: 1.9,
          }}
        >
       Genset ratings are selected based on the present load and future expansion. Fuel efficiency of most Gensets is optimized at the full rating of the Genset. In practice, Gensets rarely get loaded to full capacity. Power demand varia&tions across day & night, weekdays & weekends.
          <br />
          <br />
         Summer & winter lead to an average 50-70% loading on the gensets. Considering this practical situation,  <Box
            component="span"
            sx={{ color: "#4CAF50", fontWeight: 600 }}
          >
            KOEL
          </Box> has extended fuel efficiency optimization from 100%, right up to 50% of rated load. Combination of best-in-class fuel efficiency & <Box
            component="span"
            sx={{ color: "#4CAF50", fontWeight: 600 }}
          >
           O2E
          </Box> provides a double advantage.
        </Typography>

      
      </Grid>
    </Grid>
  </Box>
</motion.div>
     
      </Container>
    </Box>
  );
};

export default AllTurnkeyProject;