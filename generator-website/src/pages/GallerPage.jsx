import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Import images
import img1 from "../assets/gallery/osgenpower_gallery_img1.webp";
import img2 from "../assets/gallery/osgenpower_gallery_img2.jpg";
import img3 from "../assets/gallery/osgenpower_gallery_img3.jpg";
import img7 from "../assets/gallery/osgenpower_gallery_img4.jpg";
import img8 from "../assets/gallery/osgenpower_gallery_img5.jpg";
import img4 from "../assets/osgenpower_Kcc35kv.png";
import img5 from "../assets/osgenpower_kcc512kvimage.png";
import img6 from "../assets/osgenpower_Kcc1530kvimage.jpeg";
import img9 from "../assets/gallery/osgenpower_gallery.jpg";

const GalleryPage = () => {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [activeDisplayIndex, setActiveDisplayIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentImageIndex, setModalCurrentImageIndex] = useState(0);
  const autoslideRef = useRef(null);

  // 🔁 Auto-slide
  const startAutoslide = useCallback(() => {
    if (autoslideRef.current) clearInterval(autoslideRef.current);
    autoslideRef.current = setInterval(() => {
      setActiveDisplayIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);
  }, [allImages.length]);

  useEffect(() => {
    startAutoslide();
    return () => clearInterval(autoslideRef.current);
  }, [startAutoslide]);

  const handleThumbnailClick = useCallback(
    (index) => {
      setActiveDisplayIndex(index);
      startAutoslide();
    },
    [startAutoslide]
  );

  // 📸 Modal handlers
  const handleOpenModal = useCallback((index) => {
    setModalCurrentImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const handleNext = useCallback(() => {
    setActiveDisplayIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setActiveDisplayIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  }, [allImages.length]);

  const handleNextModalImage = useCallback(() => {
    setModalCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrevModalImage = useCallback(() => {
    setModalCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  }, [allImages.length]);

  return (
    <Box sx={{ backgroundColor: "#F9F9F9", py: 6 }}>
      {/* 🔸 Header */}
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

      {/* 🎞️ Main Slideshow Section with Arrows */}
<Box
  sx={{
    mx: "auto",
    position: "relative",
    cursor: "pointer",
    mb: 4,
    p: 0,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    display: "flex",
    justifyContent: "center",   
    alignItems: "center",       
  }}
  onClick={() => handleOpenModal(activeDisplayIndex)}
>


  <AnimatePresence mode="wait">
    <motion.img
      key={activeDisplayIndex}
      src={allImages[activeDisplayIndex]}
      alt={`Gallery Image ${activeDisplayIndex + 1}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "auto",
        alignItems:"center",
        display: "block",
        background: "none",
        margin: 0,
        padding: 0,
      }}
    />
  </AnimatePresence>

  {/* Left Arrow */}
  <IconButton
    onClick={(e) => {
      e.stopPropagation();
      handlePrev();
    }}
    sx={{
      position: "absolute",
      top: "50%",
      left: 10,
      transform: "translateY(-50%)",
      color: "white",
      backgroundColor: "rgba(0,0,0,0.3)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>

  {/* Right Arrow */}
  <IconButton
    onClick={(e) => {
      e.stopPropagation();
      handleNext();
    }}
    sx={{
      position: "absolute",
      top: "50%",
      right: 10,
      transform: "translateY(-50%)",
      color: "white",
      backgroundColor: "rgba(0,0,0,0.3)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
</Box>


      {/* 🖼️ Thumbnail Row */}
      <Box
        sx={{
          px: { xs: 2, md: 2 },
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 2,
          "&::-webkit-scrollbar": { height: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "10px",
          },
        }}
      >
        {allImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleThumbnailClick(index)}
            style={{
              flexShrink: 0,
              width: "150px",
              height: "100px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              border:
                index === activeDisplayIndex
                  ? "3px solid #ff6a00ff"
                  : "3px solid transparent",
              boxShadow:
                index === activeDisplayIndex
                  ? "0 0 10px rgba(255,106,0,0.5)"
                  : "0 2px 6px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        ))}
      </Box>

      {/* 🔍 Modal View */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullWidth
        maxWidth="lg"
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
          onClick={() => setIsModalOpen(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.4)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            zIndex: 10,
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
          <IconButton
            onClick={handlePrevModalImage}
            sx={{
              position: "absolute",
              left: { xs: 10, md: 20 },
              color: "white",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>

          <motion.img
            key={modalCurrentImageIndex}
            src={allImages[modalCurrentImageIndex]}
            alt="Gallery Modal Large"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />

          <IconButton
            onClick={handleNextModalImage}
            sx={{
              position: "absolute",
              right: { xs: 10, md: 20 },
              color: "white",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
