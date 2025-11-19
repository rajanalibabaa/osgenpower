import React from 'react';
import { motion } from 'framer-motion';

import Stack from '@mui/material/Stack';


import  {useTheme}  from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PrecisionManufacturingOutlined from '@mui/icons-material/PrecisionManufacturingOutlined';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const PanelBoards = () => {

  const processSteps = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "Our team designs EB metering panels that meet client-specific requirements and adhere to national and international standards."
    },
    {
      step: "02",
      title: "Material Selection",
      description: "We source high-quality components to ensure reliability, safety, and long-term performance in all panel assemblies."
    },
    {
      step: "03",
      title: "Manufacturing Process",
      description: "Every panel is carefully manufactured using precision tools and tested to ensure compliance with performance benchmarks."
    },
    {
      step: "04",
      title: "Quality Testing & Delivery",
      description: "Stringent quality checks are performed before final delivery to guarantee safety, durability, and easy installation."
    }
  ];

  return (
    <Box
      sx={{
        // background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 100%)',
        minHeight: '100vh',
        color: 'white',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background */}
      {/* <Box
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
      /> */}

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
                background: "#eb2723",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
              }}
            >
              EB Metering Panels
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                color: "#000000ff",
                mb: 6,
                fontWeight: 300,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
We are offering EB Metering Panel Board to our clients.It is to be installed EB Power Supply input point at the Resident or Site.            </Typography>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Left Side - Overview */}
          <Grid item xs={12} lg={6}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card
                sx={{
                  // background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 4,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2} mb={4}>
                  <PrecisionManufacturingOutlined 
                    sx={{ 
                      fontSize: 40, 
                      color: '#00e676',
                      background: 'rgba(0, 230, 118, 0.1)',
                      borderRadius: 2,
                      p: 1
                    }} 
                  />
                  <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#000000ff' }}>
                      Reliable Power Control
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#eb2723' }}>
                      Advanced Metering Panel Solutions
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.8)',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    mb: 4
                  }}
                >
                  In the series of our electrical products, we are engaged in manufacturing and 
                  supplying a wide range of <strong>EB Metering Panels</strong>.  For the benefits of our clients, these products are stringently tested on various parameters and are authenticated as per the international standards. All these products are highly appraised for their features like high tensile strength, durability and cost effectiveness. Features: Low maintenance , Low maintenance , Easy to install.
                </Typography>

                {/* Stepper Process */}
                <Box sx={{ mt: 4 }}>
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        {/* Step Number */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 0.5 }}>
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
                              borderColor: 'rgba(0, 230, 119, 0.97)',
                              transform: 'translateX(5px)'
                            }
                          }}
                        >
                          <Typography 
                            variant="h6" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{ 
                              color: '#eb2723',
                              fontSize: '1.1rem',
                              mb: 1.5
                            }}
                          >
                            {step.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(0, 0, 0, 0.7)', 
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

export default PanelBoards;
