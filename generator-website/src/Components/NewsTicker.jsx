import React, { useLayoutEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const newsItems = [
  "⚡ PowerGen introduces new silent diesel generators for residential use.",
  "🔋 24x7 Generator Maintenance Service now available in all metro cities.",
  "🌧️ Rain-ready portable generators now in stock — perfect for monsoon season.",
  "🏭 Industrial 200KVA Generators at special dealer prices this month!",
  "🔧 Book your Annual Generator Health Checkup today and save 20%.",
  "💡 New energy-efficient generators with 40% better fuel economy launched.",
  "🎯 Limited time offer: Get free installation with every generator purchase.",
  "⭐ PowerGen wins 'Best Generator Brand 2024' award for third consecutive year.",
];

export default function EnhancedNewsTicker() {
  const controls = useAnimation();
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [widths, setWidths] = useState({ textWidth: 2000, containerWidth: 1000 });
  const [currentX, setCurrentX] = useState(0);

  const SPEED = 70; // pixels per second

  // Measure width before paint
  useLayoutEffect(() => {
    const measureWidth = () => {
      if (textRef.current && containerRef.current) {
        const totalWidth = textRef.current.scrollWidth;
        const containerW = containerRef.current.offsetWidth;
        setWidths({ textWidth: totalWidth, containerWidth: containerW });
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  // Start animation instantly
  useLayoutEffect(() => {
    const { textWidth, containerWidth } = widths;
    if (textWidth && containerWidth) {
      const distance = textWidth + containerWidth;
      const duration = distance / SPEED;

      controls.start({
        x: [containerWidth, -textWidth],
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [widths, controls]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();

    // Save current position
    if (textRef.current) {
      const transform = getComputedStyle(textRef.current).transform;
      if (transform !== "none") {
        const matrix = new DOMMatrixReadOnly(transform);
        setCurrentX(matrix.m41);
      }
    }
  };

  // Resume smoothly
  const handleMouseLeave = () => {
    setIsPaused(false);

    const { textWidth, containerWidth } = widths;
    const remainingDistance = Math.abs(-textWidth - currentX);
    const remainingDuration = remainingDistance / SPEED;

    controls.start({
      x: [currentX, -textWidth],
      transition: {
        duration: remainingDuration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <Box
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "45px", sm: "55px", md: "35px" },
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        borderTop: "3px solid #ff4444",
        borderBottom: "3px solid #ff4444",
        boxShadow: "0 4px 20px rgba(255,68,68,0.4)",
        color: "#fff",
        width: "100%",
      }}
    >
      {/* 🔥 Label */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, #ff4444 0%, #dd0000 50%, #aa0000 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: "140px", sm: "140px", md: "160px" },
          clipPath: "polygon(0 0, calc(100% - 25px) 0, 100% 100%, 0 100%)",
          boxShadow: "3px 0 15px rgba(255,68,68,0.6)",
          zIndex: 3,
        }}
      >
        <Typography
          variant={{ xs: "caption", sm: "caption", md: "h6" }}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", sm: "0.7rem", md: "1rem" },
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          Latest News
        </Typography>
      </Box>

      {/* 📰 Scrolling Text */}
      <Box
        sx={{
          marginLeft: { xs: "100px", sm: "140px", md: "180px" },
          width: "calc(100% - 200px)",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <motion.div ref={textRef} animate={controls}>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: { xs: "0.85rem", sm: "1rem", md: "0.95rem" },
              fontWeight: 500,
              color: "#ffffff",
            }}
          >
            {[...newsItems, ...newsItems].map((item, i) => (
              <span key={i} style={{ marginRight: "100px" }}>
                {item}
              </span>
            ))}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
