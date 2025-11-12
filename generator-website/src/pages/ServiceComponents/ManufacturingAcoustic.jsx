import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Stack,
  Chip,
  useTheme
} from '@mui/material';
import {
  VolumeOffOutlined,
  EngineeringOutlined,
  FactoryOutlined,
  ArchitectureOutlined,
  BuildOutlined,
  HearingOutlined,
  NoiseAwareOutlined,
  AssignmentTurnedInOutlined
} from '@mui/icons-material';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ManufacturingAcoustic = () => {
  const theme = useTheme();

  const features = [
    {
      step: "01",
      icon: "🏭",
      title: "Largest Manufacturer",
      description: "Leading providers of acoustic solutions in India with comprehensive manufacturing capabilities"
    },
    {
      step: "02",
      icon: "🔊",
      title: "Noise Elimination",
      description: "Advanced technology to eliminate unwanted noise that hampers productivity"
    },
    {
      step: "03",
      icon: "🛠️",
      title: "Integrated Solutions",
      description: "Complete acoustic enclosure systems with cutting-edge technology"
    },
    {
      step: "04",
      icon: "✅",
      title: "Professional Combat",
      description: "Professional approach to combat various noise challenges effectively"
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 100%)',
        minHeight: '100vh',
        color: 'white',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 230, 118, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 191, 165, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(41, 182, 246, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 5 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign="center" mb={8}>
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
              Acoustic Enclosures Manufacturer
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
              Manufacturers of Acoustic Enclosures, DG Set Sound Proof Enclosures, Soundproof Noise Canopy for Industrial Noise Control across India.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content - Single Card containing both sections */}
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={10}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 4,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
              >
                <Grid container spacing={6}>
                  {/* Left Side - Company Overview */}
                  <Grid item xs={12} lg={6}>
                    <Stack direction="row" alignItems="center" spacing={2} mb={4}>
                      <EngineeringOutlined 
                        sx={{ 
                          fontSize: 40, 
                          color: '#00e676',
                          background: 'rgba(0, 230, 118, 0.1)',
                          borderRadius: 2,
                          p: 1
                        }} 
                      />
                      <Box>
                        <Typography variant="h4" fontWeight="bold" sx={{color: 'white'}}>
                         Kirloskar Green Generators
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00bfa5' }}>
                          Ecotone Systems
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        mb: 4
                      }}
                    >
                      Ecotone Systems is the largest manufacturers and providers of Acoustic wall and ceiling products that provide Architects and Building owners an extensive range of products to chose from, which suits their aesthetic as well as acoustic requirements. Acoustic Enclosure Manufacturer Being one of the most integrated and comprehensive manufacturers in the field of acoustic enclosures we are providing the customers with the facility of culminating the unwanted noise that can create nothing but will hamper the productivity of work.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        mb: 4
                      }}
                    >
                      Our Acoustic Enclosures comes with the advanced amount of technology and impart you with a lot of benefits that will help you retain the success in such a manner that will make yourself feel comfortable while various kinds of challenges in terms of noise can be combated in a professional manner.
                    </Typography>
                  </Grid>

                  {/* Right Side - Features Stepper */}
                  <Grid item xs={12} lg={6}>
                  
                    

                      {/* Features Stepper */}
                      <Box >
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                              {/* Stepper Line & Number */}
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                                {/* Step Number Circle */}
                                <Box
                                  sx={{
                                    background: 'linear-gradient(45deg, #00e676, #00bfa5)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: 50,
                                    height: 50,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 4px 20px rgba(0, 230, 118, 0.3)',
                                    position: 'relative',
                                    zIndex: 2,
                                    flexShrink: 0
                                  }}
                                >
                                  {feature.step}
                                </Box>
                                
                                {/* Connector Line */}
                                {index !== features.length - 1 && (
                                  <Box
                                    sx={{
                                      width: 2,
                                      height: 80,
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
                                  p: 3,
                                  background: 'rgba(255,255,255,0.05)',
                                  borderRadius: 3,
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  transition: 'all 0.3s ease',
                                  minHeight: 120,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  '&:hover': {
                                    background: 'rgba(255,255,255,0.08)',
                                    borderColor: 'rgba(0, 230, 118, 0.3)',
                                    transform: 'translateX(5px)'
                                  }
                                }}
                              >
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                  <Box 
                                    sx={{ 
                                      fontSize: '2rem',
                                      background: 'rgba(255, 255, 255, 0.1)',
                                      borderRadius: 2,
                                      width: 50,
                                      height: 50,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0
                                    }}
                                  >
                                    {feature.icon}
                                  </Box>
                                  <Box sx={{ flex: 1 }}>
                                    <Typography 
                                      variant="h6" 
                                      fontWeight="bold" 
                                      gutterBottom
                                      sx={{ 
                                        color: '#00e676',
                                        fontSize: '1.2rem',
                                        mb: 1.5
                                      }}
                                    >
                                      {feature.title}
                                    </Typography>
                                    <Typography 
                                      variant="body2" 
                                      sx={{ 
                                        color: 'rgba(255,255,255,0.8)', 
                                        lineHeight: 1.6,
                                        fontSize: '1rem'
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
}

export default ManufacturingAcoustic;