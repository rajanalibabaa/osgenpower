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

import image1 from "../assets/osgenpower_Kcc35kv.png";
import image2 from "../assets/osgenpower_Kcc512kvimage.png";
import image3 from "../assets/osgenpower_Kcc1520kvimage.png";
import image4 from "../assets/osgenpower_Kcc1530kvimage.jpeg";
import image5 from "../assets/osgenpower_koel-green-genset-40kva-125kva.jpg";
import image6 from "../assets/osgenpower_160kVA-250kVAimage.jpg";
import image7 from "../assets/osgenpower_320110kvaimage.png";

const useCardData = () =>
  useMemo(
    () => [
      {
        id: 1,
        img: image1,
        title: "KCC - 3kVA to 5kVA Portable Diesel Genset",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substainal savings in fuel cost.",
        pdf: "/KCC - 3kVA to 5kVA Portable Diesel Genset.pdf",
      },
      {
        id: 2,
        img: image2,
        title: "KOEL Chhota Gensets - 5-kva-12.5-kva",
        desc:
          "KOEL AMFi panels automatically switch on your genset when the mains supply fails and switch off the genset when the mains supply restores giving you un-matched convenience.",
        pdf: "/KCC - 5-kva-125-kva.pdf",
      },
      {
        id: 3,
        img: image3,
        title: "KCC - 15kVA to 20kVA Genset",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substanial savings in fuel cost.",
        pdf: "/KCC - 15kVA to 20kVA Genset.pdf",
      },
      {
        id: 4,
        img: image4,
        title: "KOEL Green - 15kVA to 30kVA",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substanial savings in fuel cost.",
        pdf: "/KOEL Green - 15kVA to 30kVA Product Brochure.pdf",
      },
      {
        id: 5,
        img: image5,
        title: "KOEL Green - 40kVA to 125kVA",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substanial savings in fuel cost.",
        pdf: "/KOEL Green - 40kVA to 125kVA Product Brochure.pdf",
      },
      {
        id: 6,
        img: image6,
        title: "KOEL Green Gensets - 160-kva-250-kva",
        desc:
          "Revised CPCB norms are aimed at protecting the environment by reducing Genset emissions and improving emission quality.",
        pdf: "/160-kva-250-kva.pdf",
      },
      {
        id: 7,
        img: image7,
        title: "KOEL Green Gensets - 320-1010 kva",
        desc:
          "KOEL Green Gensets offer a unique combination of CPCB norm compliance and enhanced fuel efficiency.",
        pdf: "/320-1010 kva.pdf-1.pdf",
      },
    ],
    []
  );

const GensetCard = React.memo(({ index, item, onOpen }) => (
  <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          height: 520,
          width: "100%",
          maxWidth: 600,
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box sx={{ height: 320, overflow: "hidden" }}>
          <img
            loading="lazy"
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.6s ease",
            }}
            className="card-img"
          />
        </Box>

        <CardContent>
          <Typography variant="h6" fontWeight="600">
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "grey.600",
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.desc}
          </Typography>

          <Button
            onClick={() => onOpen(item.pdf)}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
              mx: "auto",
              display: "flex",
              width: "50%",
              color: "#fff",
              textTransform: "none",
              fontWeight: "600",
              borderRadius: "50px",
              padding: "10px 20px",
            }}
          >
            View More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
));

const SalesRentalDealerPage = () => {
  const cardData = useCardData();

  const [openPdf, setOpenPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleOpenPdf = useCallback((url) => {
    setPdfUrl(url);
    setOpenPdf(true);
  }, []);

  const handleClosePdf = useCallback(() => setOpenPdf(false), []);

  return (
    <Box className="genset-bg" sx={{ minHeight: "100vh", p: { xs: 2, sm: 4 } }}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((item, index) => (
          <GensetCard key={item.id} index={index} item={item} onOpen={handleOpenPdf} />
        ))}
      </Grid>

      <Dialog open={openPdf} onClose={handleClosePdf} fullWidth maxWidth="xl">
        <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
          <IconButton onClick={handleClosePdf}>
            <CloseIcon />
          </IconButton>
        </Box>

        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          style={{ width: "100%", height: "90vh", border: "none" }}
        />
      </Dialog>
    </Box>
  );
};

export default SalesRentalDealerPage;
