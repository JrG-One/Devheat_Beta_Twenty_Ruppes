import { Routes, Route } from "react-router-dom";
import FirstPage from "./Components/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./Components/Dashboard";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route />
      </Routes>
    </ChakraProvider>
  );
}

export default App;