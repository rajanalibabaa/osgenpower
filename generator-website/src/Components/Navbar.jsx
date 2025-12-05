import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

  // Desktop dropdown
  const [anchorElServices, setAnchorElServices] = useState(null);
  const openServicesMenu = Boolean(anchorElServices);

  // Mobile Services Dropdown
  const [mobileServicesMenu, setMobileServicesMenu] = useState(false);

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
    setAnchorElServices(null);
    setMobileServicesMenu(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <AppBar position="relative" elevation={6} sx={{ background: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 70, justifyContent: "space-between" }}>
            
            {/* Logo */}
            <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <img src="/omshakthigenpower_logo.jpg" alt="Logo" style={{ height: 56, borderRadius: 6 }} />
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
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
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* ===========================
          MOBILE TOP DROPDOWN MENU
      ============================ */}
      {isMobile && mobileServicesMenu && (
        <Box
          sx={{
            position: "fixed",
            top: 110,
            left: 0,
            right: 0,
            bgcolor: "#000000ff",
            color: "#fff",
            zIndex: 1300,
            p: 1,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          {SUB_SERVICES.map((sub) => (
            <Box
              key={sub.text}
              onClick={() => handleNavItemClick(sub.path)}
              sx={{
                p: 1.5,
                borderBottom: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {sub.text}
            </Box>
          ))}
        </Box>
      )}

      {/* ===========================
          MOBILE BOTTOM NAVIGATION
      ============================ */}
    {isMobile && (
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
          setMobileServicesMenu((prev) => !prev); 
          return;
        }

        const nav = NAV_ITEMS.find((x) => x.text === newItem);
        navigate(nav.path);
        setMobileServicesMenu(false);
      }}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        "& .MuiBottomNavigationAction-root": {
          minWidth: "auto",
          flex: 1,               // EQUAL width for each button
          padding: "6px 0",
        },
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" value="About Us" icon={<InfoIcon />} />
      <BottomNavigationAction label="Sales" value="Generator Sales / Rental" icon={<StoreIcon />} />
      <BottomNavigationAction label="Services" value="Generator Services" icon={<BuildIcon />} />
      <BottomNavigationAction label="Gallery" value="Gallery" icon={<GalleryIcon />} />
      <BottomNavigationAction label="Contact" value="Contact Us" icon={<ContactIcon />} />
    </BottomNavigation>
  </Box>
)}

    </>
  );
};

export default Navbar;
