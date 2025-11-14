import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  InputAdornment,
  Grid,
  IconButton,
} from "@mui/material";
// import {
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   AccountCircle,
//   Message as MessageIcon,
//   LocationOn as LocationOnIcon,
//   WhatsApp as WhatsAppIcon,
// } from "@mui/icons-material";
import PhoneIcons from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import img1 from "../assets/Contactus.jpg";
import FAQSection from "../Components/FAQSections";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    altNumber: "",
    message: "",
  });
  const [loading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* 🧭 HEADER BANNER */}
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "50vh", md: "55vh" },
          backgroundImage: `url(${img1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.3)",
          }}
        /> */}
        <Box sx={{ zIndex: 2 }}>
          <MotionTypography
            variant="h2"
            sx={{
              color: "#e60767ff",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Contact Us
          </MotionTypography>
          <Typography
            variant="subtitle1"
            sx={{
              // mt: 1,
              color: "#000000ff",
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
            }}
          >
            We’d love to hear from you. Get in touch today!
          </Typography>
        </Box>
      </MotionBox>

      {/* 📩 ENQUIRY FORM SECTION */}
      <Box
        component="section"
        sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 8 }, background: "#F9F8F6" }}
      >
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* FORM SIDE */}
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                backgroundColor: "#fff",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg,#d63939, #d22a2a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                }}
              >
                Enquiry Form
              </Typography>

              {/* FormSubmit Form */}
              <form
                action="https://formsubmit.co/info@omshakthigenpower.com"
                method="POST"
              >
                {/* Hidden Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry from Om Shakthi Genpower Website"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://thirumalthirumagal.com"
                />
                <input type="hidden" name="_template" value="table" />

                {/* Input Fields */}
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  type="tel"
                  label="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  type="tel"
                  label="Alternate Phone Number"
                  name="altNumber"
                  value={formData.altNumber}
                  onChange={handleChange}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  variant="contained"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    borderRadius: 3,
                    background: "linear-gradient(90deg,#d63939, #df3e7c)",
                    boxShadow: "0 4px 20px rgba(220,69,187,0.4)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
                    },
                    transition: "0.3s",
                  }}
                >
                  {loading ? <CircularProgress size={26} color="inherit" /> : "Submit"}
                </Button>
              </form>
            </MotionBox>
          </Grid>

          {/* CONTACT INFO SIDE */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              sx={{ px: { xs: 2, md: 3 } }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                sx={{ mb: 3, color: "#d63939" }}
              >
                Contact Information
              </Typography>

              <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Address</Typography>
                    <Typography color="text.secondary">
                      No: 06/04, G Floor, Sandhiveeran Apartments,
                      <br /> Munuswamy Street, Ekkatuthangal, Chennai-600032.
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <PhoneIcon color="success" sx={{ fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography
                      component="a"
                      href="tel:+919841642050"
                      sx={{ color: "inherit", textDecoration: "none" }}
                    >
                      (+91) 98416‑42050 / 98411‑66600
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2}>
                  <EmailIcon color="error" sx={{ fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography
                      component="a"
                      href="mailto:info@omshakthigenpower.com"
                      sx={{ color: "inherit", textDecoration: "none" }}
                    >
                      info@omshakthigenpower.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>

     <FAQSection/>
    </>
  );
}
