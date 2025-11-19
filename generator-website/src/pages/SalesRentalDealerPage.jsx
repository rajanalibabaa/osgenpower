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
        id: 6,
        img: image6,
        title: "KOEL Green Gensets - 160-KVA-250-KVA",
        desc:
          "Revised CPCB norms are aimed at protecting the environment by reducing Genset emissions and improving emission quality. These are some of the most stringent emission norms in the world.",
        pdf: "/OsGenPowerKCC-160-kva-250-kva.pdf",
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
    md={6} 
    lg={4}
    sx={{ 
      display: "flex", 
      justifyContent: "center",
      padding: { xs: "8px", sm: "12px", md: "16px" }
      
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      style={{ 
        height: "100%", 
        width: "100%",
        display: "flex",
        justifyContent: "center",

      }}
    >
      <Card
        sx={{
          height: isMobile ? 380 : isTablet ? 480 : 520,
          width: "100%",
          maxWidth: isMobile ? 400 : 670,
          borderRadius: { xs: "12px", sm: "16px", md: "18px" },
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: isMobile ? "none" : "translateY(-6px)",
            boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : "0 10px 25px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box sx={{ 
          height: isMobile ? 200 : isTablet ? 250 : 320, 
          overflow: "hidden",
          backgroundColor: "#d9f8e6ff"
        }}>
          <img
            loading="lazy"
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.6s ease",
              padding: isMobile ? "8px" : "12px",
            }}
            className="card-img"
          />
        </Box>

        <CardContent sx={{ 
          backgroundColor:'#ffff',
          padding: { xs: "16px", sm: "20px", md: "24px" },
          '&:last-child': { 
            paddingBottom: { xs: "16px", sm: "20px", md: "24px" } 
          }
        }}>
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            textAlign={"center"}
            fontWeight="600"
            sx={{
              fontSize: { 
                xs: "0.9rem", 
                sm: "1rem", 
                md: "1.125rem" 
              },
              lineHeight: { 
                xs: 1.3, 
                sm: 1.4, 
                md: 1.5 
              },
              marginBottom: { xs: 1, sm: 1.5 },
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "grey.600",
              mb: { xs: 2, sm: 2.5 },
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { 
                xs: "0.75rem", 
                sm: "0.8rem", 
                md: "0.875rem" 
              },
              lineHeight: { 
                xs: 1.4, 
                sm: 1.5, 
                md: 1.6 
              },
            }}
          >
            {item.desc}
          </Typography>

          <Button
            onClick={() => onOpen(item.pdf)}
            variant="contained"
            sx={{
              background: "#eb2723",
              mx: "auto",
              display: "flex",
              width: { xs: "70%", sm: "60%", md: "50%" },
              color: "#fff",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "50px",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
              minHeight: { xs: "36px", sm: "40px" },
              '&:hover': {
                background: "linear-gradient(135deg, #e54327 0%, #e53a62 100%)",
                transform: "scale(1.02)",
              }
            }}
          >
            Dounload Brochure
          </Button>
        </CardContent>
      </Card>
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
backgroundColor: "#ffffffff",
      }}
    >
              <Typography textAlign='center' color="#ff4400ff" fontWeight='bold' fontSize={{xs:'1.5rem',md:'2rem'}}>Generator / Sales / Rental / DealerShip</Typography>

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