import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import "./style.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
