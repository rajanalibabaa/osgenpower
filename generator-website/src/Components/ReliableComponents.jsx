import { Box, Typography, Button,useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Replace with your images
import imgMain from "../assets/osgenpowerAboutsec1.jpg";
import imgSmall from "../assets/osgenpowerAboutsec2.jpg";

const   ReliablePowerSection = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#ffffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // mb: { xs: 1, md: 20 },
        gap: { xs: 4, md: 8 },
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >

      {/* LEFT IMAGES AREA */}
      <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" } }}>
        {/* Main Image */}
        <motion.img
          src={imgMain}
          alt="Reliable Power"
          style={{
            width: "100%",
            borderRadius: 4,
            boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Small Overlapping Image */}
        {!isMobile && (  
            <> <motion.img
          src={imgSmall}
          alt="Power Solutions"
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-30px",
            width: "50%",
            borderRadius: 4,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        /></>  
        )}
      </Box>

      {/* RIGHT CONTENT AREA */}
      <Box sx={{ width: { xs: "100%", md: "45%", }}}>
        
        {/* Section Label */}
        <Box
          sx={{
            background: "#e81010",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 2,
            color: "white",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          OUR POWER EXPERTISE
        </Box>

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Reliable Power Solutions for Every Need
        </Typography>

        {/* Description */}
        <Typography
        
          sx={{
            color: "#444",
            lineHeight: 1.7,
            mb: 4,
            fontSize: { xs: "1rem", md: "1rem" },
            maxWidth: "600px",
          }}
        >
          Om Shakthi Gen Power is a trusted leader in power generation solutions
          across Tamil Nadu. With more than <strong>1000+ installations in Chennai</strong>
          and <strong>1500+ across Tamil Nadu</strong>, we deliver dependable,
          high-quality generators backed by professional service support.
          <br /><br />
          As an <strong>Authorized Dealer of Kirloskar (KOEL) Generators</strong>,
          we provide world-class DG sets with unmatched efficiency, durability,
          and performance.
        </Typography>

        {/* Button */}
        <Button
        onClick={navigate.bind(this, '/services/kirloskar')}
          variant="contained"
          sx={{
            background: "#e81010",
            px: 3,
            py: 1.5,
            borderRadius: "4px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#c81010" },
          }}
        >
          LEARN MORE →
        </Button>
      </Box>
    </Box>
  );
};

export default ReliablePowerSection;
