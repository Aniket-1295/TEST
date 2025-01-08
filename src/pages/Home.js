import React from 'react'
// import  { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { margin, styled } from "@mui/system";
import Backimg from "../assest/CATDOG3.webp"
import { Opacity } from '@mui/icons-material';

const Home = () => {
   
  return (
    // <div>Home</div>

    <>
    <Box
     style={{
        margin:"20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "110vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${Backimg})`,
       
        // background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // opacity: 0.7
      }}

    
    
    >
      <Typography 
      style={{
        color:"white"
      }}
      variant="h2" sx={{ fontWeight: "bold", marginBottom: 2 }}>
      Adopt Us. We need your help
      </Typography>
      <Typography
        style={{
            color:"white"
          }}
       variant="h5" sx={{ marginBottom: 4 }}>
        Explore the world of Cats, Dogs, and more!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: 5, paddingX: 4 }}
      >
        Get Started
      </Button>


     
    </Box>

    <section style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Testimonials from our guardians</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>Who are in extremely love with eco friendly system.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {/* Testimonial 1 */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: '#777' }}>
            "This service exceeded my expectations. It was truly amazing, and I highly recommend it!"
          </p>
          <p style={{ fontWeight: 'bold', color: '#333' }}>John Doe</p>
          <p style={{ color: '#aaa' }}>CEO, Google</p>
        </div>

        {/* Testimonial 2 */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: '#777' }}>
            "An outstanding experience. The team was very professional and responsive!"
          </p>
          <p style={{ fontWeight: 'bold', color: '#333' }}>Jane Smith</p>
          <p style={{ color: '#aaa' }}>Marketing Director, Crio Corp</p>
        </div>

        {/* Testimonial 3 */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: '#777' }}>
            "The best decision we made was to work with this team. Truly outstanding!"
          </p>
          <p style={{ fontWeight: 'bold', color: '#333' }}>Michael Lee</p>
          <p style={{ color: '#aaa' }}>Founder, Startup Bharat Pe</p>
        </div>
      </div>
    </section>

  </>
  )
}

export default Home