import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
// 🧠 Lazy-loaded sections for performance
const HeroSectionContainer = React.lazy(() => import("../Components/HeroSectionContainer"));
const SmartTechnology = React.lazy(() => import("../Components/SmartTechnology"));
const WeAreProviding = React.lazy(() => import("../Components/WeAreProviding"));
const WhoWeAre = React.lazy(() => import("../Components/WhoweAre"));
const ServiceHighlightSection = React.lazy(() => import("../Components/ServiceHighlightSection"));
const FAQSection = React.lazy(() => import("../Components/FAQSections"));

const MotionBox = motion(Box);

const sectionFadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <HeroSectionContainer />

      {/* ✅ Smart Technology */}
      <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SmartTechnology />
      </MotionBox>

      {/* ✅ Services Provided */}
      <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <WeAreProviding />
      </MotionBox>

      {/* ✅ Who We Are Section */}
      <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <WhoWeAre />
      </MotionBox>

      {/* ✅ Service Highlights */}
      <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <ServiceHighlightSection />
      </MotionBox>

      {/* ✅ FAQ Section */}
      <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <FAQSection />
      </MotionBox>
   </>
  );
};

export default HomePage;
