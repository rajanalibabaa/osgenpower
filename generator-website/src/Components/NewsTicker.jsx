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
  const labelRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  // singleSetWidth = width of ONE set of items (we render two sets for seamless loop)
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const SPEED = 80; // pixels per second

  // Measure widths (single set width = half of the scrollWidth because we duplicate contents)
  useLayoutEffect(() => {
    const measure = () => {
      if (!textRef.current || !containerRef.current) return;
      const totalScroll = textRef.current.scrollWidth; // this contains two sets
      const single = Math.round(totalScroll / 2);
      const cw = containerRef.current.offsetWidth;
      setSingleSetWidth(single);
      setContainerWidth(cw);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (textRef.current) ro.observe(textRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // Start animation when measurements are ready
  useLayoutEffect(() => {
    if (!singleSetWidth || !containerWidth) return;

    // We animate from x: 0 to x: -singleSetWidth and repeat infinitely.
    // This works because the markup contains two identical sets in a row.
    const duration = singleSetWidth / SPEED;
    controls.set({ x: 0 }); // ensure precise starting point
    controls.start({
      x: -singleSetWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [singleSetWidth, containerWidth, controls]);

  // Helper: read current transform X (in px) of the animated element
  const readCurrentTransformX = () => {
    if (!textRef.current) return 0;
    const transform = getComputedStyle(textRef.current).transform;
    if (!transform || transform === "none") return 0;
    try {
      const matrix = new DOMMatrixReadOnly(transform);
      return matrix.m41; // px
    } catch {
      return 0;
    }
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    // stop animation (pauses at current frame)
    controls.stop();

    // save current x
    const cx = readCurrentTransformX();
    setCurrentX(cx);
  };

  // Resume on leave — compute remaining distance to travel in the current loop,
  // then start a linear animation from currentX to -singleSetWidth and continue repeating.
  const handleMouseLeave = () => {
    setIsPaused(false);

    if (!singleSetWidth) {
      // fallback: restart full animation
      const duration = singleSetWidth / SPEED;
      controls.start({
        x: -singleSetWidth,
        transition: { duration, ease: "linear", repeat: Infinity, repeatType: "loop" },
      });
      return;
    }

    let cx = readCurrentTransformX();
    setCurrentX(cx);

    // Normalize cx into the range [-singleSetWidth, 0)
    // Because the animation translates from 0 -> -singleSetWidth repetitively,
    // the productive offset modulo singleSetWidth gives the progress.
    // matrix.m41 will be negative (or zero). We'll convert to positive progress.
    const abs = Math.abs(cx);
    const progressInLoop = abs % singleSetWidth; // how much has already moved in current cycle
    const remaining = singleSetWidth - progressInLoop; // px to go before one full cycle is done
    // Duration for remaining chunk
    const duration = remaining / SPEED;

    // Animate from current position to the target (-singleSetWidth), then resume repeating
    // We need to set immediate 'x' to current computed value so framer starts from the correct spot
    controls.set({ x: cx });
    controls.start({
      x: -singleSetWidth,
      transition: {
        duration: duration > 0 ? duration : singleSetWidth / SPEED,
        ease: "linear",
        // After finishing this single pass, repeat full cycles
        // Achieve this by chaining: first this animation, then start repeating animation in .then
      },
    }).then(() => {
      // restart continuous loop
      controls.start({
        x: -singleSetWidth,
        transition: {
          duration: singleSetWidth / SPEED,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    });
  };

  // compute paddingLeft based on label width so layout adapts responsively
  const labelWidth = labelRef.current ? labelRef.current.offsetWidth : 160;

  return (
    <Box
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "25px", sm: "35px", md: "35px" },
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
        ref={labelRef}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #ff4444 0%, #dd0000 50%, #aa0000 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: "100px", sm: "120px", md: "160px" },
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

      {/* Scrolling area */}
      <Box
        sx={{
          marginLeft: `${labelWidth + 12}px`, // leave space for the label (12px buffer)
          width: `calc(100% - ${labelWidth + 12}px)`,
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {/* motion.div is the moving strip. It contains TWO identical sets of content for seamless looping */}
        <motion.div
          ref={textRef}
          animate={controls}
          style={{
            display: "flex",
            alignItems: "center",
            // ensure transform uses translateX
            willChange: "transform",
          }}
        >
          {/* first copy */}
          <Typography
            component="div"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: { xs: "0.85rem", sm: "1rem", md: "0.95rem" },
              fontWeight: 500,
              color: "#ffffff",
              gap: "100px",
            }}
          >
            {newsItems.map((item, i) => (
              <span key={`a-${i}`} style={{ display: "inline-block" }}>
                {item}
              </span>
            ))}
          </Typography>

          {/* second copy (duplicate) */}
          <Typography
            component="div"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: { xs: "0.85rem", sm: "1rem", md: "0.95rem" },
              fontWeight: 500,
              color: "#ffffff",
              gap: "100px",
              ml: "40px",
            }}
          >
            {newsItems.map((item, i) => (
              <span key={`b-${i}`} style={{ display: "inline-block" }}>
                {item}
              </span>
            ))}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
