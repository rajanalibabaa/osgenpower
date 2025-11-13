import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NewsTicker from './Components/NewsTicker';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import ServicesPage from './pages/ServicesPage';
import KirloskarGreenGenerators from './pages/ServiceComponents/KirloskarGreenGenerators';
import AllTypeofDGSet from './pages/ServiceComponents/AllTypeofDGSet';
import AllTurnkeyProject from './pages/ServiceComponents/AllTurnkeyProject';
import ManufacturingAcoustic from './pages/ServiceComponents/ManufacturingAcoustic';
import ElectricalWorks from './pages/ServiceComponents/ElectricalWorks';
import PanelBoards from './pages/ServiceComponents/PanelBoards';
import Footer from './Components/Footer';
import SalesRentalDealerPage from './pages/SalesRentalDealerPage';


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
          <Route path='/Generatorsales/Delearership/Rental' element={<SalesRentalDealerPage/>} />

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
