import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PlayAtShop from "./pages/services/PlayAtShop";
import BoardGameScript from "./pages/services/BoardGameScript";
import DungeonsAndDragons from "./pages/services/DungeonsAndDragons";
import PhotoBooth from "./pages/services/PhotoBooth";
import FoodDrink from "./pages/services/FoodDrink";
import TeamBuilding from "./pages/services/TeamBuilding";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/play-at-shop" element={<PlayAtShop />} />
            <Route path="/services/board-game-script" element={<BoardGameScript />} />
            <Route path="/services/dungeons-dragons" element={<DungeonsAndDragons />} />
            <Route path="/services/photo-booth" element={<PhotoBooth />} />
            <Route path="/services/food-drink" element={<FoodDrink />} />
            <Route path="/services/team-building" element={<TeamBuilding />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;