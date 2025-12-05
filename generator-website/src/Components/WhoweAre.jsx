import Grid from '@mui/material/Grid';
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from 'framer-motion';
import img4 from "../assets/osgenpower_generatorhignlight.jpg";
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
            backgroundColor: '#ffffff',
            py: { xs: 2, md: 4 },
            px: { xs: 2, sm: 4, md: 8 },
            textAlign: 'center'
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            fontWeight="bold"
            color="#ff4400"
            gutterBottom
          >
            Who We Are
          </Typography>

          <Box sx={{ width: 80, height: 3, backgroundColor: "#ff6a00", mx: "auto", mb: 3 }} />

          <Typography
            variant="body1"
            sx={{
              maxWidth: '950px',
              mx: 'auto',
              px: { xs: 2, md: 10 },
              mb: { xs: 4, md: 6 },
              color: 'rgba(0, 0, 0, 0.85)',
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
           We are Chennai's leading distributors and suppliers of diesel generators and gensets, delivering power solutions that combine reliability, performance, and innovation. As trusted Kirloskar dealers, we empower industries and businesses with eco-efficient and intelligent energy solutions.
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
                mb  : 3,
                gap: 2,
                overflowX: { xs: "auto", md: "visible" },
                scrollBehavior: "smooth",
                pb: { xs: 2, md: 0 },
                "&::-webkit-scrollbar": { display: "none" }
              }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      minWidth: { xs: "200px", sm: "240px", md: "280px" },
                      maxHeight: { xs: "200px", sm: "240px", md: "280px" },
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
                </motion.div>
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

          <Box
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
          />
        </Box>
      </motion.div>
    </>
  );
};

export default WhoWeAre;
