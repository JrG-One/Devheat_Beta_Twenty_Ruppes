import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import FirstPage from "./Components/FirstPage";
import Dashboard from "./Components/Dashboard";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
