import { lazy, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
// import HomePage from './pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const HomePage=lazy(() => import('./pages/HomePage'));
const NewsTicker=lazy(() => import('./Components/NewsTicker'));
const AboutPage=lazy(() => import('./pages/AboutPage'));
const ContactUsPage=lazy(() => import('./pages/HomePage'));
const ServicesPage=lazy(() => import('./pages/ServicesPage'));
const KirloskarGreenGenerators=lazy(() => import('./pages/ServiceComponents/KirloskarGreenGenerators'));
const AllTypeofDGSet=lazy(() => import('./pages/ServiceComponents/AllTypeofDGSet'));
const AllTurnkeyProject=lazy(() => import('./pages/ServiceComponents/AllTurnkeyProject'));
const ManufacturingAcoustic=lazy(() => import('./pages/ServiceComponents/ManufacturingAcoustic'));
const ElectricalWorks=lazy(() => import('./pages/ServiceComponents/ElectricalWorks'));
const PanelBoards=lazy(() => import('./pages/ServiceComponents/PanelBoards'));
const Footer=lazy(() => import('./Components/Footer'));


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
          <Route path='/contactus' element={<ContactUsPage/>} />

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
