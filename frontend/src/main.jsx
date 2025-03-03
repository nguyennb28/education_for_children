// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import "./index.css";
// import App from "./App.jsx";
// import Header from "./components/Header.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import Footer from "./components/Footer.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route path="login" element={<LoginPage />}/>
//         <Route path="register" element={<RegisterPage />}/>
//       </Routes>
//       <Footer />
//     </Router>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import StudyPage from "./pages/StudyPage.jsx";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider (đường dẫn tùy thuộc vào cấu trúc dự án)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="study" element={<StudyPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  </StrictMode>
);