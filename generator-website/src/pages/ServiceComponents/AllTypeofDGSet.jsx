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
  ConstructionOutlined,
  EngineeringOutlined,
  SafetyCheckOutlined,
  PrecisionManufacturingOutlined,
  DirectionsWalkOutlined,
  ChecklistOutlined,
  SupervisorAccountOutlined,
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

const AllTypeofDGSet = () => {
  const theme = useTheme();

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      description: "Comprehensive evaluation of installation site and requirements"
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Detailed erection plan based on client specifications"
    },
    {
      step: "03",
      title: "Professional Execution",
      description: "Safe and efficient transfer and placement of DG set"
    },
    {
      step: "04",
      title: "Quality Verification",
      description: "Rigorous testing and client approval process"
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
              Generator Erection Services
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
              Professional DG set transfer and installation with expert monitoring at every step, 
              ensuring safety and adherence to client specifications.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Left Side - Process Overview */}
          <Grid item xs={12} lg={6}>
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
                <Stack direction="row" alignItems="center" spacing={2} mb={4}>
                  <SupervisorAccountOutlined 
                    sx={{ 
                      fontSize: 40, 
                      color: '#00e676',
                      background: 'rgba(0, 230, 118, 0.1)',
                      borderRadius: 2,
                      p: 1
                    }} 
                  />
                  <Box>
                    <Typography variant="h4" fontWeight="bold"sx={{color: '#5D866C'}}>
                      Professional Erection
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#00bfa5' }}>
                      Pre & Post Installation Services
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
                  To transfer DG from one place, we have professionals who are experts in providing 
                  Generator Erection Services. You will get Generator Erection safely and fully out 
                  of the place. Throughout the process, the work is monitored by our team of experts 
                  and at every step, we move according to the specifications of the clients. Following are the fragmentation of the works that we do in Engine Erection Services.
                </Typography>

                {/* Stepper Process */}
                <Box sx={{ mt: 4 }}>
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        {/* Stepper Line & Number */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 0.5 }}>
                          {/* Step Number Circle */}
                          <Box
                            sx={{
                              background: 'linear-gradient(45deg, #00e676, #00bfa5)',
                              color: 'white',
                              borderRadius: '50%',
                              width: 45,
                              height: 45,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              fontSize: '1rem',
                              boxShadow: '0 4px 20px rgba(0, 230, 118, 0.3)',
                              position: 'relative',
                              zIndex: 2,
                              flexShrink: 0
                            }}
                          >
                            {step.step}
                          </Box>
                          
                          {/* Connector Line */}
                          {index !== processSteps.length - 1 && (
                            <Box
                              sx={{
                                width: 2,
                                height: 60,
                                background: 'linear-gradient(180deg, #00e676, #00bfa5)',
                                opacity: 0.4,
                                mt: 1
                              }}
                            />
                          )}
                        </Box>

                        {/* Step Content */}
                        <Box 
                          sx={{ 
                            flex: 1,
                            p: 3,
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: 3,
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.3s ease',
                            minHeight: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.05)',
                              borderColor: 'rgba(0, 230, 118, 0.3)',
                              transform: 'translateX(5px)'
                            }
                          }}
                        >
                          <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{ 
                              color: '#00e676',
                              fontSize: '1.1rem',
                              mb: 1.5
                            }}
                          >
                            {step.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.7)', 
                              lineHeight: 1.6,
                              fontSize: '0.95rem'
                            }}
                          >
                            {step.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Card>
            </motion.div>
          </Grid>

        
        </Grid>

      
      </Container>
    </Box>
  );
};

export default AllTypeofDGSet;