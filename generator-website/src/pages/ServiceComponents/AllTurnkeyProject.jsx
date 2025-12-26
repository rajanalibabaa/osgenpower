import React from "react";
import { motion } from "framer-motion";
import  Card  from "@mui/material/Card"; 
import Grid from "@mui/material/Grid"; 
import Typography from "@mui/material/Typography"; 
import Container from "@mui/material/Container"; 
import Box from "@mui/material/Box"; 

import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import img2 from "../../assets/osgenpower_TurnkeyServiceimage.jpg"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AllTurnkeyProject = () => {
  return (
     <Box
      sx={{
        // background: "linear-gradient(135deg, #081a20 0%, #1f4640 100%)", 
        color: "#000000ff",
        py: { xs: 12, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      


      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Typography
            variant="h3"
  fontWeight='bold'
            textAlign="center"
            sx={{
              background: "#e81010",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
          Turnkey Project Undertaken 
          </Typography>
<Box
      sx={{
        width: 270,
        mt:1,
        mb: 2,
        height: 3,
        backgroundColor: "#e81010",
        mx: "auto",
      }}
    />
          
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: "#000000ff",
              mb: 6,
              fontWeight: 400,
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
      // background: "rgba(255, 255, 255, 0.05)",
      // backdropFilter: "blur(16px)",
      borderRadius: "32px",
      border: "1px solid rgba(76, 175, 80, 0.2)",
      overflow: "hidden",
      position: "relative",
      // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
     
    }}
  >
    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, minHeight: 400 }}>
      {/* Content Side */}
      <Box sx={{ flex: 1, p: { xs: 3, lg: 4 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
       
        
       <Typography
  variant="h4"
  fontWeight={600}
  sx={{ color: "#e81010", mb: 2, whiteSpace: "nowrap" }}
>
  <Box component="span" sx={{ color: "#e81010", display: "inline" }}>
    TURNKEY 
  </Box>{" "}
  PROJECT
</Typography>

        
        <Box sx={{ height: 4, width: 60, background: "linear-gradient(90deg, #e81010, #b71c1c)", mb: 3, borderRadius: 2 }} />
        
        <Typography variant="body1" sx={{ color: "rgba(0, 0, 0, 0.8)", lineHeight: 1.7, fontSize: "1.05rem" }}>
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
                    // background: "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(0, 150, 136, 0.1) 100%)",
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
                    // boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
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
      px: { xs: 2, md: 5 },
      py: { xs: 6, md: 3 },
      position: "relative",
      backgroundColor: "#000000ff",
      overflow: "hidden",
    }}
  >
    {/* Decorative angled gradient stripe */}
    {/* <Box
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
    /> */}

    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{ position: "relative", zIndex: 1 }}
    >
      {/* Left side — minimal visual / icon */}
      <Grid item xs={12} md={5} textAlign="center">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <motion.div
            animate={{
              y: [0, -11, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BoltOutlinedIcon
              sx={{
                fontSize: 80,
                color: "#e81010ff",
                // filter: "drop-shadow(0 0 20px rgba(76,175,80,0.5))",
          
              }}
            />
          </motion.div>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              background: "white",
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
            color: "rgba(255, 255, 255, 1)",
            fontWeight: 400,
            letterSpacing: 1,
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
            color: "rgba(255, 255, 255, 1)",
            fontSize: "1.15rem",
            lineHeight: 1.5,
          }}
        >
       Genset ratings are selected based on the present load and future expansion. Fuel efficiency of most Gensets is optimized at the full rating of the Genset. In practice, Gensets rarely get loaded to full capacity. Power demand varia&tions across day & night, weekdays & weekends.
          <br />
          <br />
         Summer & winter lead to an average 50-70% loading on the gensets. Considering this practical situation,  <Box
            component="span"
            sx={{ color: "#e81010", fontWeight: 600 }}
          >
            KOEL
          </Box> has extended fuel efficiency optimization from 100%, right up to 50% of rated load. Combination of best-in-class fuel efficiency & <Box
            component="span"
            sx={{ color: "#e81010", fontWeight: 600 }}
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