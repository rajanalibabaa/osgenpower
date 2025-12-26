import React, { useRef, useEffect, useState } from "react";
import {
  Grid,
  Card,
  Chip,
  CardContent,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import img1 from "../assets/osgenpoerwhyweare.webp";
import img2 from "../assets/osgenpower_generaterservices.jpg";
import img3 from "../assets/osgenpower_Generatesales.png";

const services = [
  { title: "Generator Sales", icon: img3, color: "#ff6a00" },
  { title: "Generator Services", icon: img2, color: "#ff4400" },
  { title: "Generator Rental", icon: img3, color: "#9e1c60" },
  { title: "Dealers Support", icon: img2, color: "#764ba2" },
];

const industries = [
  "Manufacturing",
  "Utilities",
  "Construction",
  "Hospitals",
  "IT / Data Centers",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ServiceCard = ({ service, index }) => (
  <motion.div variants={fadeInUp} custom={index}>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        border: "1px solid #e81010",
        background: "#ffffff05",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: service.color,
        },
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component="img"
          src={service.icon}
          alt={service.title}
          sx={{
            width: { xs: 45, sm: 55 },
            height: { xs: 45, sm: 55 },
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Typography fontWeight={600}>{service.title}</Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const ServiceCardScrollable = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.children[0].offsetWidth + 16;
      setActive(Math.round(el.scrollLeft / cardWidth));
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {services.map((s, i) => (
          <Box
            key={i}
            sx={{
              minWidth: { xs: "80vw", sm: "280px" },
              scrollSnapAlign: "start",
            }}
          >
            <ServiceCard service={s} index={i} />
          </Box>
        ))}
      </Box>

      <Box mt={2} display="flex" justifyContent="center" gap={1}>
        {services.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: active === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: active === i ? "#e81010" : "#e8101040",
              transition: "0.3s",
            }}
          />
        ))}
      </Box>
    </>
  );
};

const WeAreProviding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ py: { xs: 5, md: 5 }, background: "#ffffffff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  background: "#e81010",
                  color: "#fff",
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                WE ARE PROVIDING
              </Box>

              <Typography mb={3}>
                We provide <b>Sales</b>, <b>Services</b>, <b>Rental</b> and{" "}
                <b>Dealer Support</b> solutions.
              </Typography>

              <Typography fontWeight={700} mb={2}>
                Industries Served:
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={1.5} mb={4}>
                {industries.map((i) => (
                  <Chip key={i} label={i} sx={{ background: "#e81010", color: "#fff" }} />
                ))}
              </Box>

              {isMobile || isTablet ? (
                <ServiceCardScrollable />
              ) : (
                <Grid container spacing={2}>
                  {services.map((s, i) => (
                    <Grid item xs={6} key={i}>
                      <ServiceCard service={s} index={i} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
            <Box
              component="img"
              src={img1}
              alt="We Are Providing"
              sx={{
                width: "100%",
                maxHeight: "60vh",
                objectFit: "cover",
                borderRadius: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WeAreProviding;
