import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import ReliablePowerSection from "../Components/ReliableComponents";
import WhyChooseUs from "../Components/WhyChooseus";
import ExperienceSection from "../Components/ExperienceSections";
import MissionVisionTabs from "../Components/MisisonVisisnTable";
import ReachUs from "../Components/ReachUs";
import img1 from '../assets/osgenpowerbannerimages.webp';
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
       {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
              <ReliablePowerSection/>

      {/* </MotionBox> */}
       {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
{/* <img src={img1} style={{width:"100%",height:"auto"}} alt="" /> */}
              <WhyChooseUs/>

      {/* </MotionBox> */}
{/* ✅ Who We Are Section */}
     
     

      {/* ✅ Services Provided */}
      {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
        <WeAreProviding />
      {/* </MotionBox> */}

       {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      > */}
        <WhoWeAre />
      {/* </MotionBox> */}


           {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      > */}
                   <MissionVisionTabs />

      {/* </MotionBox> */}
      {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
        <ExperienceSection/>

      {/* </MotionBox> */}
      
      {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
        <ReachUs/>

      {/* </MotionBox> */}
 


      {/* ✅ FAQ Section */}
      {/* <MotionBox
        variants={sectionFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      > */}
        <FAQSection />
      {/* </MotionBox> */}
   </>
  );
};

export default HomePage;
