import React from 'react'
import img1 from '../assets/Herobannerbgimage.jpg'
import img2 from '../assets/Ecofriendlyimages.jpg'
import { Box, Button, Typography, Container } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

// Styled components
const AnimatedTypography = styled(Typography)(({ delay = 0 }) => ({
  animation: `${fadeInUp} 1s ease-out ${delay}s both`,
}))

const AnimatedButton = styled(Button)(({ delay = 0, variant }) => ({
  animation: `${slideInUp} 0.8s ease-out ${delay}s both`,
  margin: '8px',
  padding: '12px 24px',
  borderRadius: '25px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  transition: 'all 0.3s ease',
  ...(variant === 'primary' && {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #1976D2 30%, #0288D1 90%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)',
    }
  }),
  ...(variant === 'secondary' && {
    background: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, #388E3C 30%, #689F38 90%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
    }
  }),
  ...(variant === 'outline' && {
    border: '2px solid white',
    color: 'white',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      background: 'white',
      color: '#333',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
    }
  })
}))

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const EcoFriendlyImage = styled('img')({
  animation: `${slideInRight} 1.2s ease-out 1.5s both`,
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
})

const EcoFriendlyBadge = styled(Box)({
  position: 'absolute',
  top: '-15px',
  left: '20px',
  background: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
  animation: `${fadeInUp} 0.8s ease-out 2s both`,
  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
})

const HeroSectionContainer = () => {
  return (
    <>
      {/* Hero Section with Fixed Background */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Fixed background
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              zIndex: 2,
            }}
          >
            {/* Animated Main Title */}
            <AnimatedTypography
              variant="h2"
              component="h1"
              delay={0.2}
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3.5rem' },
                marginBottom: '20px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              Power That Never Fails — Reliable Generators
            </AnimatedTypography>

            {/* Animated Subtitle */}
            <AnimatedTypography
              variant="h5"
              component="h2"
              delay={0.4}
              sx={{
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.5rem' },
                marginBottom: '10px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              Smart Energy. Total Service
            </AnimatedTypography>

            {/* Animated Description */}
            <AnimatedTypography
              variant="body1"
              delay={0.6}
              sx={{
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px auto',
                lineHeight: 1.6,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              }}
            >
              From sales and service to smart monitoring — we deliver end-to-end power solutions for
              homes, industries, and businesses across India.
            </AnimatedTypography>

            {/* Animated Buttons */}
            <Box sx={{ marginTop: '30px' }}>
              <AnimatedButton variant="primary" delay={0.8}>
                Explore Generators
              </AnimatedButton>
              <AnimatedButton variant="secondary" delay={1.0}>
                Request Service
              </AnimatedButton>
              <AnimatedButton variant="outline" delay={1.2}>
                Become a Dealer
              </AnimatedButton>
            </Box>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: `${fadeInUp} 1s ease-out 2s both`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            Scroll Down
          </Typography>
          <Box
            sx={{
              width: '2px',
              height: '30px',
              background: 'white',
              margin: '0 auto',
              animation: `${fadeInUp} 2s ease-in-out infinite alternate`,
            }}
          />
        </Box>
      </Box>

      {/* Content Section with Eco-Friendly Image */}
      <Box
        sx={{
          padding: { xs: '60px 20px', md: '100px 50px' },
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: '50px',
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1 }}>
              <AnimatedTypography
                variant="h3"
                delay={0.2}
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '20px',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
              >
                Eco-Friendly Power Solutions
              </AnimatedTypography>
              <AnimatedTypography
                variant="body1"
                delay={0.4}
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Our commitment to the environment drives us to provide sustainable energy solutions 
                that reduce carbon footprint while delivering reliable power for all your needs.
              </AnimatedTypography>
            </Box>

            {/* Right Image with Badge */}
            <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
              <EcoFriendlyBadge>
                🌱 100% Eco-Friendly
              </EcoFriendlyBadge>
              <EcoFriendlyImage 
                src={img2} 
                alt="Eco-Friendly Generator" 
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HeroSectionContainer
