import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import Dog from "../assest/DOG.jpg";

const Dogs = () => {
  return (
    // <div>Dogs</div>

    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            // backgroundColor: '#f0f0f0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
            {/* <Typography variant="h6">Column 1</Typography> */}
            {/* <Typography>This is the content of column 1.</Typography> */}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#f0f0f0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#f0f0f0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#f0f0f0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#e0e0e0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#e0e0e0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#e0e0e0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{
            backgroundColor: '#e0e0e0', 
            // padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px',
            height: '200px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <img 
  src={Dog} 
  alt="Cat 1" 
  style={{ width: '100%', height: '100%', borderRadius: '8px' }} 
/>
          </Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Dogs