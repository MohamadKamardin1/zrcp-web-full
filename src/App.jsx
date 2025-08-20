import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
// import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CyberGuardLogin from './pages/Login';


//about page {sultan pranks {mohamad route styles}}
import About from './pages/About/About';
import AboutIntro from './pages/About/AboutIntro';
import Associates from './pages/About/Associates';
import BoardMembers from './pages/About/BoardMembers';
import Management from './pages/About/Management';
import Services from './pages/About/Services';
import Team from './pages/About/Team';

import Projects from "./pages/ProjectsEvents/Projects";
import Events from "./pages/ProjectsEvents/Events";
import ResearchAndPolicy from "./pages/ProjectsEvents/Research";
import ProjectsEvents from "./pages/ProjectsEvents/ProjectsEvents";


import BlogPage from "./pages/Blog/BlogPage";

import NyotaHub from "./pages/NyotaHub/NyotaHub";

import ContactPage from "./pages/Contacts/ContactPage";


function Layout() {
  const location = useLocation();

  // Paths where header/footer should be hidden
  const noHeaderFooterPaths = ["/login"];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/Board' element={<BoardMembers />} />
        <Route path='/Management' element={<Management />} />
        <Route path='/Assosiate' element={<Associates />} />
        <Route path='/Team' element={<Team />} />
        {/* <Route path='/about' element={<About />} /> */}

        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/research" element={<ResearchAndPolicy />} />
        <Route path="/project-research" element={<ProjectsEvents />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/nyotahub" element={<NyotaHub />} />
        <Route path="/contact" element={<ContactPage /> } />
        <Route path="/login" element={<CyberGuardLogin />} />
        <Route
          path="/zrcp/admin/"
          element={
            <ProtectedRoute>
              {/* <AdminDashboard /> */}
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
      window.$(".navbar-toggle").on("click", function () {
        window.$("#navbar-menu").toggleClass("show");
      });

      // Scroll reveal for .thematic-section elements using jQuery if available
      function revealOnScroll() {
        window.$('.thematic-section').each(function () {
          const top = window.$(this).offset().top;
          const windowBottom = window.$(window).scrollTop() + window.$(window).height();

          if (windowBottom > top + 100) {
            window.$(this).addClass('visible');
          }
        });
      }

      revealOnScroll();
      window.$(window).on('scroll', revealOnScroll);
    }

    // Initialize WOW.js if loaded
    if (window.WOW) {
      new window.WOW().init();
    }

    // Initialize Swiper for '.mySwiper' slider
    if (window.Swiper) {
      new window.Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1200: { slidesPerView: 3 },
          992: { slidesPerView: 2 },
          576: { slidesPerView: 1 },
        },
      });
    }

    // IntersectionObserver to add 'visible' to '.research-card'
    const cards = document.querySelectorAll(".research-card");
    if (cards.length > 0 && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      // Cleanup scroll event added by jQuery
      if (window.$) {
        window.$(window).off('scroll');
      }
    };
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
