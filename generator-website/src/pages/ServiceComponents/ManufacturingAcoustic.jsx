import React from 'react';
import { motion } from 'framer-motion';


import Stack from '@mui/material/Stack';

import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import { EngineeringOutlined } from '@mui/icons-material';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const ManufacturingAcoustic = () => {
  const features = [
    {
      step: "01",
      title: "Largest Manufacturer",
      description: "Leading providers of acoustic solutions in India with comprehensive manufacturing capabilities"
    },
    {
      step: "02",
      title: "Noise Elimination",
      description: "Advanced technology to eliminate unwanted noise that hampers productivity"
    },
    {
      step: "03",
      title: "Integrated Solutions",
      description: "Complete acoustic enclosure systems with cutting-edge technology"
    },
    {
      step: "04",
      title: "Professional Combat",
      description: "Professional approach to combat various noise challenges effectively"
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 100%)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 230, 118, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 191, 165, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign="center" mb={{ xs: 5, md: 8 }}>
            <Typography
              variant="h3"
              fontWeight={1000}
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                background: "linear-gradient(90deg, #00e676, #00bfa5)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
              }}
            >
              Acoustic Enclosures Manufacturer
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#d1fff0",
                fontWeight: 300,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: '1rem', md: '1.2rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Manufacturers of Acoustic Enclosures, DG Set Sound Proof Enclosures, and Noise Canopies for Industrial Noise Control across India.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Card */}
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={10}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: { xs: 2, sm: 3, md: 4 },
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Grid container spacing={6} alignItems="flex-start">
                  
                  {/* Left Section */}
                  <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                      <EngineeringOutlined 
                        sx={{ 
                          fontSize: { xs: 32, md: 40 }, 
                          color: '#00e676',
                          background: 'rgba(0, 230, 118, 0.1)',
                          borderRadius: 2,
                          p: 1
                        }} 
                      />
                      <Box>
                        <Typography 
                          variant="h5" 
                          fontWeight="bold" 
                          sx={{color: 'white', fontSize: { xs: '1.3rem', md: '1.6rem' }}}
                        >
                          Kirloskar Green Generators
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00bfa5', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                          Ecotone Systems
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        mb: 3
                      }}
                    >
                      Ecotone Systems is one of India’s largest manufacturers of acoustic wall and ceiling solutions, providing comprehensive noise control systems for industrial and architectural needs.
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                      }}
                    >
                      Our enclosures are built with advanced technology for optimal comfort and professional-grade noise control to combat industrial sound challenges effectively.
                    </Typography>
                  </Grid>

                  {/* Right Section - Features */}
                  <Grid item xs={12} md={6}>
                    <Box>
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: { xs: 3, md: 4 } }}>
                            {/* Stepper */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: { xs: 2, md: 3 } }}>
                              <Box
                                sx={{
                                  background: 'linear-gradient(45deg, #00e676, #00bfa5)',
                                  color: 'white',
                                  borderRadius: '50%',
                                  width: { xs: 38, md: 50 },
                                  height: { xs: 38, md: 50 },
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 'bold',
                                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                                  boxShadow: '0 4px 20px rgba(0, 230, 118, 0.3)',
                                }}
                              >
                                {feature.step}
                              </Box>
                              {index !== features.length - 1 && (
                                <Box
                                  sx={{
                                    width: 2,
                                    height: { xs: 50, md: 80 },
                                    background: 'linear-gradient(180deg, #00e676, #00bfa5)',
                                    opacity: 0.4,
                                    mt: 1
                                  }}
                                />
                              )}
                            </Box>

                            {/* Feature Content */}
                            <Box
                              sx={{
                                flex: 1,
                                p: { xs: 2, md: 3 },
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 3,
                                border: '1px solid rgba(255,255,255,0.1)',
                                '&:hover': {
                                  background: 'rgba(255,255,255,0.08)',
                                  borderColor: 'rgba(0, 230, 118, 0.3)',
                                  transform: 'translateX(5px)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <Stack direction="row" spacing={2} alignItems="flex-start">
                             
                                <Box>
                                  <Typography 
                                    variant="h6" 
                                    fontWeight="bold" 
                                    sx={{ 
                                      color: '#00e676',
                                      fontSize: { xs: '1rem', md: '1.2rem' },
                                      mb: 1
                                    }}
                                  >
                                    {feature.title}
                                  </Typography>
                                  <Typography 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.8)', 
                                      fontSize: { xs: '0.9rem', md: '1rem' },
                                      lineHeight: 1.6
                                    }}
                                  >
                                    {feature.description}
                                  </Typography>
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ManufacturingAcoustic;
