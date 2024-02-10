import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/Navbar";
import NewsBoard from "./components/NewsBoard";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Favourite from "./pages/favourites/Favourite";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <p className="text-center">
        copy write made by forbidden for this company
      </p>
    </BrowserRouter>
  );
}

export default App;
