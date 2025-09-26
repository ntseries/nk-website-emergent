import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";
import "./i18n"; // Import i18n configuration
import useLanguageDetection from "./hooks/useLanguageDetection";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PlayAtShop from "./pages/services/PlayAtShop";
import BoardGameScript from "./pages/services/BoardGameScript";
import PhotoBooth from "./pages/services/PhotoBooth";
import FoodDrink from "./pages/services/FoodDrink";
import TeamBuilding from "./pages/services/TeamBuilding";
import Contact from "./pages/Contact";
import Beyblade from "./pages/Beyblade";
import BeybladeRegulations from "./pages/services/BeybladeRegulations";
import BeybladeRating from "./pages/services/BeybladeRating";

const AppContent = () => {
  useLanguageDetection(); // Add language detection

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Thai routes (default) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/play-at-shop" element={<PlayAtShop />} />
          <Route path="/services/board-game-script" element={<BoardGameScript />} />
          <Route path="/services/photo-booth" element={<PhotoBooth />} />
          <Route path="/beyblade" element={<Beyblade />} />
          <Route path="/beyblade/regulations" element={<BeybladeRegulations />} />
          <Route path="/services/food-drink" element={<FoodDrink />} />
          <Route path="/services/team-building" element={<TeamBuilding />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* English routes */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/services/play-at-shop" element={<PlayAtShop />} />
          <Route path="/en/services/board-game-script" element={<BoardGameScript />} />
          <Route path="/en/services/photo-booth" element={<PhotoBooth />} />
          <Route path="/en/beyblade" element={<Beyblade />} />
          <Route path="/en/beyblade/regulations" element={<BeybladeRegulations />} />
          <Route path="/en/services/food-drink" element={<FoodDrink />} />
          <Route path="/en/services/team-building" element={<TeamBuilding />} />
          <Route path="/en/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;