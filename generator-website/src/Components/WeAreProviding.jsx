import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

import img1 from "../assets/wheareProviding.png";
import img2 from "../assets/generaterservices.jpg";
import img3 from "../assets/Generatesales.png";

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
  "etc..",
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const ServiceCard = ({ service, index }) => (
  <motion.div variants={fadeInUp} custom={index}>
    <Card
      sx={{
        borderRadius: 3,
        background: "#ffffff01",
        border: "1px solid #64fc06ff",
        overflow: "hidden",
        height: "100%",
        cursor: "pointer",
        transition: "all 0.35s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          borderColor: `${service.color}60`,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          p: { xs: 1.5, sm: 2, md: 2.5 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: 50, sm: 55, md: 60 },
            height: { xs: 50, sm: 55, md: 60 },
            borderRadius: "12px",
            overflow: "hidden",
            mr: { xs: 1.5, md: 2 },
            position: "relative",
            flexShrink: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
            },
          }}
        >
          <Box
            component="img"
            src={service.icon}
            alt={service.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#333",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            flex: 1,
          }}
        >
          {service.title}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const WeAreProviding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, sm: 8, md: 12 },
        background: `url(${img1}) no-repeat right/contain`,
        backgroundPosition: {
          xs: "calc(100% + 100px) center",
          sm: "calc(100% + 200px) center",
          md: "calc(100% + 200px) center",
        },
        backgroundAttachment: "scroll",
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              gutterBottom
              color="#ff4400ff"
            >
              We Are Providing
            </Typography>
            <Box
              sx={{
                maxWidth: 200,
                mx: "auto",
                mb: 2,
                backgroundColor: "#ff6a00ff",
                height: 3,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "#666",
                fontWeight: 400,
                px: { xs: 2, sm: 0 },
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Our Generators cater to a host of industries across Chennai
            </Typography>
          </Box>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 4, sm: 2 }}
          alignItems={{ xs: "center", md: "left" }}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Grid item xs={12} md={6} sx={{ p: { xs:1, sm: 1, md: 5 } }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    mb: 1,
                    lineHeight: 1.8,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  We provide{" "}
                  <Box component="span" sx={{ color: "#ff4400", fontWeight: 600 }}>
                    Sales
                  </Box>
                  ,{" "}
                  <Box component="span" sx={{ color: "#ff4400", fontWeight: 600 }}>
                    Services
                  </Box>
                  ,{" "}
                  <Box component="span" sx={{ color: "#ff4400", fontWeight: 600 }}>
                    Rental
                  </Box>{" "}
                  and{" "}
                  <Box component="span" sx={{ color: "#ff4400", fontWeight: 600 }}>
                    Dealer Support
                  </Box>{" "}
                  solutions for all kinds of power needs.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#333",
                  }}
                >
                  Industries Served:
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  mb: 4,
                }}
              >
                {industries.map((industry, i) => (
                  <motion.div key={i} variants={fadeInUp} custom={i}>
                    <Chip
                      label={industry}
                      sx={{
                        px: 2,
                        py: 1,
                        background:
                          "linear-gradient(135deg, #ff6a0020, #ff440020)",
                        color: "#000000ff",
                        fontWeight: 600,
                        fontSize: { xs: "0.75rem", sm: "0.85rem" },
                        border: "1px solid #ff6a0030",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #d04ef8ff, #ff00ccff)",
                          color: "white",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(255,106,0,0.3)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    />
                  </motion.div>
                ))}
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr",
                  },
                  gap: 2.5,
                }}
              >
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WeAreProviding;
