import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {useTheme,alpha} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { motion } from "framer-motion";
import FAQSection from "../Components/FAQSections";

const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.3 },
  }),
};

const SERVICE_ITEMS = [
  'Kirloskar Green Generators',
  'All type of DG Set',
  'All Turnkey Project',
  'Manufacturing Acoustic Encloser',
  'All type of Electrical Works',
  'All type of HT/LT/AMF Panel boards',
];

const ROUTES = ["kirloskar","dg-set","turnkey","acoustic","electrical","panels"];

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // Colors
  const primaryGradient = "white";
  const neonGreen = "#000000ff";
  const neonTeal = "#000000ff";
  const glowShadow = `0 0 15px ${alpha(neonTeal, 0.4)}`;

  // Navigate + set selected index
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    const slug = ROUTES[index] || "kirloskar";
    navigate(`/services/${slug}`);
  };

 useEffect(() => {
  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length >= 2 && parts[0] === "services") {
    const slug = parts[1];
    const idx = ROUTES.indexOf(slug);
    if (idx !== -1) {
      setSelectedIndex(idx);
      window.scrollTo(0, 0); // 👈 ensure top of content is visible
      return;
    }
  }
  setSelectedIndex(0);
}, [location.pathname]);


  // Sidebar content (keeps widths consistent)
  const sidebarContent = (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      
      style={{
        width: isMobile ? '100%' : 320,
        height: '100%',
        overflow: 'hidden',
        background: primaryGradient,
        color: '#ff9c45',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: glowShadow,
      }}
    >

      <List sx={{ flexGrow: 1, py: 12,background:'#ff9c45' ,color:'white' }}>
        {SERVICE_ITEMS.map((text, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                mx: 0.8,
                my: 0.6,
                borderRadius: 2,
                transition: 'all 0.25s ease',
                backgroundColor:
                  selectedIndex === index
                    ? alpha(neonGreen, 0.12)
                    : 'transparent',
                boxShadow:
                  selectedIndex === index
                    ? `inset 3px 0 0 ${neonGreen}, 0 0 12px ${alpha(neonTeal, 0.25)}`
                    : 'none',
                '&:hover': {
                  backgroundColor: alpha(neonTeal, 0.08),
                },
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: selectedIndex === index ? 600 : 400,
                  color: selectedIndex === index ? neonGreen : alpha('#000000ff', 0.9),
                }}
              />
            </ListItemButton>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );

  return (
    <>
    <Box
    sx={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100vh',
      background: primaryGradient,
      overflowX: 'hidden',
      mb: isMobile ? 4 : 8,
    }}
  >
    {/* Sidebar - Hidden on mobile */}
    {!isMobile && (
      <Box
        component="aside"
        sx={{
          width: 320,
          flexShrink: 0,
          height: '100vh',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          borderRight: `1px solid ${alpha(neonGreen, 0.12)}`,
          boxShadow: glowShadow,
        }}
      >
        {sidebarContent}
      </Box>
    )}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  style={{
    flexGrow: 1,
    width: '100%',
  }}
>
  <Outlet key={location.pathname} /> 
</motion.div>
  </Box>
  <FAQSection/>
</>
  );
};

export default ServicesPage;