import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  InputAdornment,
  Grid,
  Paper
} from "@mui/material";
import bg from '../assets/osgenpowerabout.jpg';
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import img1 from "../assets/osgenpower_Contactus.jpg";
import FAQSection from "../Components/FAQSections";
import img5 from "../assets/osgenpower_Untitleddesign.jpg";

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
          mt: { xs: 0, sm: 0, md: 2 },
          width: "100%",
          height: { xs: "40vh", sm: "50vh", md: "55vh" },
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >

        <Box sx={{ zIndex: 2 }}>
          <MotionTypography
            variant="h2"
            mt={2}
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
        sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 8 }, background: "#F9F8F6", mb: { xs: 4, md: 8 } }}
      >
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* FORM SIDE */}
          <Grid container spacing={4} alignItems="center" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Left side - Form */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                component={Paper}
                elevation={6}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  width: "100%",
                  maxWidth: "500px",
                  backdropFilter: "blur(12px)",
                  background: "rgba(255,255,255,0.8)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    background: "linear-gradient(90deg, #ff4d4d, #ff8c1a, #ffd11a, #33cc33, #1ab2ff, #b31aff)",
                    backgroundSize: "400% 400%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "colorLoop 8s ease infinite",
                    mb: 3,
                    "@keyframes colorLoop": {
                      "0%": { backgroundPosition: "0% 50%" },
                      "50%": { backgroundPosition: "100% 50%" },
                      "100%": { backgroundPosition: "0% 50%" },
                    },
                  }}
                >
                  Enquiry Form
                </Typography>


                {/* FormSubmit Form */}
                <form
                  action="https://formsubmit.co/info@omshakthigenpower.com"
                  method="POST"
                  onSubmit={() => setLoading(true)}
                >
                  {/* Hidden Config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Enquiry from Om Shakthi Genpower Website"
                  />
                  <input type="hidden" name="_next" value="https://thirumalthirumagal.com" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Full Name */}
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    required
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{ color: "#c62828" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        transition: "0.3s",
                        "& fieldset": { borderColor: "#e0e0e0" },

                        "&:hover fieldset": { borderColor: "#c62828" },

                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                          background: "white",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          animation: "borderRotate 4s linear infinite",
                        },
                      },
                    }}
                  />


                  {/* Phone Number */}
                  <TextField
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    name="number"
                    required
                    margin="normal"
                    value={formData.number}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: "#c62828" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        transition: "0.3s",
                        "& fieldset": { borderColor: "#e0e0e0" },

                        "&:hover fieldset": { borderColor: "#c62828" },

                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                          background:
                            "white",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          animation: "borderRotate 4s linear infinite",
                        },
                      },
                    }}
                  />


                  {/* Alternate Number */}
                  <TextField
                    fullWidth
                    type="tel"
                    label="Alternate Phone Number"
                    name="altNumber"
                    margin="normal"
                    value={formData.altNumber}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: "#757575" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        transition: "0.3s",
                        "& fieldset": { borderColor: "#e0e0e0" },

                        "&:hover fieldset": { borderColor: "#616161" },

                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                          background:
                            "white",
                          borderWidth: "2px",
                          borderStyle: "solid",
                        },
                      },
                    }}
                  />


                  {/* Message */}
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    required
                    margin="normal"
                    value={formData.message}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MessageIcon sx={{ color: "#c62828", mt: 1 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        transition: "0.3s",
                        "& fieldset": { borderColor: "#e0e0e0" },

                        "&:hover fieldset": { borderColor: "#c62828" },

                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                          background:
                            "white",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          animation: "borderRotate 4s linear infinite",
                        },
                      },
                    }}
                  />


                  {/* Submit Button */}
                  <Button
                    fullWidth
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    sx={{
                      mt: 3,
                      py: 1.4,
                      fontWeight: "bold",
                      fontSize: "1.08rem",
                      borderRadius: 3,
                      background: "linear-gradient(90deg,#e53935, #d81b60)",
                      boxShadow: "0 6px 18px rgba(216,27,96,0.35)",
                      transition: "0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={26} color="inherit" />
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              </MotionBox>
            </Grid>

            {/* Right side - Image */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <MotionBox
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <Box
                  component={motion.img}
                  src={img5}
                  alt="Contact Us"
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  }}
                />
              </MotionBox>
            </Grid>
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

      <FAQSection />
    </>
  );
}
