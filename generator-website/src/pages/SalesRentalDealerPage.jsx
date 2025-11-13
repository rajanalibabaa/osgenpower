import React from "react";
import  Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import   Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import CardMedia  from "@mui/material/CardMedia";
import  Button from "@mui/material/Button";

import { motion } from "framer-motion";
import image1 from "../assets/Kcc35kv.png"
// Example data array for 7 gensets
const gensetData = [
  {
    id: 1,
    title: "KCC - 3kVA to 5kVA Portable Diesel Genset",
    description:
"KOEL Green Gensets offer a unique combina􀀦on of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substan􀀦al savings in fuel cost."   ,
 image: image1,
  },
  {
    id: 2,
    title: "KOEL Chhota Gensets - 5-kva-12.5-kva",
    description:
      "KOEL AMFi panels automa􀀟cally switch on your genset when the mains supply fails and switch off the genset when the mains supply restores giving you un-matched convenience.",
    image: "/images/genset2.png",
  },
  {
    id: 3,
    title: "KCC - 15kVA to 20kVA Genset",
    description:
      "KOEL Green Gensets offer a unique combina􀀦on of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substan􀀦al savings in fuel cost.",
    image: "/images/genset3.png",
  },
  {
    id: 4,
    title: "KOEL Green - 15kVA to 30kVA",
    description:
      "KOEL Green Gensets offer a unique combina􀀦on of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substan􀀦al savings in fuel cost.",
    image: "/images/genset4.png",
  },
  {
    id: 5,
    title: "KOEL Green - 40kVA to 125kVA",
    description:
      "KOEL Green Gensets offer a unique combina􀀦on of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substan􀀦al savings in fuel cost.",
    image: "/images/genset5.png",
  },
  {
    id: 6,
    title: "KOEL Green Gensets - 160-kva-250-kva",
    description:
      "Revised CPCB norms are aimed at protec􀀦ng the environment by reducing Genset emissions and improving emission quality. These are some of the most stringent emission norms in the world.",
    image: "/images/genset6.png",
  },
  {
    id: 7,
    title: "KOEL Green Gensets - 320-1010 kva",
    description:
      "KOEL Green Gensets offer a unique combina􀀦on of CPCB norm compliance and enhanced fuel efficiency. Across the range, KOEL Green Gensets offer substan􀀦al savings in fuel cost.",
    image: "/images/genset7.png",
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GensetCard = ({ genset }) => (
  <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }}>
    <Card
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f9f9f9 0%, #fff 100%)",
        boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={genset.image}
        alt={genset.title}
        sx={{ height: 200, objectFit: "contain", p: 2 }}
      />
      <CardContent sx={{ textAlign: "center", px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {genset.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {genset.description}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            borderColor: "#007b55",
            color: "#007b55",
            "&:hover": {
              backgroundColor: "#007b55",
              color: "#fff",
            },
          }}
        >
          MORE INFO
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const SalesRentalDealerPage = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: "#f5f6f8" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 6,
          color: "#333",
        }}
      >
        KOEL Green Gensets
      </Typography>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Grid container spacing={4}>
          {gensetData.map((genset) => (
            <Grid item xs={12} sm={6} md={4} key={genset.id}>
              <GensetCard genset={genset} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default SalesRentalDealerPage;
