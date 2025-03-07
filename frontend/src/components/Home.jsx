import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Creator from "../Home/Creator";
import Tech from "../Home/Tech";

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Tech />
      <Creator />
    </div>
  );
}

export default Home;
