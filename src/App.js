import React, { useState, useEffect } from "react";
import "./App.css";
import theme from "./styles/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, ScrollToTop, Sidebar, Footer } from "./components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Home, NotFound, Product, Register } from "./pages";
import About from "./pages/About";
import { datas } from "./pages/Product/data.js";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setData(datas);
  }, []);
  if (Object.keys(data).length === 0 && data.constructor === Object) return null;
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
              <Route path="/program/eksplorasi-kampus" element={<Product data={data[0]} />} exact />
              <Route path="/program/study-abroad" element={<Product data={data[1]} />} exact />
              <Route path="/program/try-out" element={<Product data={data[2]} />} exact />
              <Route path="/about-us" element={<About />} exact />
              <Route path="/register" element={<Register />} exact />
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
