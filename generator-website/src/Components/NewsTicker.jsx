import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
  const labelRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Speed: pixels per second
  const SPEED = 80;

  // 🔧 Efficient re-measure of widths
  useLayoutEffect(() => {
    const measure = () => {
      if (!textRef.current) return;
      const halfWidth = textRef.current.scrollWidth / 2;
      setSingleSetWidth(halfWidth);
    };
    measure();

    // debounce resize to reduce calls
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(measure, 300);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔄 Start infinite animation once measurement ready
  useEffect(() => {
    if (!singleSetWidth) return;
    const duration = singleSetWidth / SPEED;
    controls.set({ x: 0 });
    controls.start({
      x: -singleSetWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [singleSetWidth, controls]);

  // ✅ Pause & Resume Handling — optimized
  const pauseTicker = () => {
    if (isPaused) return;
    setIsPaused(true);
    controls.stop();
  };

  const resumeTicker = async () => {
    if (!isPaused || !singleSetWidth) return;
    setIsPaused(false);
    const currentTransform = getComputedStyle(textRef.current).transform;
    let currentX = 0;
    if (currentTransform && currentTransform !== "none") {
      const values = currentTransform.match(/matrix.*\((.+)\)/);
      if (values && values[1]) {
        currentX = parseFloat(values[1].split(", ")[4]) || 0;
      }
    }

    const progress = Math.abs(currentX % singleSetWidth);
    const remaining = singleSetWidth - progress;
    const duration = remaining / SPEED;

    await controls.start({
      x: -singleSetWidth,
      transition: { duration, ease: "linear" },
    });

    // restart continuous loop
    controls.start({
      x: -singleSetWidth,
      transition: {
        duration: singleSetWidth / SPEED,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const labelWidth = labelRef.current ? labelRef.current.offsetWidth : 160;

  return (
    <Box
      ref={containerRef}
      onMouseEnter={pauseTicker}
      onMouseLeave={resumeTicker}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: 25, sm: 35, md: 35 },
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        borderTop: "3px solid #ff4444",
        borderBottom: "3px solid #ff4444",
        boxShadow: "0 4px 20px rgba(255,68,68,0.4)",
        color: "#fff",
        width: "100%",
        willChange: "transform",
      }}
    >
      {/* Label */}
      <Box
        ref={labelRef}
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
          minWidth: { xs: 100, sm: 120, md: 160 },
          clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 100%, 0 100%)",
          boxShadow: "3px 0 15px rgba(255,68,68,0.6)",
          zIndex: 3,
          px: 2,
        }}
      >
        <Typography
          variant="caption"
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

      {/* Scroller */}
      <Box
        sx={{
          marginLeft: `${labelWidth + 12}px`,
          width: `calc(100% - ${labelWidth + 12}px)`,
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          ref={textRef}
          animate={controls}
          style={{
            display: "flex",
            alignItems: "center",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {[...Array(2)].map((_, dupIndex) => (
            <Typography
              key={dupIndex}
              component="div"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: { xs: "0.85rem", sm: "1rem", md: "0.95rem" },
                fontWeight: 500,
                color: "#fff",
                gap: "100px",
                ml: dupIndex === 1 ? "40px" : 0,
              }}
            >
              {newsItems.map((item, i) => (
                <span key={`${dupIndex}-${i}`} style={{ display: "inline-block" }}>
                  {item}
                </span>
              ))}
            </Typography>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
