import React from 'react';

import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import aboutus from "../assest/catDog.webp";
import { LinkedIn } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
// import { X } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

const About = () => {

    const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    // <div>About</div>

    <Box p="1rem" mt="2rem">
    <Box
      display="flex"
      flexDirection={isMobileScreen ? "column-reverse" : "row"}
      justifyContent="space-between"
      gap="2rem"
      borderRadius="8px"
      p={isMobileScreen ? "2rem 4%" : "4rem 4%"}
     
    >
      <Box width="100%">
        <Typography
          fontWeight="bold"
          fontSize="clamp(2rem, 4rem, 1.5rem)"
          mb="2rem"
        >
          About Us
        </Typography>
        <Typography variant="h5" mb="1rem" >
        Globally Connected by Large Network
        </Typography>
        <Typography fontSize="1rem" lineHeight="1.75rem" variant="subtitle">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt quas hic similique cumque, quo praesentium voluptatem eos deserunt, explicabo optio sed nam. Praesentium voluptas ipsam expedita pariatur adipisci. Nesciunt quam, aperiam nihil repudiandae sed at laboriosam neque voluptate veritatis.
          <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ad consequuntur expedita quis aliquid ex numquam nulla soluta voluptatum! Voluptates magni neque fugit expedita porro pariatur dicta recusandae distinctio voluptate animi. Numquam harum possimus esse quia nobis laboriosam labore aliquid!
        </Typography>
        <Typography mt="1rem" >
          Find Us :
        </Typography>
        <Box
          mt="1rem"
          display="flex"
          justifyContent="space-between"
          gap="10px"
          alignContent="center"
          width="100%"
          maxWidth="200px"
        >
          <Link
            href="https://www.linkedin.com/in/aniket-kamble-865694214"
            sx={{ cursor: "pointer" }}
          >
            <LinkedIn />
          </Link>
         
          <Link
            href="https://www.instagram.com/aniket_k313/"
            sx={{ cursor: "pointer" }}
          >
            <Instagram />
          </Link>
          <Link
            href="mailto:aniketkamble1642002@gmail.com"
            sx={{ cursor: "pointer" }}
          >
            <ContactMail />
          </Link>
        </Box>
      </Box>
      <Box
        width="100%"
        maxWidth="600px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={aboutus} width="100%" height="auto" alt="img" />
      </Box>
    </Box>
  </Box>



  )
}

export default About