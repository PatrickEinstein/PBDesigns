import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Gallery from "./sections/Gallery.tsx";
import AdminGallery from "./sections/AdminGallery.tsx";
import { useEffect } from "react";

const App = () => {
  const ScrollToSection = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/") {
        const hash = location.hash.substring(1); // Get section ID without '#'
        if (hash) {
          const section = document.getElementById(hash);
          if (section) {
            console.log(`Location in  if`, location, `section in  if`, section);

            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (location.pathname == "/gallery" && location.hash !== "") {
        console.log(`Location in else  if`, location);
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
            <main className="w-screen">
              <Hero />
              <About />
              <Project />
              <Clients />
              <Experience />
              <Contact />
              <Footer />
            </main>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="adminGallery" element={<AdminGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
