import { Box, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import experienceIcon from "../assets/experience_icon.jpg"; // replace icons
import safetyIcon from "../assets/safety_icon.jpg";
import ethicsIcon from "../assets/ethics_icon.png";
import qualityIcon from "../assets/quality_icon.jpg";
import heroImg from "../assets/osgenpower_generatorhignlight.webp"; // replace image
import { useState, useRef, useEffect } from "react";

const features = [
  { icon: safetyIcon, title: "HEALTH & SAFETY" },
  { icon: ethicsIcon, title: "PROFESSIONAL ETHICS" },
  { icon: experienceIcon, title: "EXPERIENCE & QUALITY" },
  { icon: qualityIcon, title: "EXPERIENCE & QUALITY" },
];
const  FeatureSlider=({ features }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const onScroll = () => {
      const cardWidth = container.firstChild?.offsetWidth;
      if (!cardWidth) return;

      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ---------- MOBILE SCROLL SLIDER ---------- */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: 2,
          px: 2,
          pb: 3,
          mt: -20,
        }}
        ref={scrollRef}
      >
        {features.map((item, i) => (
          <Box
            key={i}
            sx={{
              minWidth: "80%",
              scrollSnapAlign: "center",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              p: 3,
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt={item.title}
              sx={{ width: 120, mb: 2, mx: "auto" }}
            />
            <Typography sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
            <Box
              sx={{
                width: "50px",
                height: "3px",
                background: "#e81010",
                mx: "auto",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* ---------- DOT INDICATORS ---------- */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          mt: -1,
          mb: 4,
          gap: 1,
        }}
      >
        {features.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: activeIndex === i ? 12 : 8,
              height: activeIndex === i ? 12 : 8,
              borderRadius: "50%",
              background: activeIndex === i ? "#e81010" : "#ccc",
              transition: "0.3s",
            }}
          />
        ))}
      </Box>

      {/* ---------- DESKTOP GRID VERSION ---------- */}
      <Grid
        container
        spacing={0}
        sx={{
          display: { xs: "none", sm: "grid" },
          gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          width: "85%",
          background: "#fff",
          borderRadius: "4px",
          overflow: "hidden",
          mt: -20,
          mx: { xs: 0, md: 10 },
          maxHeight: "360px",
        }}
      >
        {features.map((item, i) => (
          <Grid
            item
            key={i}
            sx={{
              borderRight: {
                md:
                  i !== features.length - 1
                    ? "1.5px solid #e81010"
                    : "none",
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: { xs: 2, md: 3 },
                textAlign: "center",
                background: "#fff",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{ width: 120, mb: 2, mx: "auto" }}
              />
              <Typography sx={{ fontWeight: 700, fontSize: "1rem", mb: 1 }}>
                {item.title}
              </Typography>
              <Box
                sx={{
                  width: "50px",
                  height: "3px",
                  background: "#e81010",
                  mx: "auto",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default function ExperienceSection() {
  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 6,mb:5, }}>
      
       
      <Typography
         variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
      >
        CREATING REALITY.
      </Typography>

      <Typography
      sx={{
        textAlign: "center",
            color: "#444",
            lineHeight: 1.7,
            mb: 7,
            fontSize: { xs: "1rem", md: "1rem" },
            // maxWidth: "600px",
          }}
      >
       To serve our customers by fulfilling their power generation needs with reliable products and committed service
      </Typography>

      {/* ---------- IMAGE WITH ORANGE RIBBON ---------- */}
     <Box sx={{ position: "relative", width: "100%", mb: { xs: 25, md: 20 } }}>
        <Box
          component="img"
          src={heroImg}
          alt="experience"
          sx={{
            width: "100%",
            height: { xs: "300px", sm: "400px", md: "500px" },
            objectFit: "cover",
          }}
        />

        {/* ORANGE RIBBON */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: { xs: 10, md: 50 },
            width: { xs: "70px", sm: "100px", md: "140px" },
            height: "100%",
            background: "#e81010",
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 50% 70%, 0 60%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            pt: { xs: 8, sm: 0 }, // adjusts ribbon text up/down
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              mt: { xs: -12, md: -20 },
            }}
          >
            25+
          </Typography>

          <Typography sx={{ fontSize: "0.7rem", fontWeight: 600 }}>
            YEAR OF
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", fontWeight: 600 }}>
            EXPERIENCE
          </Typography>
        </Box>
      </Box>
<FeatureSlider features={features} />
      {/* ---------- FEATURE CARD GRID ---------- */}
      {/* <Grid
        container
        display={'grid'}
        position={"absolute"}
        gridTemplateColumns="repeat(4, 1fr)"
        spacing={0}
        sx={{
          width: "85%",
maxHeight: "360px",          background: "#ffffffff",
          borderRadius: "4px",
          overflow: "hidden",
        //   zIndex: 1200,
          mt: -20,
          ml: { xs: 2, md: 15}
        }}
      >
        {features.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            sx={{
              borderRight:
                i !== features.length - 1 ? "1.5px solid #e81010" : "none",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: 2,
                textAlign: "center",
                background: "#ffffffff",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{ width: 120, mb: 2 }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  width: "50px",
                  height: "3px",
                  background: "#e81010",
                  mx: "auto",
                  mt: 1,
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}
