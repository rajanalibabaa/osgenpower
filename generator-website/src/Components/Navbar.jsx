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

// Bottom Nav
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

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
  const [openPower, setOpenPower] = useState(false); // collapse for Power Solutions (Generator Services)

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
  };

  return (
    <>
      {/* DESKTOP HEADER (hidden on mobile/tablet) */}
       <AppBar position="fixed" elevation={6} sx={{      display: {xs:"none",md:"flex"},
 background: "white", height: 140}}>
<Container
  maxWidth="xl"
  sx={{
    height: "100%",
      display: {xs:"none",md:"flex"},
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
      display: {xs:"none",md:"flex"},
    alignItems: "center",
    zIndex: 1,

    // Yellow slanted background
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
  <img
    src="/omshakthigenpower_logo.jpg"
    alt="Logo"
    style={{ height: 56 }}
  />
</Box>


            {/* Desktop Menu */}
<Box
  sx={{
    display: {xs:"none",md:"flex"},
    alignItems: "center",
    gap: 3,
  }}
>
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
      <HomeIcon />    </Box>
    <Box>
      <Box sx={{ fontSize: 14, color: "black", fontWeight: 600 }}>
        112 Your Address 23
      </Box>
      <Box sx={{ fontSize: 13, color: "#777" }}>
        Washington DC 1234
      </Box>
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
      <Box sx={{ fontSize: 14, color: "black", fontWeight: 600 }}>
        Send us a mail
      </Box>
      <Box sx={{ fontSize: 13, color: "#777" }}>
        mail@domain.com
      </Box>
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
    <Box sx={{ fontSize: 18, fontWeight: 700 }}>
      080 - 888 - 357
    </Box>
  </Box>
</Box>
<Box
  position="fixed"
  elevation={6}
  sx={{
    top: 100,
    height: 70,
    zIndex: 1200,
  }}
>
 <Box
  sx={{
    mt: 2,
    width: "50vw",
    minWidth: 1130,
    height: "100%",
    mx: "auto",
    bgcolor: "#14232d",
      display: {xs:"none",md:"flex"},
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
      gap: 5,         // add gap between menu and quote button
    }}
  >
    {/* MENU */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 7 }}>
      {[
        "HOME",
        "COMPANY PROFILE",
        "POWER SOLUTIONS",
        "SOLAR",
        "PRODUCTS",
        "REACH US",
      ].map((item) => (
        <Box
          key={item}
          sx={{
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            "&:hover": { color: "#f6c21c" }, // optional hover effect
          }}
        >
          {item}
        </Box>
      ))}
    </Box>

    {/* GET A QUOTE button */}
    <Box
      sx={{
        height: "100%",
        bgcolor: "#f6c21c",
        display: "flex",
        alignItems: "center",
        fontWeight: 700,
        whiteSpace: "nowrap",
        px: 3,           // add horizontal padding inside the box
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <PublicIcon sx={{ mr: 1 }} /> {/* margin right for icon spacing */}
      GET A QUOTE
    </Box>
  </Toolbar>
</Box>

</Box>






            {/* {!isMobile && (
              <Box sx={{ display: "flex" }}>
                {NAV_ITEMS.map((item) =>
                  item.dropdown ? (
                    <React.Fragment key={item.text}>
                      <Button
                        onClick={(e) => setAnchorElServices(e.currentTarget)}
                        onMouseEnter={(e) => setAnchorElServices(e.currentTarget)}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          mx: 0.8,
                          color:
                            activeMainItem === item.text || openServicesMenu ? "#eb2723" : "#000",
                        }}
                      >
                        {item.text}
                      </Button>

                      <Menu
                        anchorEl={anchorElServices}
                        open={openServicesMenu}
                        onClose={() => setAnchorElServices(null)}
                        MenuListProps={{
                          onMouseLeave: () => setAnchorElServices(null),
                        }}
                        sx={{
                          "& .MuiPaper-root": { bgcolor: "#000", color: "#fff", mt: 1.5 },
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <MenuItem
                            key={sub.text}
                            onClick={() => handleNavItemClick(sub.path)}
                            sx={{
                              color: location.pathname === sub.path ? "#f9ca11" : "white",
                            }}
                          >
                            {sub.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  ) : (
                    <Button
                      key={item.text}
                      onClick={() => navigate(item.path)}
                      sx={{ mx: 0.8, color: activeMainItem === item.text ? "#eb2723" : "#000" }}
                    >
                      {item.text}
                    </Button>
                  )
                )}
              </Box>
            )} */}
          </Toolbar>
        </Container>
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

      {/* MOBILE BOTTOM NAVIGATION */}
      {/* {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            bgcolor: "white",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            zIndex: 1200,
          }}
        >
          <BottomNavigation
            value={activeMainItem}
            onChange={(event, newItem) => {
              setActiveMainItem(newItem);

              if (newItem === "Generator Services") {
                // optional: can open drawer + expand instead
                setDrawerOpen(true);
                setOpenPower(true);
                return;
              }

              const nav = NAV_ITEMS.find((x) => x.text === newItem);
              if (nav) navigate(nav.path);
            }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              "& .MuiBottomNavigationAction-root": {
                minWidth: "auto",
                flex: 1,
                padding: "6px 0",
              },
            }}
            showLabels
          >
            <BottomNavigationAction label="Home" value="Home" />
            <BottomNavigationAction label="Company Profile" value="About Us" />
            <BottomNavigationAction label="Power Solutions" value="Generator Sales / Rental" />
            <BottomNavigationAction label="Solar" value="Generator Services" />
            <BottomNavigationAction label="Products" value="Gallery" />
            <BottomNavigationAction label="Reach Us" value="Contact Us" />
          </BottomNavigation>
        </Box>
      )} */}
    </>
  );
};

export default Navbar;
