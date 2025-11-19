import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";

// ---- MUI Icons ----
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import StoreIcon from "@mui/icons-material/Store";
import GalleryIcon from "@mui/icons-material/Collections";
import ContactIcon from "@mui/icons-material/ContactMail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate, useLocation } from "react-router-dom";

// Define sub-items for Generator Services
const SUB_SERVICES = [
  { text: "Kirloskar Green Generators", path: "/services/kirloskar" },
  { text: "All type of DG Set", path: "/services/dg-set" },
  { text: "All Turnkey Project Undertaken Hiring 5kva to 1500kva", path: "/services/turnkey" },
  { text: "Manufacturing Acoustic Encloser", path: "/services/acoustic" },
  { text: "All type of Electrical Works", path: "/services/electrical" },
  { text: "All type of HT/LT/AMF Panel boards", path: "/services/panels" },
];

const NAV_ITEMS = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
      { text: "About Us", icon: <InfoIcon />, path: "/about" },
  { text: "Generator Sales / Rental", icon: <StoreIcon />, path: "/Generatorsales/Delearership/Rental" },

  {
    text: "Generator Services",
    icon: <BuildIcon />,
    path: "/services/kirloskar", 
    dropdown: SUB_SERVICES, 
  },
  { text: "Gallery", icon: <GalleryIcon />, path: "/gallery" },
  { text: "Contact Us", icon: <ContactIcon />, path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // State for desktop "Generator Services" dropdown menu
  const [anchorElServices, setAnchorElServices] = useState(null);
  const openServicesMenu = Boolean(anchorElServices);

  // State for mobile drawer "Generator Services" expandable list
  const [openMobileServices, setOpenMobileServices] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation(); 

  // State to manage the currently active main navigation item
  const [activeMainItem, setActiveMainItem] = useState("Home");

  useEffect(() => {
    let currentPath = location.pathname;
    let foundActive = false;

    for (const item of NAV_ITEMS) {
      if (item.path === currentPath) {
        setActiveMainItem(item.text);
        foundActive = true;
        break;
      }
      if (item.dropdown && item.dropdown.some(subItem => subItem.path === currentPath)) {
        setActiveMainItem(item.text); // Parent becomes active if a sub-item path matches
        foundActive = true;
        break;
      }
    }
    if (!foundActive) {
     
      setActiveMainItem("Home");
    }
  }, [location.pathname]);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Handlers for desktop "Generator Services" menu
  const handleServicesMenuOpen = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setAnchorElServices(null);
  };

  // Generic handler for navigation item clicks
  const handleNavItemClick = (itemPath) => {
    navigate(itemPath);
    if (isMobile) {
      setMobileOpen(false); 
      setOpenMobileServices(false); 
    }
    handleServicesMenuClose(); 
  };

  // Handler for mobile drawer "Generator Services" expand/collapse
  const handleMobileServicesClick = () => {
    setOpenMobileServices(!openMobileServices);
  };

  const handleLogoClick = () => {
    navigate("/");
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  // Drawer content for mobile
  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "background.paper",
        height: "100%",
        p: 2,
        // background: "linear-gradient(180deg, #1e1e2f 0%, #121212 100%)",
        color: "#fff", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          cursor: "pointer",
          
        }}
         onClick={handleLogoClick} 
      >
        <img
          src="/omshakthigenpower_logo.jpg"
          alt="Logo"
          style={{ height: 50, borderRadius: 6, }}
        />
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem
              onClick={item.dropdown ? handleMobileServicesClick : () => handleNavItemClick(item.path)}
              sx={{
                cursor: "pointer",
                color: activeMainItem === item.text ? "black" : "#000000ff",
                mb: 0.5,
                borderRadius: 1,
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#eb2723",
                },
              }}
            >
              {item.icon}
              <ListItemText
                primary={item.text}
                sx={{ ml: 1 }}
                primaryTypographyProps={{
                  fontWeight: activeMainItem === item.text ? "bold" : "normal",
                }}
              />
              {item.dropdown ? (openMobileServices ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItem>
            {item.dropdown && (
              <Collapse in={openMobileServices} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.dropdown.map((subItem) => (
                    <ListItem
                      key={subItem.text}
                      onClick={() => handleNavItemClick(subItem.path)}
                      sx={{
                        pl: 4, // Indent sub-items
                        cursor: "pointer",
                        color: location.pathname === subItem.path ? "black" : "#000000cc",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.05)",
                        },
                      }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Modern AppBar */}
      <AppBar
        position="relative"
        elevation={6}
        sx={{
          background: "linear-gradient(90deg, #ffffffff 0%, #ffffffff 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={handleLogoClick}>
              <img
                src="/omshakthigenpower_logo.jpg"
                alt="Om Shakthi Gen Power"
                style={{ height: 56, borderRadius: 6 }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {NAV_ITEMS.map((item) => (
                item.dropdown ? (
                  <React.Fragment key={item.text}>
                    <Button
                      id={`${item.text.replace(/\s+/g, '-')}-button`} // Unique ID for accessibility
                      aria-controls={openServicesMenu ? `${item.text.replace(/\s+/g, '-')}-menu` : undefined}
                      aria-haspopup="true"
                      aria-expanded={openServicesMenu ? 'true' : undefined}
                      onClick={handleServicesMenuOpen}
                      onMouseEnter={handleServicesMenuOpen} // Open on hover
                      sx={{
                        color: activeMainItem === item.text || openServicesMenu ? "#eb2723" : "#000000cc",
                        mx: 0.8,
                        fontWeight: activeMainItem === item.text || openServicesMenu ? 600 : 400,
                        fontSize: "0.95rem",
                        position: "relative",
                        transition: "0.3s",
                        textTransform: "none",
                        "&:hover": {
                          color: "#eb2723",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: activeMainItem === item.text || openServicesMenu ? "100%" : 0,
                          height: "2px",
                          bottom: 0,
                          left: 0,
                          bgcolor: "#eb2723",
                          transition: "width 0.3s ease-in-out",
                        },
                        "&:hover::after": {
                          width: "100%",
                          bgcolor: "#eb2723", 
                        },
                        display: "flex", 
                        alignItems: "center",
                      }}
 endIcon={<ArrowDropDownIcon sx={{ fontSize: '1.1rem' }} />}>                   
                      {item.text}
                    </Button>
                    <Menu
                      id={`${item.text.replace(/\s+/g, '-')}-menu`}
                      anchorEl={anchorElServices}
                      open={openServicesMenu}
                      onClose={handleServicesMenuClose}
                      MenuListProps={{
                        'aria-labelledby': `${item.text.replace(/\s+/g, '-')}-button`,
                        onMouseLeave: handleServicesMenuClose, 
                      }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          bgcolor: "#000000ff", 
                          mt: 1.5,
                          borderRadius: 1,
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                          minWidth: "280px", 
                
                        },
                      }}
                    >
                      {item.dropdown.map((subItem) => (
                        <MenuItem
                          key={subItem.text}
                          onClick={() => handleNavItemClick(subItem.path)}
                          sx={{
                            color: location.pathname === subItem.path ? "#f9ca11ff" : "white", 
                            py: 1.5, 
                            "&:hover": {
                              bgcolor: "rgba(255, 255, 255, 0.1)",
                              color: "white", 
                            },
                          }}
                        >
                          <ListItemText primary={subItem.text} />
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                 
                  <Button
                    key={item.text}
                    onClick={() => handleNavItemClick(item.path)}
                    sx={{
                      color: activeMainItem === item.text ? "#eb2723" : "#000000cc",
                      mx: 0.8,
                      fontWeight: activeMainItem === item.text ? 600 : 400,
                      fontSize: "0.95rem",
                      position: "relative",
                      transition: "0.3s",
                      textTransform: "none",
                      "&:hover": {
                        color: "#eb2723",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: activeMainItem === item.text ? "100%" : 0,
                        height: "2px",
                        bottom: 0,
                        left: 0,
                        bgcolor: "#eb2723",
                        transition: "width 0.3s ease-in-out",
                      },
                      "&:hover::after": {
                        width: "100%",
                        bgcolor: "#eb2723",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                )
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="end"
              
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none",color: "#eb2723" } }}
            >
              <MenuIcon  />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
