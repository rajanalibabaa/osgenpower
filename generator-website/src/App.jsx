import React,{ lazy, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const GalleryPage =React.lazy(()=>import('./pages/GallerPage'))
const SalesRentalDealerPage=React.lazy(()=>import('./pages/SalesRentalDealerPage'))
const HomePage=React.lazy(() => import('./pages/HomePage'));
const NewsTicker=React.lazy(() => import('./Components/NewsTicker'));
const AboutPage=React.lazy(() => import('./pages/AboutPage'));
const ContactUsPage=React.lazy(() => import('./pages/ContactUsPage'));
const ServicesPage=React.lazy(() => import('./pages/ServicesPage'));
const KirloskarGreenGenerators=React.lazy(() => import('./pages/ServiceComponents/KirloskarGreenGenerators'));
const AllTypeofDGSet=React.lazy(() => import('./pages/ServiceComponents/AllTypeofDGSet'));
const AllTurnkeyProject=React.lazy(() => import('./pages/ServiceComponents/AllTurnkeyProject'));
const ManufacturingAcoustic=React.lazy(() => import('./pages/ServiceComponents/ManufacturingAcoustic'));
const ElectricalWorks=React.lazy(() => import('./pages/ServiceComponents/ElectricalWorks'));
const PanelBoards=React.lazy(() => import('./pages/ServiceComponents/PanelBoards'));
const Footer=React.lazy(() => import('./Components/Footer'));


const theme = createTheme({
  palette: {
    text: { primary: "#333333" },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
});
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <NewsTicker/>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />  
          <Route path='/Generatorsales/Delearership/Rental' element={<SalesRentalDealerPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage/>}>
            <Route index element={<Navigate to="kirloskar" replace />} />
            <Route path="kirloskar"  element={<KirloskarGreenGenerators/>} />
            <Route path="dg-set"     element={<AllTypeofDGSet/>} />
            <Route path="turnkey"    element={<AllTurnkeyProject/>} />
            <Route path="acoustic"   element={<ManufacturingAcoustic/>} />
            <Route path="electrical" element={<ElectricalWorks/>} />
            <Route path="panels"     element={<PanelBoards/>} />
          </Route>
          
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
