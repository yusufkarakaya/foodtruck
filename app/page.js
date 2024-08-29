import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import FoodGallery from "./components/FoodGallery";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Schedule />
      <FoodGallery />
      <Footer />
    </main>
  );
};

export default Home;
