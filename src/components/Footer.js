import React from 'react';

import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    // <div>Footer</div>

    <Box sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px 0',
        marginTop: '40px',
        textAlign: 'center',
      }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {/* Column 1: Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Company</Typography>
              <Link href="/" color="inherit" underline="none">
                <Typography>About Us</Typography>
              </Link>
              <Link href="/" color="inherit" underline="none">
                <Typography>Careers</Typography>
              </Link>
              <Link href="/" color="inherit" underline="none">
                <Typography>Contact</Typography>
              </Link>
            </Grid>
  
            {/* Column 2: Social Media Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Follow Us</Typography>
              <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Grid>
  
            {/* Column 3: Resources */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Resources</Typography>
              <Link href="/" color="inherit" underline="none">
                <Typography>Blog</Typography>
              </Link>
              <Link href="/" color="inherit" underline="none">
                <Typography>Documentation</Typography>
              </Link>
            </Grid>
  
            {/* Column 4: Newsletter */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Newsletter</Typography>
              <Typography variant="body2" paragraph>
                Subscribe to our newsletter to get the latest updates.
              </Typography>
              <Link href="/" color="inherit" underline="none">
                <Typography>Sign Up</Typography>
              </Link>
            </Grid>
          </Grid>
  
          <Box sx={{
            marginTop: '40px',
            borderTop: '1px solid #444',
            paddingTop: '20px',
          }}>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

  )
}

export default Footer