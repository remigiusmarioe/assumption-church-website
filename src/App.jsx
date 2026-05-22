import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Home Page Components */
import Hero from "./components/Hero";
import Lourdes from "./components/Lourdes";
import Velankanni from "./components/Velankanni";
import SacredHeart from "./components/SacredHeart";
import HolyCross from "./components/HolyCross";
import ParishPriest from "./components/ParishPriest";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

/* Pages */

import History from "./pages/History";
import GalleryList from "./pages/GalleryList";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Lourdes />
      <Velankanni />
      <SacredHeart />
      <HolyCross />
      <ParishPriest />
      <Gallery />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<GalleryList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;