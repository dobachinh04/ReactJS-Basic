import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;