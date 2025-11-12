import React from 'react'
import HeroSectionContainer from '../Components/HeroSectionContainer'
import SmartTechnology from '../Components/SmartTechnology'
import WeAreProviding from '../Components/WeAreProviding'
import WhoWeAre from '../Components/WhoweAre'
import ServiceHighlightSection from '../Components/ServiceHighlightSection'

const HomePage = () => {
  return (
    <>
    <HeroSectionContainer />
    <SmartTechnology/>
    <WeAreProviding/>
    <WhoWeAre/>
    <ServiceHighlightSection/>
    <h1>Welcome</h1>
    
    </>
  )
}

export default HomePage
