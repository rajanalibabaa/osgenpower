import React from 'react';
import { motion } from 'framer-motion';
import Stack from '@mui/material';

import Card from "@mui/material/Card";

import  {useTheme}  from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SupervisorAccountOutlined } from '@mui/icons-material';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const AllTypeofDGSet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const processSteps = [
    {
      step: '01',
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of installation site and requirements',
    },
    {
      step: '02',
      title: 'Planning & Strategy',
      description: 'Detailed erection plan based on client specifications',
    },
    {
      step: '03',
      title: 'Professional Execution',
      description: 'Safe and efficient transfer and placement of DG set',
    },
    {
      step: '04',
      title: 'Quality Verification',
      description: 'Rigorous testing and client approval process',
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 100%)',
        color: 'white',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 4, sm: 5, md: 8 },
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      {/* Glowing Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 230, 118, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 191, 165, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 2, sm: 4, md: 2 },
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign="center" mb={{ xs: 4, sm: 6, md: 8 }}>
            <Typography
              variant={isSmallMobile ? 'h5' : isMobile ? 'h4' : 'h3'}
              fontWeight={800}
              sx={{
                background: 'linear-gradient(90deg, #00e676, #00bfa5)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.8rem' },
              }}
            >
              Generator Erection Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#d1fff0',
                fontWeight: 300,
                mx: 'auto',
                maxWidth: { xs: '90%', sm: '85%', md: '750px' },
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' },
                lineHeight: 1.7,
              }}
            >
              Professional DG set transfer and installation with expert monitoring at every step,
              ensuring safety and adherence to client specifications.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6 }}
          justifyContent="center"
        >
          <Grid item xs={12} md={10} lg={8}>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: { xs: 2.5, sm: 4, md: 5 },
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Title */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'center', sm: 'flex-start' }}
                  spacing={2}
                  mb={{ xs: 3, md: 5 }}
                  textAlign={{ xs: 'center', sm: 'left' }}
                >
                  <SupervisorAccountOutlined
                    sx={{
                      fontSize: { xs: 36, sm: 44 },
                      color: '#00e676',
                      background: 'rgba(0, 230, 118, 0.1)',
                      borderRadius: 2,
                      p: 1.5,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        color: '#7ee1a5',
                        fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                      }}
                    >
                      Professional Erection
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#00bfa5',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                      }}
                    >
                      Pre & Post Installation Services
                    </Typography>
                  </Box>
                </Stack>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    mb: { xs: 3, md: 4 },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  To transfer DG from one place, we have professionals who are experts in providing
                  Generator Erection Services. Throughout the process, the work is monitored by our
                  team of experts and at every step, we move according to the specifications of the
                  clients. Below is the breakdown of our Engine Erection Services:
                </Typography>

               {/* Stepper */}
<Box sx={{ position: 'relative', mt: 2 }}>
  {processSteps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
          mb: 3.5,
          position: 'relative',
        }}
      >
        {/* Number + Line */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexShrink: 0,
            mr: 2,
          }}
        >
          {/* Number Circle */}
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#fff',
              background: 'linear-gradient(135deg, #00e676, #00bfa5)',
              boxShadow: '0 0 10px rgba(0,191,165,0.4)',
              fontSize: '1rem',
              zIndex: 2,
            }}
          >
            {step.step}
          </Box>

          {/* Connector line */}
          {index !== processSteps.length - 1 && (
            <Box
              sx={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                height: 70,
                background: 'linear-gradient(180deg, #00e676, #00bfa5)',
                opacity: 0.4,
                zIndex: 1,
              }}
            />
          )}
        </Box>

        {/* Step Content */}
        <Box
          sx={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 2,
            p: 2.5,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(0,230,118,0.25)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#00e676',
              fontWeight: 600,
              mb: 0.8,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {step.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              lineHeight: 1.6,
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