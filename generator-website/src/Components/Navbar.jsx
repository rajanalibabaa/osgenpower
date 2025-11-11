import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Build as BuildIcon,
  Store as StoreIcon,
  Collections as GalleryIcon,
  ContactMail as ContactIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "About Us", icon: <InfoIcon />, path: "/about" },
  { text: " Generator Services", icon: <BuildIcon />, path: "/services" },
  { text: " Generator Sales / Dealership / Rental", icon: <StoreIcon />, path: "/sales" },
  { text: "Gallery", icon: <GalleryIcon />, path: "/gallery" },
  { text: "Contact Us", icon: <ContactIcon />, path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleNavItemClick = (itemName) => {
    setActiveItem(itemName);
    navigate(NAV_ITEMS.find((item) => item.text === itemName).path);
    if (isMobile) setMobileOpen(false);
  };

  // Drawer content for mobile
  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "background.paper",
        height: "100%",
        p: 2,
        background:
          "linear-gradient(180deg, #1e1e2f 0%, #121212 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <img
          src="/omshakthigenpower_logo.jpg"
          alt="Logo"
          style={{ height: 50, borderRadius: 6 }}
        />
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => handleNavItemClick(item.text)}
            sx={{
              cursor: "pointer",
              color: activeItem === item.text ? "#00e676" : "#fff",
              mb: 0.5,
              borderRadius: 1,
              transition: "0.3s",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            {item.icon}
            <ListItemText
              primary={item.text}
              sx={{ ml: 1 }}
              primaryTypographyProps={{
                fontWeight: activeItem === item.text ? "bold" : "normal",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Modern AppBar */}
      <AppBar
        position="sticky"
        elevation={6}
        sx={{
          background: "linear-gradient(90deg, #08131e 0%, #1b5232 100%)",
          backdropFilter: "blur(10px)",
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
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/omshakthigenpower_logo.jpg"
                alt="Om Shakthi Gen Power"
                style={{ height: 45, borderRadius: 6 }}
              />
              
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleNavItemClick(item.text)}
                  sx={{
                    color: activeItem === item.text ? "#00e676" : "#ffffffcc",
                    mx: 0.8,
                    fontWeight: activeItem === item.text ? 600 : 400,
                    fontSize: "0.95rem",
                    position: "relative",
                    transition: "0.3s",
                    textTransform: "none",
                    "&:hover": {
                      color: "#00e676",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: activeItem === item.text ? "100%" : 0,
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      bgcolor: "#00e676",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
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
