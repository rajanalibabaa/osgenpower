import React from 'react';
import  Grid from '@mui/material/Grid';
import  {useTheme}  from "@mui/material/styles";
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
  { 
    title: '24/7 Smart Support & Maintenance',
    icon: icon1,
    alt: "24/7 support icon"
  },
  { 
    title: 'IoT-Enabled Generator Insights',
    icon: icon2,
    alt: "IoT insights icon"
  },
  { 
    title: 'Energy Efficient & Eco Friendly',
    icon: icon3,
    alt: "Eco friendly icon"
  },
  { 
    title: 'Certified Global Service Network',
    icon: icon4,
    alt: "Certified service icon"
  }
];

// New Animation variants for a dynamic, staggered slide-up effect
const containerVariants = {
  hidden: { opacity: 0, y: 80 }, // Start further down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slower duration for a smoother reveal
      ease: "easeOut",
      staggerChildren: 0.15 // Increased stagger for better visual separation
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 }, // Start slightly lower and smaller
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: 'spring', 
      damping: 15, 
      stiffness: 120 
    } // Use a spring for a slightly bouncy feel
  }
};
const WhoWeAre = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
    <motion.div variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        color: '#000',
        py: { xs: 0, md: 3 },
        px: { xs: 2, sm: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%' }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          gutterBottom
          color="#ff4400"
        >
          Who We Are
        </Typography>
        
        <Box
          sx={{
            width: 80,
            mx: "auto",
            mb: 3,
            backgroundColor: "#ff6a00",
            height: 3,
          }}
        />

        <Typography
          variant="body1"
          sx={{
            maxWidth: '950px',
            mx: 'auto',
            mb: { xs: 4, md: 6 },
            color: 'rgba(0, 0, 0, 0.85)',
            lineHeight: 1.8,
            fontWeight: 500,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          We are Chennai's leading distributors and suppliers of diesel generators and gensets, delivering power solutions that combine reliability, performance, and innovation. As trusted Kirloskar dealers, we empower industries and businesses with eco-efficient and intelligent energy solutions.
        </Typography>
 <motion.div variants={itemVariants} // Applied the new item variant here
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
        <Box 
  sx={{ 
    width: '100%', 
    mb: 6,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: { xs: '40px', sm: 0 },
      background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.9))',
      zIndex: 2,
      pointerEvents: 'none',
      display: { xs: 'block', md: 'none' }
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: { xs: '40px', sm: 0 },
      background: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.9))',
      zIndex: 2,
      pointerEvents: 'none',
      display: { xs: 'block', md: 'none' }
    }
  }}
>
  <Box
    sx={{
      overflow: { xs: 'auto', md: 'visible' },
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none', // For Firefox
      msOverflowStyle: 'none', // For IE and Edge
      '&::-webkit-scrollbar': {
        display: 'none' // For Chrome, Safari, and Opera
      },
      pb: 2 // Extra padding to account for scroll indicators
    }}
  >
    <Grid 
      container
      sx={{
        flexWrap: { xs: 'nowrap', md: 'wrap' },
        width: { xs: 'max-content', md: '100%' },
        pr: { xs: 4, md: 0 },
        ml: { xs: 0, md: 4 }
      }}
      spacing={2}
    >
      {highlights.map((item, index) => (
        <Grid 
          item 
          sx={{ 
            width: { xs: '200px', sm: '220px', md: '320px' },
            // flex: { xs: '0 0 auto', md: 'unset' }
          }} 
          md={3} 
          key={index}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              type: 'spring',
              stiffness: 300, 
              damping: 15, 
              delay: index * 0.1 
            }}
          >
            <Paper
              elevation={3}
              sx={{
                background: 'white',
                p: { xs: 2, sm: 3 },
                borderRadius: { xs: '16px', md: '20px' },
                color: '#000000',
                fontWeight: 600,
                border: '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                position: 'relative',
                height: '100%',
                minHeight: '130px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                pb: { xs: 2, md: 0 },
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
                //   boxShadow: '0 8px 25px rgba(255,104,0,0.25)',
                  borderColor: 'rgba(255,104,0,0.3)'
                },
              }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Box 
                  component="img"
                  src={item.icon}
                  alt={item.alt}
                  loading="lazy"
                  sx={{ 
                    zIndex: 1, 
                    mb: 1, 
                    width: { xs: 40, sm: 45, md: 50 },
                    height: 'auto'
                  }}
                />
              </motion.div>
              <Typography 
                variant={isMobile ? "body2" : "subtitle2"}
                sx={{ 
                  zIndex: 1, 
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                  lineHeight: 1.3
                }}
              >
                {item.title}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>

  {/* Scroll indicators for mobile */}
  <Box 
    sx={{ 
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'center',
      mt: 2,
      gap: 1
    }}
  >
    {highlights.map((_, index) => (
      <Box 
        key={index}
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 102, 0, 0.7)',
          transition: 'all 0.3s ease',
          '&.active': {
            backgroundColor: 'rgba(246, 246, 246, 0.8)',
            width: '24px',
            borderRadius: '4px'
          }
        }}
      />
    ))}
  </Box>
</Box>

        </motion.div>
        <ContactButtons/>
        <Box
          component="img"
          src={img4}
          alt="Generator Highlight"
          loading="lazy"
          sx={{ 
            mt: { xs: 4, md: 3 },
            
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}
        />
      </motion.div>
    </Box>
    </motion.div>

    </>

  );
};

export default WhoWeAre;
