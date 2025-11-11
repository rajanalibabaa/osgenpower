import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NewsTicker from './Components/NewsTicker';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';


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
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
