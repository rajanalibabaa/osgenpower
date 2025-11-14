import React, { useState } from "react";
import {
  Box,
  Grid,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from '../assets/gallery/osgenpower_gallery_img1.webp'
import img2 from '../assets/gallery/osgenpower_gallery_img2.jpg'
import img3 from '../assets/gallery/osgenpower_gallery_img3.jpg'
import img7 from '../assets/gallery/osgenpower_gallery_img4.jpg'
import img8 from '../assets/gallery/osgenpower_gallery_img5.jpg'
import img4 from '../assets/osgenpower_Kcc35kv.png'
import img5 from '../assets/osgenpower_kcc512kvimage.png'
import img6 from '../assets/osgenpower_Kcc1530kvimage.jpeg'
import img9 from '../assets/gallery/osgenpower_gallery.jpg'
const GalleryPage = () => {
  // 🖼️ Example image array (replace with your real imported images)
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // 🧠 State
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleNext = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <Box sx={{ backgroundColor: "#F9F9F9", py: 6 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        sx={{
          mb: 1,
          background: "linear-gradient(90deg,#d63939, #df3ebc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Gallery
      </Typography>
<Box
          sx={{
            maxWidth: 200,
            mx: "auto",
            mb: 5,
            backgroundColor: "#ff6a00ff",
            height: 3,
            borderRadius: 2,
          }}
        />
      {/* 🔳 Responsive Grid */}
      <Grid container spacing={2} justifyContent="center" px={{ xs: 2, md: 10 }}>
        {images.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
              onClick={() => handleOpen(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* 🖼️ Modal / Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            background: "black",
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          sx={{ height: { xs: "60vh", md: "80vh" } }}
        >
          {/* Left Navigation */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Main Image */}
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Gallery Large View"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />

          {/* Right Navigation */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
