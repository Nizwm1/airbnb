import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import katie from "./images/katie-zaferes.png";
import "./style.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
