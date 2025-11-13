import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const ContactButtons = () => {
  const navigate = useNavigate();

  return (
    <Button
    onClick={()=> navigate('/contact')}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      sx={{
        
        background: 'linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)',
        color: '#fff',
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        padding: '10px 24px',
        borderRadius: '50px',
        boxShadow: '0 4px 15px rgba(255, 65, 108, 0.4)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(255, 65, 108, 0.6)',
          background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
        },
        '& .MuiButton-endIcon': {
          transition: 'transform 0.3s ease',
        },
        '&:hover .MuiButton-endIcon': {
          transform: 'translateX(4px)',
        },
      }}
    >
      Enquiry Now
    </Button>
  );
};

export default ContactButtons;
