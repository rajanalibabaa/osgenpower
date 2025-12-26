import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import img from "../assets/osgenpower_Untitleddesign.jpg"; // change your image
import { useNavigate } from "react-router-dom";
const stats = [
  { value: "40+", label: "Completed Projects" },
  { value: "95%", label: "Satisfaction Customers" },
  { value: "16", label: "Construction Awards" },
];

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ py: { xs: 4, md: 10 }, px: { xs: 2, md: 8 } , backgroundColor: "#ffffffff" }}>
      <Grid
        container
        spacing={6}
        alignItems="center"
        component={motion.div}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT SECTION */}
        <Grid item xs={12} md={6}>
          <motion.div variants={item}>
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
            WHY CHOOSE US
        </Box>
          </motion.div>

          <motion.div variants={item}>
            <Typography
                variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            color: "#000000ff",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
            >
              OUR REPUTATION IS BUILT ON SUCCESS
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Typography
             sx={{
            color: "#000000ff",
            lineHeight: 1.7,
            mb: 4,
            fontSize: { xs: "1rem", md: "1rem" },
            maxWidth: "600px",
          }}
            >
              We blend cutting-edge technology with eco-friendly practices to
              build structures that stand the test of time. Our commitment to
              quality, efficiency and sustainability ensures every project is
              built for the future.
            </Typography>
          </motion.div>

          {/* STATISTICS */}
         <Box
  component={motion.div}
  variants={item}
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: 2, sm: 3, md: 6 },
    mb: 5,
  }}
>
  {stats.map((stat, index) => (
    <Box
      key={index}
      sx={{
        // Responsive border:
        borderRight: {
          xs: "none",                           // No border on small screens
          md: index < stats.length - 1 ? "1px solid #ddd" : "none",
        },
        pr: {
          xs: 0,
          md: index < stats.length - 1 ? 4 : 0,  // Padding only on desktop
        },

        // Make each stat block responsive
        flex: {
          xs: "100%",     // Full width on mobile
          sm: "45%",      // Two per row on tablets
          md: "auto",     // Natural width on desktop
        },

        textAlign: { xs: "center", md: "left" }, // Center on mobile
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
          fontWeight: 700,
          color: "#e81010",
        }}
      >
        {stat.value}
      </Typography>

      <Typography
        sx={{
          color: "#000000ff",
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  ))}
</Box>


          {/* BUTTONS */}
          <motion.div variants={item}>
            <Box sx={{ display: "flex", gap: 2,  }}>
              <Button
              onClick={navigate.bind(this, '/services/kirloskar')}
                variant="contained"
                sx={{
                  background: "#e81010",
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "6px",
                  "&:hover": { background: "#e81010" },
                }}
              >
                Explore Services →
              </Button>

              <Button
              onClick={navigate.bind(this, '/contact')}
                variant="outlined"
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: "6px",
                  borderColor: "#000000ff",
                  color: "#000000ff",
                  "&:hover": {
                    borderColor: "#e81010",
                    color: "#e81010",
                  },
                }}
              >
                Start Your Project →
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT SECTION (IMAGE) */}
        <Grid item xs={12} md={6}>
          <motion.div variants={item}>
            <Box
              component="img"
              src={img}
              alt="why choose us"
              loading="lazy"
              sx={{
                width: { xs: "100%", md: "70vh" },
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
