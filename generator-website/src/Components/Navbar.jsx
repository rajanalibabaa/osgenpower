import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import StoreIcon from "@mui/icons-material/Store";
import GalleryIcon from "@mui/icons-material/Collections";
import ContactIcon from "@mui/icons-material/ContactMail";

// Hamburger/Drawer
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMainItem, setActiveMainItem] = useState("Home");

  // mobile/tablet drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openPower, setOpenPower] = useState(false); // collapse in drawer

  // DESKTOP: POWER SOLUTIONS hover dropdown
  const [anchorElPower, setAnchorElPower] = useState(null);
  const openPowerMenu = Boolean(anchorElPower);
  const handleOpenPowerMenu = (e) => setAnchorElPower(e.currentTarget);
  const handleClosePowerMenu = () => setAnchorElPower(null);

  // Detect active route
  useEffect(() => {
    let currentPath = location.pathname;

    for (const item of NAV_ITEMS) {
      if (item.path === currentPath) {
        setActiveMainItem(item.text);
        return;
      }
      if (item.dropdown && item.dropdown.some((s) => s.path === currentPath)) {
        setActiveMainItem("Generator Services");
        return;
      }
    }
  }, [location.pathname]);

  const handleNavItemClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
    handleClosePowerMenu();
  };

  return (
    <>
      {/* DESKTOP HEADER (hidden on mobile/tablet) */}
      <AppBar position="fixed" elevation={6} sx={{ display: { xs: "none", md: "flex" }, background: "white", height: 140 }}>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                position: "relative",
                height: "100%",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                zIndex: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: -200,
                  top: 0,
                  height: "100%",
                  width: 600,
                  bgcolor: "#f6c21c",
                  clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
                  zIndex: -1,
                },
              }}
              onClick={() => navigate("/")}
            >
              <img src="/omshakthigenpower_logo.jpg" alt="Logo" style={{ height: 56 }} />
            </Box>

            {/* Desktop contact strip */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1,
                    border: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f6c21c",
                  }}
                >
                  <HomeIcon />
                </Box>
                <Box>
                  <Box sx={{ fontSize: 14, color: "black", fontWeight: 600 }}>112 Your Address 23</Box>
                  <Box sx={{ fontSize: 13, color: "#777" }}>Washington DC 1234</Box>
                </Box>
              </Box>

              {/* Mail */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1,
                    border: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f6c21c",
                  }}
                >
                  <EmailIcon />
                </Box>
                <Box>
                  <Box sx={{ fontSize: 14, color: "black", fontWeight: 600 }}>Send us a mail</Box>
                  <Box sx={{ fontSize: 13, color: "#777" }}>mail@domain.com</Box>
                </Box>
              </Box>

              {/* Call */}
              <Box
                sx={{
                  bgcolor: "#CF0F0F",
                  color: "#fff",
                  px: 3,
                  py: 1.5,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Box sx={{ fontSize: 13 }}>CALL TOLL FREE</Box>
                <Box sx={{ fontSize: 18, fontWeight: 700 }}>080 - 888 - 357</Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/* Floating dark nav (desktop only) */}
        <Box position="fixed" sx={{ top: 100, height: 70, zIndex: 1200, justifyContent: "center", width: "100%" }}>
          <Box
            sx={{
              mt: 2,
              width: "50vw",
              minWidth: 1130,
              height: "100%",
              mx: "auto",
              bgcolor: "#14232d",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                width: "100%",
                height: "100%",
                px: 5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* MENU – same UI; Power Solutions gets a down arrow + hover dropdown */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 7 }}>
                <Box
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                  onClick={() => navigate("/")}
                >
                  HOME
                </Box>

                <Box
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                  onClick={() => navigate("/about")}
                >
                  COMPANY PROFILE
                </Box>

                {/* POWER SOLUTIONS with arrow + hover dropdown (no layout change) */}
                <Box
                  onMouseEnter={handleOpenPowerMenu}
                  onClick={handleOpenPowerMenu}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: openPowerMenu ? "#f6c21c" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                >
                  POWER SOLUTIONS
                  <ArrowDropDownIcon sx={{ fontSize: 22 }} />
                </Box>

                <Box
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                  onClick={() => navigate("/services/solar")}
                >
                  SOLAR
                </Box>

                <Box
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                  onClick={() => navigate("/products")}
                >
                  PRODUCTS
                </Box>

                <Box
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#f6c21c" },
                  }}
                  onClick={() => navigate("/contact")}
                >
                  REACH US
                </Box>
              </Box>

              {/* Dropdown menu for POWER SOLUTIONS */}
              <Menu
                anchorEl={anchorElPower}
                open={openPowerMenu}
                onClose={handleClosePowerMenu}
                MenuListProps={{ onMouseLeave: handleClosePowerMenu }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{
                  "& .MuiPaper-root": {
                    bgcolor: "#14232d",
                    color: "#fff",
                    mt: 1,
                    borderRadius: 1,
                    minWidth: 260,
                  },
                }}
              >
                {SUB_SERVICES.map((sub) => (
                  <MenuItem
                    key={sub.text}
                    onClick={() => handleNavItemClick(sub.path)}
                    sx={{
                      color: "#fff",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.08)", color: "#f6c21c" },
                    }}
                  >
                    {sub.text}
                  </MenuItem>
                ))}
              </Menu>

              {/* GET A QUOTE button */}
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "#f6c21c",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  px: 3,
                  cursor: "pointer",
                  userSelect: "none",
                  ml: "auto",
                }}
                onClick={() => navigate("/contact")}
              >
                <PublicIcon sx={{ mr: 1 }} />
                GET A QUOTE
              </Box>
            </Toolbar>
          </Box>
        </Box>
      </AppBar>

      {/* MOBILE/TABLET HEADER (logo left, hamburger right) */}
      {isMobile && (
        <>
          <AppBar position="fixed" elevation={4} sx={{ background: "white", height: 64 }}>
            <Toolbar sx={{ height: "100%", px: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Left: logo (with small slanted bg) */}
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: -50,
                    top: 0,
                    height: "100%",
                    width: 180,
                    bgcolor: "#f6c21c",
                    clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
                    zIndex: -1,
                  },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                <img src="/omshakthigenpower_logo.jpg" alt="Logo" style={{ height: 40 }} />
              </Box>

              {/* Right: hamburger */}
              <IconButton onClick={() => setDrawerOpen(true)} aria-label="open menu" sx={{ color: "#14232d" }}>
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Spacer for fixed mobile header */}
          <Box sx={{ height: 64 }} />
        </>
      )}

      {/* HAMBURGER DRAWER (mobile/tablet) */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, pt: 1 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavItemClick("/")}>
                <ListItemText primary="HOME" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavItemClick("/about")}>
                <ListItemText primary="COMPANY PROFILE" />
              </ListItemButton>
            </ListItem>

            {/* POWER SOLUTIONS with collapse (uses SUB_SERVICES) */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setOpenPower((p) => !p)}>
                <ListItemText primary="POWER SOLUTIONS" />
                {openPower ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openPower} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SUB_SERVICES.map((sub) => (
                  <ListItem key={sub.text} disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavItemClick(sub.path)}>
                      <ListItemText primary={sub.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavItemClick("/services/solar")}>
                <ListItemText primary="SOLAR" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavItemClick("/products")}>
                <ListItemText primary="PRODUCTS" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavItemClick("/contact")}>
                <ListItemText primary="REACH US" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />

          <Box
            sx={{
              m: 2,
              bgcolor: "#f6c21c",
              color: "#0f1b22",
              fontWeight: 800,
              py: 1.2,
              textAlign: "center",
              borderRadius: 1,
              cursor: "pointer",
            }}
            onClick={() => handleNavItemClick("/contact")}
          >
            GET A QUOTE
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
