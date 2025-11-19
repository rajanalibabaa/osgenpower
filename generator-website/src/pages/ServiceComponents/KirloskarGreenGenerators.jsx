import React from "react";
import { motion } from "framer-motion";


import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import img1 from "../../assets/osgenpower_KirloskarGreenimage.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const KirloskarGreenGenerators = () => {
  return (
    <Box
      sx={{
        background: "#ffffffff",
        color: "#fff",
        py: { xs: 4, sm: 6, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effects */}
      {/* <Box
        sx={{
          position: "absolute",
          width: { xs: 200, sm: 300, md: 400 },
          height: { xs: 200, sm: 300, md: 400 },
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #00ff99 0%, transparent 70%)",
          opacity: 0.15,
          top: "10%",
          right: { xs: "-10%", sm: "5%", md: "10%" },
          filter: "blur(80px)",
        }}
      /> */}
      {/* <Box
        sx={{
          position: "absolute",
          width: { xs: 150, sm: 250, md: 300 },
          height: { xs: 150, sm: 250, md: 300 },
          borderRadius: "50%",
          background: "radial-gradient(circle at center, #1de9b6 0%, transparent 70%)",
          opacity: 0.15,
          bottom: "10%",
          left: { xs: "-10%", sm: "5%", md: "10%" },
          filter: "blur(60px)",
          animation: "pulse 5s infinite alternate",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.1)" },
          },
        }}
      /> */}

      <Container maxWidth="lg">
        {/* Heading Section */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate"  >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{
              // background: "linear-gradient(90deg, #00e676, #00bfa5)",
              WebkitBackgroundClip: "text",
              color: "#eb2723",
              mb: 2,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3.5rem" },
              px: { xs: 1, sm: 2 },
            }}
          >
            KOEL Green Gensets
          </Typography>
<Box
      sx={{
        width: 270,
        mt:1,
        mb: 2,
        height: 3,
        backgroundColor: "#eb2723",
        mx: "auto",
      }}
    />
          
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              color: "#000000ff",
              mb: { xs: 4, md: 6 },
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              px: { xs: 2, sm: 3 },
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.1rem" },
            }}
          >
            Offering a unique blend of{" "}
            <strong>CPCB compliance</strong> and{" "}
            <strong>superior fuel efficiency</strong>, engineered for performance,
            reliability, and sustainability.
          </Typography>
        </motion.div>

        {/* Main Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              // backdropFilter: "blur(16px)",
              borderRadius: { xs: "20px", md: "32px" },
              border: "1px solid rgba(76, 175, 80, 0.2)",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              // backgroundImage: `
              //   radial-gradient(at 80% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
              //   radial-gradient(at 20% 80%, rgba(0, 150, 136, 0.1) 0%, transparent 50%)
              // `,
              mx: { xs: 1, sm: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                minHeight: { xs: "auto", lg: 400 },
              }}
            >
              {/* Content Side */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 2, sm: 3, lg: 4 },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    color: "white",
                    mb: 2,
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                >
                  <Box component="span" sx={{ color: "#4CAF50" }}>
                    KIRLOSKAR GREEN
                  </Box>{" "}
                  GENERATORS
                </Typography>

                <Box
                  sx={{
                    height: 4,
                    width: 60,
                    background: "linear-gradient(90deg, #4CAF50, #009688)",
                    mb: 1,
                    borderRadius: 2,
                    mx: { xs: "auto", lg: 0 },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  }}
                >
                  Our hire fleet ranges in size from{" "}
                  <strong>10kVA – 1250kVA</strong>. All our generators comply with
                  the latest European Union Environmental Standards for exhaust
                  emissions, fuel efficiency and noise pollution. Each undergoes a
                  rigorous safety and load test to ensure reliable power delivery.
                </Typography>
              </Box>

              {/* Image Side */}
              <Box
                sx={{
                  flex: { xs: "none", lg: 0.8 },
                  position: "relative",
                  minHeight: { xs: 250, sm: 300, md: 400 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  order: { xs: -1, lg: 0 },
                  mb: { xs: 3, lg: 0 },
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
                      "linear-gradient(235deg, rgba(76, 175, 79, 0.31) 0%, rgba(0, 150, 135, 0.87) 100%)",
                    clipPath: {
                      xs: "polygon(0% 0%, 100% 0, 100% 80%, 0% 100%)",
                      lg: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                />
                <Box
                  component="img"
                  src={img1}
                  alt="Kirloskar Generator"
                  loading="lazy"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: { xs: "70%", sm: "65%", lg: "80%" },
                    maxWidth: { xs: 280, sm: 320, lg: 340 },
                    borderRadius: "16px",
                    // boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  onError={(e) => {
e.target.src = "/fallback.jpg"; 
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
              mt: { xs: 4, md: 6 },
              px: { xs: 2, sm: 4, md: 8 },
              py: { xs: 6, sm: 8, md: 10 },
              position: "relative",
            }}
          >
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
              spacing={{ xs: 4, md: 2 }}
              alignItems="center"
              justifyContent="center"
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* Left side */}
              <Grid item xs={12} md={5} textAlign="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 1, sm: 2 },
                    mb: 1,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <BoltOutlinedIcon
                      sx={{
                        fontSize: { xs: 50, sm: 60, md: 80 },
                        color: "#31dd37ff",
                        filter: "drop-shadow(0 0 20px rgba(76,175,80,0.5))",
                      }}
                    />
                  </motion.div>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    sx={{
                      // background: "linear-gradient(90deg, #00e676, #00bfa5)",
                      WebkitBackgroundClip: "text",
                      color: "black",
                      letterSpacing: { xs: 0.5, sm: 1 },
                      fontSize: { xs: "1.75rem", sm: "2.25rem", md: "1.8rem" },
                    }}
                  >
                    O2E SERIES
                  </Typography>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: 500,
                    letterSpacing: { xs: 1, sm: 2 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Optimal Operating Efficiency
                </Typography>
              </Grid>

              {/* Right side */}
              <Grid item xs={12} md={7}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.15rem" },
                    lineHeight: 1.7,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Genset ratings are selected based on the present load and future
                  expansion. Fuel efficiency of most Gensets is optimized at the
                  full rating of the Genset. In practice, Gensets rarely get loaded
                  to full capacity. Power demand varies across day and night,
                  weekdays and weekends.
                  <br />
                  <br />
                  Summer & winter lead to an average 50–70% loading. Considering
                  this,{" "}
                  <Box component="span" sx={{ color: "#32e338ff", fontWeight: 600 }}>
                    KOEL
                  </Box>{" "}
                  has extended fuel efficiency optimization from 100% down to 50%
                  of rated load. Combination of best-in-class fuel efficiency &
                  <Box component="span" sx={{ color: "#34e73aff", fontWeight: 600 }}>
                    {" "}
                    O2E
                  </Box>{" "}
                  provides a double advantage.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default KirloskarGreenGenerators;
