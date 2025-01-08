import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import ContactUs from "./pages/Contact";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cats" element={<Cats />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/contact" element={<ContactUs />} />
           
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );




















  // return (
  //   <div className="App">

  //     <h1>PetShelter</h1>

    
  //   </div>
  // );
}

export default App;
