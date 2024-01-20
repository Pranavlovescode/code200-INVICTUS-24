import React from "react";
import Navbar from "../components/Navbar";
import CardSkill from "../components/CardSkill";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <CardSkill />
      <Footer />
    </div>
  );
}

export default Home;
