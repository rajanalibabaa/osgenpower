import React from 'react';
import  Button  from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const ContactButtons = () => {
  const navigate = useNavigate();

  return (
    <Button
    onClick={()=> navigate('/contact')}
      variant="contained"
          sx={{
            background: "#e81010",
            px: 3,
            py: 1.5,
            borderRadius: "4px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#c81010" },
          }}
    >
      ENQUIRY NOW →
    </Button>
  );
};

export default ContactButtons;