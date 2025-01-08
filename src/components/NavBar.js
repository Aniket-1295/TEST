import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

const Home = () => <Typography variant="h4" align="center">Welcome to the Home Page</Typography>;
const AboutUs = () => <Typography variant="h4" align="center">About Us</Typography>;
const Cats = () => <Typography variant="h4" align="center">Cats Page</Typography>;
const Dogs = () => <Typography variant="h4" align="center">Dogs Page</Typography>;
const ContactUs = () => <Typography variant="h4" align="center">Contact Us</Typography>;


  


const NavBar = () => {

    const isMobile = useMediaQuery("(max-width:600px)");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
      };
    
      const navLinks = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Cats", to: "/cats" },
        { label: "Dogs", to: "/dogs" },
        { label: "Contact Us", to: "/contact" },
      ];



  return (
    // <div>NavBar</div>

    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Website
      </Typography>
      {isMobile ? (
        <>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <List>
              {navLinks.map((link) => (
                <ListItem button key={link.label} component={Link} to={link.to} onClick={handleDrawerToggle}>
                  <ListItemText primary={link.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Box display="flex">
          {navLinks.map((link) => (
            <Button color="inherit" component={Link} to={link.to} key={link.label}>
              {link.label}
            </Button>
          ))}
        </Box>
      )}
    </Toolbar>
  </AppBar>




  )
}

export default NavBar