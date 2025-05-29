import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Gallery from "./sections/Gallery.jsx";
import AdminGallery from "./sections/AdminGallery.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
       duration: 1000
    });
    AOS.refresh();
    
  }, []);
  const ScrollToSection = () => {
    const location = useLocation();
    useEffect(() => {
      console.log(location);
      const hash = location.hash;
      if (location.pathname === "/") {
        const hash = location.hash.substring(1); // Get section ID without '#'
        if (hash) {
          const section = document.getElementById(hash);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (location.pathname == "/gallery" && location.hash !== "") {
        window.location = `/${location.hash}`;
      }
    }, [location]);

    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full overflow-x-hidden bg-gradient-to-b from-blue-800 via-blue-300 to-blue-100 ">
              <Hero />
              <About />
              <Project />
              <Clients />
              {/* <Experience /> */}
              <Contact />
              <Footer />
            </main>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/adminGallery" element={<AdminGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
