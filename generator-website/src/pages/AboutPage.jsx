import React from 'react';
import {useNavigate} from "react-router-dom";

import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha,useTheme } from '@mui/material/styles';
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import BuildIcon from '@mui/icons-material/Build';
import NatureIcon from '@mui/icons-material/Nature';
import SupportIcon from '@mui/icons-material/Support';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

import Aboutusbgimage from "../assets/osgenpower_Aboutusbgimage.jpeg";
import CustomerSatisfactionAboutimage from "../assets/osgenpower_CustomerSatisfactionAboutimage.jpg"
import ReliableDeliveryAboutimage from "../assets/osgenpower_ReliableDeliveryAboutimage.jpg"
import RightCapacitySolutionAboutimage from "../assets/osgenpower_RightCapacitySolutionAboutimage.jpg"
import TechnicalSupportAboutimage from "../assets/osgenpower_TechnicalSupportAboutimage.jpg"
import WellExperiencedAboutimage from "../assets/osgenpower_WellExperiencedAboutimage.jpg"
import TrustedBrandAboutimage from "../assets/osgenpower_TrustedBrandAboutimage.jpg"
import img1 from '../assets/osgenpower_Aboutpagebackground.jpg'
import FAQSection from '../Components/FAQSections';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeSlide = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AboutPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const MotionBox = motion(Box);

  // Define the orange colors
  const primaryOrange = "#ff4400ff";
  const secondaryOrange = "#ff6a00ff";

  const achievements = [
    { number: '1000+', label: 'Installations in Chennai', delay: 0.1 },
    { number: '1500+', label: 'Installations across Tamilnadu', delay: 0.3 }
  ];

  const services = [
    {
      title: 'Generator Sales',
      description: 'Diesel, Gas, and Hybrid Generators from top global and Indian brands',
      icon: <TrendingUpIcon />
    },
    {
      title: 'Installation & Commissioning',
      description: 'Delivered, installed, and tested by certified technicians',
      icon: <BuildIcon />
    },
    {
      title: 'Maintenance & Repairs',
      description: 'On-call and AMC-based service with fast response times',
      icon: <SupportIcon />
    },
    {
      title: 'IoT Power Monitoring',
      description: 'Remote performance tracking through smart dashboards',
      icon: <SecurityIcon />
    },
    {
      title: 'Dealership & Distribution',
      description: 'Partner programs with full training and marketing support',
      icon: <LocalShippingIcon />
    }
  ];

  const features = [
    { icon: <BuildIcon />,image: WellExperiencedAboutimage,  title: 'Well Experienced Staff' },
    { icon: <TrendingUpIcon />, image:RightCapacitySolutionAboutimage,title: 'Right Capacity Solutions',  },
    { icon: <SecurityIcon />,image:CustomerSatisfactionAboutimage, title: 'Customer Satisfaction Focus', },
    { icon: <SupportIcon />,image:TechnicalSupportAboutimage, title: '24x7 Technical Support',  },
    { icon: <SecurityIcon />,image:TrustedBrandAboutimage, title: 'Trusted Brands',  },
    { icon: <LocalShippingIcon />, image:ReliableDeliveryAboutimage, title: 'Reliable Delivery', }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Banner */}
      <Paper
        component={motion.section}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'relative',
          color: 'white',
          py: { xs: 3, md: 10 },
          mb: 4,
          textAlign: 'center',
          overflow: 'hidden',
          borderRadius: 0,
        }}
      >
        {/* Banner Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${Aboutusbgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))`,
            zIndex: 1,
          }}
        />

        {/* Content on top */}
        <Container
          component={motion.div}
          {...fadeInUp}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
            }}
          >
            Om Shakthi Gen Power
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 4,
            }}
          >
            Turnover Climbs a Fifth at Power-Rite
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 3,
                boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                backgroundColor: primaryOrange,
                '&:hover': {
                  backgroundColor: secondaryOrange,
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </Container>
      </Paper>

      {/* Company Overview */}
      <Container sx={{ mb: 3}}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Box sx={{ textAlign: 'center', mb: 5, position: 'relative', zIndex: 1 }}>
            <motion.div 
              variants={fadeInUp}
              style={{ marginTop: '2rem' }}
            >
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                fontWeight="bold" 
                gutterBottom 
                color={primaryOrange}
              >
                Company Overview
              </Typography>
              <Box 
                sx={{ 
                  maxWidth: 200, 
                  mx: "auto", 
                  mb: 2,  
                  backgroundColor: secondaryOrange, 
                  height: 3
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 1200,
                  mx: 'auto',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'justify',  
                  lineHeight: 1.8
                }}
              >
                Om Shakthi Gen Power has professional staffs in all departments like Sales, Service, Projects and Administration.{' '}
                <Chip 
                  label="Mr. S. Shenbagam" 
                  size="medium" 
                  sx={{ 
                    mx: 0.5, 
                    fontSize: '1rem',
                    animation: `${pulseAnimation} 2s infinite`,
                    backgroundColor: primaryOrange,
                    color: 'white'
                  }} 
                />
                has vast experience in the same field, which made Om Shakthi Gen Power to have better market share in the short span of time. Om Shakthi Gen Power have more than 1000 installations in Chennai & 1500+ in all over Tamilnadu. We are not only supplying the DG Sets but also supplying the right capacity Generators, which is actually required for the customers. We do Load Study at customer sites & helping customers to choose the right capacity of Generators. <b>"Our mission is serving our Customers fulfilling their power generation needs". </b>We are committed to ensure the sustainability of our business through continual improvement of customer satisfaction & after sales services. We are very careful about procuring products from others and choose only trusted brands as our suppliers. We can deliver our products very efficiently as we have a wide sales and distribution network at the domestic level.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Mission & Vision */}
      <Container sx={{ mb: 1 }}>
        <Box
          sx={{
            py: 2,
            backgroundColor: alpha(theme.palette.background.default, 0.5),
            textAlign: "center",
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {/* Mission */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    background: "#fff",
                    p: { xs: 4, md: 5 },
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    position: "relative",
                  }}
                >
                  {/* Header Tab */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, 25%)",
                      backgroundColor: "#FFA239",
                      px: 4,
                      py: 1,
                      borderRadius: "30px",
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "1.25rem",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    Mission
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <TrackChangesOutlinedIcon
                      sx={{
                        fontSize: 60,
                        color: primaryOrange,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#555",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      To empower individuals and organizations with uninterrupted,
                      efficient, and sustainable energy — using innovation and
                      technology to redefine generator performance and reliability.
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    background: "#fff",
                    p: { xs: 4, md: 5 },
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    position: "relative",
                  }}
                >
                  {/* Header Tab */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, 25%)",
                      backgroundColor: "#63A361",
                      px: 4,
                      py: 1,
                      borderRadius: "30px",
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "1.25rem",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    Vision
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <EmojiObjectsOutlinedIcon
                      sx={{
                        fontSize: 60,
                        color: secondaryOrange,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#555",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      To become India's most trusted and technologically advanced
                      power solutions provider — building a future where energy
                      outages never disrupt productivity or peace of mind.
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <motion.div variants={fadeInUp}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          textAlign={'center'}
          gutterBottom
          color={primaryOrange}
          sx={{
            fontSize: { xs: '1.9rem', sm: '2.2rem', md: '3rem' },
          }}
        >
          What We Do
        </Typography>

        <Box
          sx={{
            maxWidth: 200,
            mx: "auto",
            mb: { xs: 2, md: 3 },
            backgroundColor: secondaryOrange,
            height: 3,
          }}
        />
      </motion.div>

      {/* What We Do Section */}
      <Container sx={{ mb: { xs: 6, md: 3 },background:`url(${img1}) no-repeat center center / cover `,backgroundAttachment:'scroll' }}>
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainer}
  >
    {/* ====== Header Section ====== */}
    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
      

      <motion.div variants={fadeInUp}>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            mt: { xs: 2, md: 3 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
            lineHeight: 1.8,
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          At <b>Om Shakthi Gen Power</b>, we offer a complete power ecosystem, ensuring a seamless
          experience at every step.
        </Typography>
      </motion.div>
    </Box>

    {/* ====== Services Timeline Section ====== */}
    <Box sx={{ position: 'relative' }}>
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{
              mb: { xs: 6, md: 8 },
              alignItems: 'center',
              flexDirection: {
                xs: 'column',
                sm: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            {/* Icon Circle */}
            <Grid item xs={12} sm={2} md={1}>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Box
                  sx={{
                    width: { xs: 70, sm: 80, md: 100 },
                    height: { xs: 70, sm: 80, md: 100 },
                    borderRadius: '50%',
                    background: '#CD2C58',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: { xs: 30, md: 40 },
                    boxShadow: `0 10px 30px ${alpha(primaryOrange, 0.3)}`,
                    mx: { xs: 'auto', sm: 'initial' },
                    mb: { xs: 3, sm: 0 },
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -4,
                      background: `linear-gradient(135deg, ${primaryOrange}, ${secondaryOrange})`,
                      borderRadius: '50%',
                      zIndex: -1,
                      opacity: 0.3,
                      animation: `${pulseAnimation} 2s infinite`,
                    },
                  }}
                >
                  {service.icon}
                </Box>
              </motion.div>
            </Grid>

            {/* Content */}
            <Grid item xs={12} sm={10} md={5}>
              <motion.div
                whileHover={{
                  x: index % 2 === 0 ? 10 : -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Box
                  sx={{
                    p: { xs: 3, sm: 4 },
                    background: `linear-gradient(145deg, ${alpha(
                      theme.palette.background.paper,
                      0.8
                    )}, ${alpha(theme.palette.background.default, 0.4)})`,
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: `1px solid ${alpha(primaryOrange, 0.1)}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${primaryOrange}, ${secondaryOrange})`,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      background: `linear-gradient(135deg, #000000ff, #000000ff)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      ))}
    </Box>
  </motion.div>
</Container>


      {/* Why Choose Us Section */}
      <Container  
        sx={{
          position: 'relative',
          py: { xs: 1, md: 1 },
          mb: 3,
        }}
      >
        {/* Background Gradient Accent */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '40%',
            height: '40%',
            background: `radial-gradient(circle at top left, ${primaryOrange}22, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '40%',
            height: '40%',
            background: `radial-gradient(circle at bottom right, ${secondaryOrange}22, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: -1,
          }}
        />

        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <motion.div 
              variants={fadeInUp}
              // style={{ marginTop: '2rem' }}
            >
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                fontWeight="bold" 
                gutterBottom 
                color={primaryOrange}
              >
              Why Om Shakthi Gen Power ?
              </Typography>
              <Box 
                sx={{ 
                  maxWidth: 200, 
                  mx: "auto", 
                  mb: 2,  
                  backgroundColor: secondaryOrange, 
                  height: 3
                }}
              />
            </motion.div>
        </Box>

        {/* Features Card Grid */}
        <Grid 
          container 
          spacing={5} 
          justifyContent="center" 
          alignItems="stretch"
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                    overflow: 'hidden',
                    background: `rgba(255, 255, 255, 0.38)`,
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Image Banner */}
                  <Box sx={{ position: 'relative', width: '100%', height: 220 }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        '&:hover': { transform: 'scale(1.08)' },
                      }}
                    />

                    {/* Floating Icon Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -35,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${primaryOrange}, ${secondaryOrange})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      }}
                    >
                      <Box sx={{ fontSize: 36 }}>{feature.icon}</Box>
                    </Box>
                  </Box>

                  {/* Text Content */}
                  <CardContent sx={{ mt: 6, pb: 4, px: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1.5,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sustainability Section */}
   <Container sx={{ mb: 15 }}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <Paper
      elevation={10}
      sx={{
        p: { xs: 4, md: 8 },
        borderRadius: 6,
        background: `linear-gradient(145deg, #e8f5e9, #ffffff80)`,
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(76,175,80,0.2)",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glowing Circle Animation */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          top: -100,
          right: -100,
          background: "radial-gradient(circle, rgba(76,175,80,0.3), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{ position: "relative", zIndex: 2 }}
      >
        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Box
            sx={{
              width: { xs: 90, md: 130 },
              height: { xs: 90, md: 130 },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, #a5d6a7, #81c784)",
              boxShadow: "0 0 40px rgba(76,175,80,0.4)",
              color: "#fff",
              fontSize: { xs: 40, md: 60 },
            }}
          >
            <NatureIcon fontSize="inherit" />
          </Box>
        </motion.div>

        <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 700 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(90deg, #2e7d32, #66bb6a)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
             Sustainability Promise
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#33691e",
              lineHeight: 1.8,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            We lead the way in eco-conscious energy solutions. Our low-emission and hybrid generator
            systems empower industries to reduce carbon impact while maintaining superior efficiency
            and reliability.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  </motion.div>
</Container>
<FAQSection />
    </Box>
  );
};

export default AboutPage;