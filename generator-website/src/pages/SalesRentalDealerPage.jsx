import React, { useState, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import image1 from "../assets/diesel-generator-3-kva-5-kva.png";
import image2 from "../assets/5-kva-kirloskar-green-diesel-generator.png";
import image3 from "../assets/15-kva-20-kva-generator.png";
import image4 from "../assets/osgenpower_Kcc1530kvimage.jpeg";
import image5 from "../assets/osgenpower_koel-green-genset-40kva-125kva.jpg";
import image6 from "../assets/osgenpower_160kVA-250kVAimage.jpg";
import image7 from "../assets/koel-diesel-genset-320-kva-1010-kva--164.png";
import image8 from "../assets/omshakthipowerservicebg.jpg";

const useCardData = () =>
  useMemo(
    () => [
      {
        id: 1,
        img: image1,
        title: "KCC - 3KVA to 5KVA Portable Diesel Genset",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substantial savings in fuel cost.",
        pdf: "/OsGenPowerKCC - 3kVA to 5kVA Portable Diesel Genset.pdf",
      },
      {
        id: 2,
        img: image2,
        title: "KOEL Chhota Gensets - 5-KVA-12.5-KVA",
        desc:
          "KOEL AMFi panels automatically switch on your genset when the mains supply fails and switch off the genset when the mains supply restores giving you un-matched convenience.",
        pdf: "/OsGenPowerKCC - 5-kva-125-kva.pdf",
      },
       {
        id: 6,
        img: image6,
        title: "KOEL Green Gensets - 160-KVA-250-KVA",
        desc:
          "Revised CPCB norms are aimed at protecting the environment by reducing Genset emissions and improving emission quality. These are some of the most stringent emission norms in the world.",
        pdf: "/OsGenPowerKCC-160-kva-250-kva.pdf",
      },
      {
        id: 3,
        img: image3,
        title: "KCC - 15KVA to 20KVA Genset",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substantial savings in fuel cost.",
        pdf: "/OsGenPowerKCC - 15kVA to 20kVA Genset.pdf",
      },
      {
        id: 4,
        img: image4,
        title: "KOEL Green - 15KVA to 30KVA",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substantial savings in fuel cost.",
        pdf: "/OsGenPowerKOEL Green - 15kVA to 30kVA Product Brochure.pdf",
      },
      {
        id: 5,
        img: image5,
        title: "KOEL Green - 40KVA to 125KVA",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substantial savings in fuel cost.",
        pdf: "/OsGenPowerKOEL Green - 40kVA to 125kVA Product Brochure.pdf",
      },
     
      {
        id: 7,
        img: image7,
        title: "KOEL Green Gensets - 320-1010 KVA",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substantial savings in fuel cost.",
        pdf: "/OsGenPower320-1010 kva.pdf-1.pdf",
      },
    ],
    []
  );

const GensetCard = React.memo(({ index, item, onOpen, isMobile, isTablet }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    sx={{
      display: "flex",
      justifyContent: "center",
      padding: { xs: 1.5, sm: 2 },
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "backOut",
      }}
      style={{ width: "100%", display: "flex" }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          position: "relative",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        {/* Main Container with Glassmorphism Effect */}
        <Box
          sx={{
            // background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 1)",
            borderRadius: "32px",
            overflow: "hidden",
            position: "relative",
            
              // "&::before": {
              //   content: '""',
              //   position: "absolute",
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   height: "2px",
              //   background: "linear-gradient(90deg, #0fa95e, #34d399, #0fa95e)",
              //   zIndex: 1,
              // }
          }}
        >
          {/* Floating Image Container */}
          <Box
            sx={{
              position: "relative",
              height: isMobile ? 200 : isTablet ? 240 : 280,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
              margin: 2,
              marginBottom: 0,
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* Animated Background Circles */}
            {/* <Box
              sx={{
                position: "absolute",
                width: "120%",
                height: "120%",
                background: "radial-gradient(circle at 30% 70%, rgba(15, 169, 94, 0.1) 0%, transparent 50%)",
                animation: "float 6s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "rotate(0deg) scale(1)" },
                  "50%": { transform: "rotate(5deg) scale(1.05)" },
                },
              }}
            /> */}
{/*             
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "80%",
                border: "2px solid rgba(15, 169, 94, 0.1)",
                borderRadius: "50%",
                animation: "pulse 4s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
                  "50%": { transform: "scale(1.1)", opacity: 0.1 },
                },
              }}
            /> */}

            {/* Product Image */}
            <img
              src={item.img}
              loading="lazy"
              alt={item.title}
              style={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
                zIndex: 3,
                filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08))",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>

          {/* Content Section with Modern Layout */}
          <Box sx={{ padding: { xs: 2.5, sm: 3.5 } }}>
            {/* Title with Accent Line */}
            <Box sx={{ position: "relative", mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  fontWeight: 600,
                  color: "#ffffffff",
                  textAlign: "center",
                  position: "relative",
                  paddingBottom: 1,
                }}
              >
                {item.title}
              </Typography>
              
              {/* Decorative Line */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  background: "white",
                  borderRadius: "2px",
                }}
              />
            </Box>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: "#ffffffff",
                lineHeight: 1.7,
                textAlign: "center",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                mb: 3,
                minHeight: "48px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.desc}
            </Typography>

            {/* Modern Button Design */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                onClick={() => onOpen(item.pdf)}
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  background: "linear-gradient(135deg, #f42409ff 0%, #ee0909ff 100%)",
                  color: "#ffffff",
                  padding: { xs: "12px 24px", sm: "14px 28px" },
                  borderRadius: "50px",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "2px solid transparent",
                  overflow: "hidden",
                  
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    padding: "2px",
                    background: "linear-gradient(135deg, #0fa95e, #34d399, #10b981)",
                    borderRadius: "inherit",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(15, 169, 94, 0.3)",
                    
                    "&::before": {
                      opacity: 1,
                    }
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.1em",
                    transition: "transform 0.3s ease",
                    
                    ".MuiBox-root:hover &": {
                      transform: "translateX(2px)",
                    }
                  }}
                >
                  📄
                </Box>
                Download Brochure
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  </Grid>
));



const SalesRentalDealerPage = () => {
  const cardData = useCardData();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openPdf, setOpenPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleOpenPdf = useCallback((url) => {
    setPdfUrl(url);
    setOpenPdf(true);
  }, []);

  const handleClosePdf = useCallback(() => setOpenPdf(false), []);

  return (
    <Box 
      className="genset-bg" 
      sx={{ 
        minHeight: "100vh", 
        padding: { 
          xs: "16px", 
          sm: "20px", 
          md: "24px", 
          lg: "32px" 
        },
background:`url(${image8}) center center/cover no-repeat`,
        

      }}
    >
              <Typography textAlign='center' color="#ff4400ff" variant={isMobile ? "h4" : "h3"} fontWeight='bold' fontSize={{xs:'1.5rem',md:'3.5rem'}}>Generator / Sales / Rental </Typography>

        <Box
          sx={{
            maxWidth: 200,
            mx: "auto",
            mt:2,
            mb: 5,
            backgroundColor: "#ff6a00ff",
            height: 3,
            borderRadius: 2,
          }}
        />
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        sx={{ maxWidth: "1800px", margin: "0 auto" }}
      >
        {cardData.map((item, index) => (
          <GensetCard 
            key={item.id} 
            index={index} 
            item={item} 
            onOpen={handleOpenPdf}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        ))}
      </Grid>

      <Dialog 
        open={openPdf} 
        onClose={handleClosePdf} 
        fullWidth 
        maxWidth="xl"
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            margin: { xs: 0, sm: 2 },
            width: { xs: '100%', sm: '95%' },
            height: { xs: '100%', sm: '95%' },
            maxHeight: { xs: '100%', sm: '90vh' },
            overflow:"hidden"
          }
        }}
      >
        <Box 
          sx={{ 
            position: "absolute", 
            top: { xs: 5, sm: 10 }, 
            right: { xs: 5, sm: 10 }, 
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50%"
          }}
        >
          <IconButton 
            onClick={handleClosePdf}
            sx={{ color: "white" }}
          >
            <CloseIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
        </Box>

        <Box sx={{ 
          height: "100%", 
          paddingTop: { xs: "40px", sm: "0" } 
        }}>
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            style={{ 
              width: "100%", 
              height: "100%", 
              border: "none",
              minHeight: isMobile ? "calc(100vh - 40px)" : "90vh"
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default SalesRentalDealerPage;