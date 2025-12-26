import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";
import img from '../assets/osgenpowervisionpage.png';
import { CheckCircle } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
export default function MissionVisionTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile
        width: "100%",
        minHeight: { xs: "auto", md: "500px" },
        bgcolor: "#ffffffff",
        p: { xs: 2, md: 6 },
        boxSizing: "border-box",
      }}
    >
      {/* LEFT SECTION - Text & Tabs */}
      <Box
        sx={{
          flex: 1,
          mb: { xs: 4, md: 0 }, // Space below on mobile
        }}
      ><Box
          sx={{
            background: "#e81010",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 5,
            color: "white",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          OUR MISSION & VISION
        </Box>
        <Typography variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}>
          BUILDING YOUR VISION AND MISSION.
        </Typography>

        <Typography variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 5,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}>
          CREATING REALITY.
        </Typography>

        {/* Animated Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            // borderBottom: "1px solid #ddd",
            mb: 5,
            lineHeight: 1.5,
            "& .MuiTabs-indicator": {
              backgroundColor: "#e81010",
              transition: "all 0.3s ease-in-out",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: 16,
              fontWeight: 700,
              color: "#ff0000ff",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#e81010",
              },
            },
            "& .Mui-selected": {
              color: "#e81010 !important",
            },
          }}
        >
          <Tab label="OUR MISSION" />
          <Tab label="OUR VISION" />
        </Tabs>

        {/* Tab Content with Fade Animation (Optional Enhancement) */}
        <Box
          sx={{
            opacity: 1,
            transition: "opacity 0.4s ease-in-out",
            willChange: "opacity",
            mr: { xs: 0, md: 4}
          }}
        >
          {value === 0 && (
            <Box>
              <Typography sx={{ mb: 5 }}>
                To empower individuals and organizations with uninterrupted, efficient, and sustainable energy — using innovation and technology to redefine generator performance and reliability.
              </Typography>


            
                <Typography sx={{ fontSize: "1rem", color: "#444" ,mb:2}}> <CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          /> Trusted Expertise in Power Solutions</Typography>
                <Typography sx={{ fontSize: "1rem", color: "#444", mb:2 }}><CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          />Innovative Sustainable Solutions</Typography>
                <Typography sx={{ fontSize: "1rem", color: "#444", mb:2 }}><CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          />Commitment to Quality Excellence</Typography>
              

                 <Button
                 onClick={navigate.bind(this, '/Generatorsales/Delearership/Rental')}
               variant="contained"
          sx={{
            background: "#e81010",
            px: 3,
            py: 1.5,
            mt: 4,
            borderRadius: "4px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#c81010" },
          }}
              >
                LEARN MORE  →
              </Button>
            </Box>
          )}

          {value === 1 && (
            <Box  >
              <Typography sx={{ mb: 5, lineHeight: 1.5 }}>
                To become India's most trusted and technologically advanced power solutions provider — building a future where energy outages never disrupt productivity or peace of mind.
              </Typography>

                <Typography sx={{ fontSize: "1rem", color: "#444" ,mb:2}}> <CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          /> Forward-Thinking Development</Typography>
                <Typography sx={{ fontSize: "1rem", color: "#444", mb:2 }}><CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          />Building for Future Generations</Typography>
                <Typography sx={{ fontSize: "1rem", color: "#444", mb:2 }}><CheckCircle
            sx={{
              color: "#e81010",
              fontSize: "1.4rem",
              mr: 5,
            }}
          />Leadership in Sustainable Energy</Typography>
              
              

              <Button
                onClick={navigate.bind(this, '/about')}
               variant="contained"
          sx={{
            background: "#e81010",
            px: 3,
            py: 1.5,
            mt:4,
            borderRadius: "4px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#c81010" },
          }}
              >
                LEARN MORE  →
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* RIGHT IMAGE SIDE - Responsive Image */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { xs: "300px", sm: "400px", md: "500px" },
          width: "100%",
          maxWidth: { md: "90vh" },
          borderRadius: { xs: 2, md: 0 }, // Optional rounded corners on mobile
          boxShadow: { xs: 3, md: 0 }, // Optional shadow on mobile for depth
        }}
      ></Box>
    </Box>
  );
}