import React from "react";
import img from "../assets/osgenpowerreachessoon-Photoroom.png";
import { Box, Typography, Button, Stack } from "@mui/material";

const ReachUs = () => {
  return (
    <Box
      sx={{
        background: "white",
        mb: 7,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "490px",
        px: { xs: 3, md: 8 },
        py: { xs: 10, md: 8 },
        gap: { xs: 4, md: 10 },
      }}
    >
      {/* ---------- LEFT SIDE IMAGE ---------- */}
      <Box
        component="img"
        src={img}
        alt="Reach Us"
        sx={{
            // mb:-2.5,
          width: { xs: "100%", md: "50%" },
          height: "auto",
          maxHeight: "600px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />

      {/* ---------- RIGHT SIDE CONTENT ---------- */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "50%" },
          color: "#000000ff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Reach Us
        </Typography>

        <Typography
          sx={{
            color: "#000000ff",
            lineHeight: 1.7,
            mb: 4,
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: "95%",
          }}
        >
          Om Shakthi GEN POWER provides reliable power solutions, 24/7 service support,
          and nationwide on-site assistance. Whether you need generator sales,
          installation, AMC, rental, or emergency backup — our expert team is
          ready to help anytime.
        </Typography>

        {/* CTA BUTTONS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.3,
              background: "#e81010",
              fontWeight: 600,
              "&:hover": { background: "#c50f0f" },
            }}
          >
            Contact Now
          </Button>

          <Button
            variant="outlined"
            sx={{
              px: 4,
              py: 1.3,
              borderColor: "#000000ff",
              color: "#000000ff",
              fontWeight: 600,
              "&:hover": { borderColor: "#e81010", color: "#e81010" },
            }}
          >
            Explore Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ReachUs;
