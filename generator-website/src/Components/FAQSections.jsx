import React,{useState } from "react";
import {  useTheme} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const faqData = [
  {
    question: "Do you provide generators for home and small businesses?",
    answer:
      "Yes, we have compact and silent generators ideal for homes, shops, small offices, and apartments. They are fuel-efficient, low-noise, and easy to maintain.",
  },
  {
    question: "Do you sell industrial and heavy-duty generators?",
    answer:
      "Absolutely. We supply industrial-grade generators for factories, hospitals, data centers, and large-scale facilities. Our team helps you choose the right capacity and setup based on your power load.",
  },
  {
    question: "Do you offer installation and commissioning services?",
    answer:
      "Yes. Our certified engineers handle complete installation, including site inspection, load testing, wiring, and safety setup — ensuring your generator runs perfectly from day one.",
  },
  {
    question: "What kind of maintenance or service do you provide?",
    answer:
      "We provide on-demand service, repairs, and Annual Maintenance Contracts (AMC) to ensure your generator performs optimally. Regular servicing helps avoid breakdowns and extends machine life.",
  },
  {
    question: "How quickly can you respond to a service request?",
    answer:
      "Our service teams are available 24×7, and we aim to respond within 24 hours (or faster in metro areas). Emergency breakdown support is also available.",
  },
  {
    question: "Do you provide services across India?",
    answer:
      "Yes, we have a pan-India service network covering major cities and towns. We also support our dealers with logistics, installation, and after-sales services nationwide.",
  },
  {
    question: "What is “smart generator monitoring”?",
    answer:
      "It’s our IoT-based technology that lets you monitor your generator remotely via a mobile or web dashboard. You can check fuel levels, runtime, and performance, and even get predictive maintenance alerts.",
  },
  {
    question: "Do you provide generator rental or leasing options?",
    answer:
      "Yes, we offer short-term and long-term rental plans for construction sites, events, emergency power, and temporary projects.",
  },
  {
    question: "How can I become a dealer or distributor?",
    answer:
      "Simply fill out our Dealership Application Form or contact our team. We’ll guide you through the process, requirements, and benefits. We offer complete training, marketing support, and attractive margins.",
  },
  {
    question: "Do you sell eco-friendly or hybrid generators?",
    answer:
      "Yes. We offer low-emission hybrid generators and gas-powered models designed for fuel efficiency and minimal environmental impact.",
  },
];

const FAQSection = () => {
  const theme = useTheme();
  const primaryColor = "#000000ff";
  const secondaryColor = "#FF7F50";
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
   const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        // py: { xs: 1, md: 1 },
        mt: { xs: 17, md: 1 },
        p: { xs: 4, sm: 4, md: 4 },
        backgroundColor: "#ffffffff",
      }}
    >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>
            
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: "text.secondary",
              mb: 6,
              mt:3,
              maxWidth: 600,
              mx: "auto",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Find answers to the most common questions about our generators,
            installations, and maintenance services.
          </Typography>
        </MotionBox>
      <Container maxWidth="md">
       
      

      {/* FAQ Accordion List */}
      
{faqData.map((faq, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
  >
    <Accordion
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      elevation={2}
      sx={{
        mb: 2,
        borderRadius: 2,
        overflow: "hidden",
        border: `1px solid ${primaryColor}30`,
        background:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.07)"
            : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        "&:before": { display: "none" },
        "&:hover": {
          boxShadow: `0 4px 20px ${secondaryColor}33`,
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: primaryColor, fontSize: 26 }} />
        }
        aria-controls={`panel-${index}-content`}
        id={`panel-${index}-header`}
      >
        <Typography
          variant="subtitle1"
          fontWeight="600"
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#111",
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          {faq.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.7,
            fontSize: "0.95rem",
            pl: 0.5,
          }}
        >
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </motion.div>
))}
      </Container>
    </Box>
  );
};

export default FAQSection;
