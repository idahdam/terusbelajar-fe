import React, { useState } from "react";
import "./App.css";
import theme from "./styles/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, ScrollToTop, Sidebar, Footer } from "./components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Home, NotFound, Product } from "./pages";
import About from "./pages/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          <div className="content-wrap">
            <ScrollToTop />
            <GlobalStyles />
            <Navbar toggling={toggling} />
            <Sidebar toggling={toggling} isOpen={isOpen} />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/program/:productType" element={<Product />} />
              <Route path="/about-us" element={<About />} exact />
              <Route path="*" element={<NotFound />} exact />
            </Routes>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
