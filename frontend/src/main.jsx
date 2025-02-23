import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
