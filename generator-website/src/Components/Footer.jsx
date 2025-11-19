import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import YouTube from "@mui/icons-material/YouTube";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import Schedule from "@mui/icons-material/Schedule";
import BadgeOutlined from "@mui/icons-material/BadgeOutlined";
import KeyboardDoubleArrowUp from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import RotateLeftOutlined from "@mui/icons-material/RotateLeftOutlined";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/omshakthigenpower_logo.jpg";
import logo1 from "../assets/cholaautomation_PoweredLogo.jpeg";

const MotionIconButton = motion(IconButton);

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollDirection, setScrollDirection] = useState("up");

  const colors = {
    primary: "#F43838",
    secondary: "#FF7F50",
  };

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollDirection(window.scrollY > 200 ? "up" : "down");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (scrollDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Sales", path: "/sales" },
    { text: "Gallery", path: "/gallery" },
    { text: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", path: "/privacy-policy" },
    { text: "Terms & Conditions", path: "/terms" },
  ];

  const services = [
    "Generator Sales & Dealership",
    "Generator Rentals",
    "Installation & Commissioning",
    "Preventive Maintenance",
  ];

  const socialMedia = [
    {
      Icon: Facebook,
      url: "https://facebook.com/omshakthigenpower",
      color: "#1877f2",
    },
    {
      Icon: Instagram,
      url: "https://instagram.com/omshakthigenpower",
      color: "#E4405F",
    },
    { Icon: WhatsApp, url: "https://wa.me/919876543210", color: "#25D366" },
    {
      Icon: YouTube,
      url: "https://youtube.com/@omshakthigenpower",
      color: "#FF0000",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: "#1A2A4F",

        py: { xs: 1, sm: 6, md: 2 },
        width: "100%",
        borderTop: `4px solid ${colors.primary}`,
        overflow: "hidden",
      }}
    >
      <Container sx={{ xs: 2, sm: 2, md: 4 }}>
        <Grid
          container
          spacing={1}
          justifyContent="space-evenly"
          //   alignItems="flex-start"
        >
          {/* --- Company Info --- */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign={isMobile ? "center" : "left"}>
              <Box
                component="img"
                src={logo}
                alt="Om Shakthi Gen Power"
                onClick={() => handleNavigate("/")}
                sx={{
                  pointer: "cursor",
                  width: 180,
                  mb: 2,
                  borderRadius: 1,
                  mx: isMobile ? "auto" : 0,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 1)", mb: 1, lineHeight: 1.6 }}
              >
                Empowering industries with reliable generator solutions &
                maintenance support across India.
              </Typography>

              <Stack
                display={"flex"}
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={isMobile ? 2 : 2}
                gap={isMobile ? 0 : 2}
              >
                <Stack direction="row" spacing={1}>
                  <Schedule sx={{ color: colors.primary, fontSize: 20 }} />
                  <Box>
                    <Typography
                      fontSize="0.875rem"
                      fontWeight={600}
                      color="rgba(255, 255, 255, 1)"
                    >
                      24 / 7 Emergency Support 
                    </Typography>
                    <Typography
                      fontSize="0.75rem"
                      color="rgba(255, 255, 255, 1)"
                    >
                      {/* Mon - Sat: 9AM - 6PM */}
                    </Typography>
                    
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <BadgeOutlined sx={{ color: colors.primary, fontSize: 20 }} />
                  <Box>
                    <Typography
                      fontSize="0.875rem"
                      fontWeight={600}
                      color="rgba(255, 255, 255, 1)"
                    >
                      Power-Rite Certifications
                    </Typography>
                    <Typography
                      fontSize="0.75rem"
                      color="rgba(255, 255, 255, 1)"
                    >
                      Dealer for Kirloskar Green Generators (KGD)
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <RotateLeftOutlined
                    sx={{ color: colors.primary, fontSize: 20 }}
                  />
                  <Box>
                    <Typography
                      fontSize="0.875rem"
                      fontWeight={600}
                      color="rgba(255, 255, 255, 1)"
                    >
                      Load Bank Hire & Maintenance
                    </Typography>
                    <Typography
                      fontSize="0.75rem"
                      color="rgba(255, 255, 255, 1)"
                    >
                      essential health check service to prevent diesel engine
                      failure due to wet stacking.
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* --- Quick Links + Services --- */}
          {!isMobile && (
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                justifyContent="space-around"
                flexWrap="wrap"
                gap={4}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: colors.primary, mb: 2, textAlign: "left" }}
                  >
                    Quick Links
                  </Typography>
                  <Stack spacing={1}>
                    {quickLinks.map(({ text, path }) => (
                      <Link
                        key={text}
                        onClick={() => handleNavigate(path)}
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          textDecoration: "none",
                          fontSize: "1rem",
                          cursor: "pointer",
                          "&:hover": { color: colors.primary, pl: 1 },
                        }}
                      >
                        • {text}
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Grid>
          )}
          {isMobile && (
            <Grid item xs={12} sm={6} md={4} mb={3}>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: colors.primary,
                    mb: 2,
                    textAlign: { xs: "center", sm: "center" },
                  }}
                >
                  Quick Links
                </Typography>

                {/* 2-column grid layout for mobile */}
                <Box
                  display="grid"
                  gridTemplateColumns={{ xs: "1fr 1fr 1fr 1fr", sm: "1fr" }} // 👈 2 columns on mobile, 1 column on tablet/desktop
                  gap={2}
                  justifyContent="center"
                >
                  {quickLinks.map(({ text, path }) => (
                    <Link
                      key={text}
                      onClick={() => handleNavigate(path)}
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        textDecoration: "none",
                        fontSize: "1rem",
                        cursor: "pointer",
                        "&:hover": { color: colors.primary },
                        textAlign: { xs: "center", sm: "left" },
                      }}
                    >
                      • {text}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          )}
          {/* --- Contact Info --- */}
        </Grid>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: colors.primary,
                mb: 2,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Contact Us
            </Typography>

            <Stack spacing={2}>
              {/* Address */}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                <LocationOn sx={{ color: colors.primary, mr: 1 }} />
                <Typography variant="body2" color="rgba(255, 255, 255, 1)">
                  No:06/04, G Floor, <br />
                  Sandhiveeran Appartments,
                  <br />
                  Munuswamy Street,
                  <br /> Ekkatuthangal, Chennai-600032.
                </Typography>
              </Stack>
              {/* Email */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                <Email sx={{ color: colors.primary, mr: 1 }} />
                <Typography variant="body2" color="white">
                  info@omshakthigenpower.com
                </Typography>
              </Stack>
              {/* Phone */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                <Phone sx={{ color: colors.primary, mr: 1 }} />
                <Typography variant="body2" fontWeight={500} color="white">
                  (+91) 98416-42050 / 98411-66600
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant="body2"
              fontWeight="600"
              color="rgba(255, 255, 255, 1)"
              sx={{ mt: 3, mb: 2, textAlign: isMobile ? "center" : "left" }}
            >
              Follow Us
            </Typography>

            <Stack
              direction="row"
              mb={2}
              spacing={1.2}
              justifyContent={isMobile ? "center" : "flex-start"}
              flexWrap="wrap"
            >
              {socialMedia.map(({ Icon, url, color }, i) => (
                <MotionIconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -3 }}
                  sx={{
                    color,
                    border: `1.5px solid ${color}40`,
                    background: `${color}10`,
                    width: 42,
                    height: 42,
                    "&:hover": {
                      background: color,
                      color: "#fff",
                      boxShadow: `0 4px 12px ${color}50`,
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </MotionIconButton>
              ))}
            </Stack>
            {/* --- Social Media --- */}
          </Grid>
          {!isMobile && (
            <Box
              sx={{
                mt: 3,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.99494697667!2d80.20123!3d13.019826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673b4b71dd57%3A0x98f75164702a5490!2sOM%20SHAKTHI%20GEN%20POWER!5e0!3m2!1sen!2sus!4v1763028853406!5m2!1sen!2sus"
                width="800"
                height="300"
                loading="lazy"
              ></iframe>
            </Box>
          )}
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          mt={2}
          textAlign="center"
          sx={{ color: "rgba(255, 255, 255, 1)" }}
        >
          © {new Date().getFullYear()}{" "}
          <Typography component="span" color={colors.primary} fontWeight={700}>
            Om Shakthi Gen Power
          </Typography>
          . All Rights Reserved | Built with ❤️ in India
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "rgba(255, 255, 255, 1)" }}
        >
          Powered by :{" "}
          <a href="https://cholabiz.com/">
            {" "}
            <Typography
              component="span"
              color='white'
              fontWeight={700}
            >
              CholaBiz.com
            </Typography>
          </a>
        </Typography>

        {/* <Divider sx={{ my: 1, borderColor: "rgba(255, 255, 255, 1)" }} />

        <Stack
          direction="row"
          justifyContent="center"
          spacing={isMobile ? 2 : 1}
          flexWrap="wrap"
          mb={0.5}
        >
          {legalLinks.map((link, index) => (
            <React.Fragment key={link.text}>
              <Link
                onClick={() => handleNavigate(link.path)}
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: colors.primary },
                  cursor: "pointer",
                }}
              >
                {link.text}
              </Link>
              {index < legalLinks.length - 1 && !isMobile && (
                <Typography color="rgba(255, 255, 255, 1)">|</Typography>
              )}
            </React.Fragment>
          ))}
        </Stack> */}
      </Container>

      {/* Scroll Button */}
      <Fab
        onClick={handleScrollClick}
        size="medium"
        aria-label="Scroll button"
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          color: "#fff",
          boxShadow: `0 4px 25px ${colors.primary}55`,
          "&:hover": {
            transform: "translateY(-4px)",
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
          },
          transition: "all 0.3s ease",
          zIndex: 999,
        }}
      >
        {scrollDirection === "up" ? (
          <KeyboardDoubleArrowUp />
        ) : (
          <KeyboardDoubleArrowDown />
        )}
      </Fab>
    </Box>
  );
};

export default Footer;
