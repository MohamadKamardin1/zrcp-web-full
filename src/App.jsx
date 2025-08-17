import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CyberGuardLogin from './pages/Login';

function Layout() {
  const location = useLocation();

  // Paths where header/footer should be hidden
  const noHeaderFooterPaths = ["/login"];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CyberGuardLogin />} />
        <Route
          path="/zrcp/admin/"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    // Initialize jQuery plugins that your site uses
    if (window.$) {
      // Example plugin initializations (adjust as needed)
      window.$(".navbar-toggle").on("click", function () {
        window.$("#navbar-menu").toggleClass("show");
      });

      // If your main.js or bootsnav.js cover other initializations,
      // they will run automatically since you included scripts globally
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
