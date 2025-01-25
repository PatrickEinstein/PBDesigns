import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Project from "./sections/Project.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./sections/Gallery.jsx";
import AdminGallery from "./sections/AdminGallery.tsx";

const App = () => {
  return (
    <BrowserRouter>
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
