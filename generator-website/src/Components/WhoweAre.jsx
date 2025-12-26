import Grid from '@mui/material/Grid';
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from 'framer-motion';
// import img4 from "../assets/osgenpower_generatorhignlight.jpg";
import icon1 from "../assets/osgenpower_24-hours.png";
import icon2 from "../assets/osgenpower_Iot.png";
import icon3 from "../assets/osgenpower_green-power.png";
import icon4 from "../assets/osgenpower_quality-assurance.png";
import ContactButtons from './ContactButtons';

const highlights = [
  { title: '24/7 Smart Support & Maintenance', icon: icon1, alt: "24/7 support icon" },
  { title: 'IoT-Enabled Generator Insights', icon: icon2, alt: "IoT insights icon" },
  { title: 'Energy Efficient & Eco Friendly', icon: icon3, alt: "Eco friendly icon" },
  { title: 'Certified Global Service Network', icon: icon4, alt: "Certified service icon" }
];

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', damping: 15, stiffness: 120 }
  }
};

const WhoWeAre = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: "#ffffffff",
            py: { xs: 2, md: 10 },
            px: { xs: 2, sm: 4, md: 8 },
            // textAlign: 'center'
          }}
        >
         <Box
          sx={{
            background: "#e81010",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 4,
            color: "white",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          WHO WE ARE
        </Box>

          <Typography
            variant="h3"
          sx={{
            fontWeight: 700,
            color: "#000000ff",
            lineHeight: 1.2,
            mb: 5,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
          >
            Leading Distributor & Supplier of Diesel Generators in Chennai
          </Typography>
          <Typography
             sx={{
            color: "#000000ff",
            lineHeight: 1.7,
            mb: 4,
            fontSize: { xs: "1rem", md: "1rem" },
            maxWidth: "1000px",
          }}
          >
                       <strong>Om Shakthi Gen Power</strong> is a professionally managed company with strong expertise in <strong>Sales, Service, Projects, and Administration.</strong> Guided by the vast industry experience of <strong>Mr. S. Shenbagam</strong>, we have achieved rapid growth and earned the trust of customers across Tamil Nadu. <br/> <br/>

          <strong> We are Chennai's leading distributors and suppliers </strong> of diesel generators and gensets, delivering power solutions that combine reliability, performance, and innovation. <strong> As trusted Kirloskar dealers </strong>, we empower industries and businesses with eco-efficient and intelligent energy solutions.

          </Typography>



          {/* FIXED SCROLLABLE MOBILE CARDS */}
          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              mb: 4
            }}
          >
            <Box
              sx={{
                display: "flex",
                mt: 2,
                ml: 1,
                mr: 1,
                mb  : 3,
                gap: 5,
                overflowX: { xs: "auto", md: "visible" },
                scrollBehavior: "smooth",
                pb: { xs: 2, md: 0 },
                "&::-webkit-scrollbar": { display: "none" }
              }}
            >
              {highlights.map((item, index) => (
                
                  <Paper
                    elevation={3}
                    sx={{
                      maxWidth: { xs: "200px", sm: "240px", md: "300px" },
                      maxHeight: { xs: "200px", sm: "240px", md: "280px" },
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      paddingTop: 2,
                      p: 3,
                      borderRadius: "20px",
                      textAlign: "center",
                      // border: "1px solid rgba(0,0,0,0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        borderColor: "rgba(255,104,0,0.3)"
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.alt}
                      sx={{ width: 50, height: "auto", mb: 1 }}
                    />
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                  </Paper>
              ))}
            </Box>

            {/* Scroll Indicators */}
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", mt: 2, gap: 1 }}>
              {highlights.map((_, i) => (
                <Box key={i} sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,102,0,0.7)"
                }} />
              ))}
            </Box>
          </Box>

          <ContactButtons />

          {/* <Box
            component="img"
            src={img4}
            alt="Generator Highlight"
            loading="lazy"
            sx={{
              mt: 4,
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
            }}
          /> */}
        </Box>
      </motion.div>
    </>
  );
};

export default WhoWeAre;
