import React from 'react'
import HeroSectionContainer from '../Components/HeroSectionContainer'
import SmartTechnology from '../Components/SmartTechnology'
import WeAreProviding from '../Components/WeAreProviding'
import WhoWeAre from '../Components/WhoweAre'
import ServiceHighlightSection from '../Components/ServiceHighlightSection'
import FAQSection from '../Components/FAQSections'

const HomePage = () => {
  return (
    <>
    <HeroSectionContainer />
    <SmartTechnology/>
    <WeAreProviding/>
    <WhoWeAre/>
    <ServiceHighlightSection/>
    <FAQSection/>
    
    </>
  )
}

export default HomePage
