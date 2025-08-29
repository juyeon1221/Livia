import React from "react";
import Banner from "../Banner/Banner";
import Visual from "../Visual/Visual";
import "./MainSection.css";
import Bottom from "../Bottom/Bottom";
import Header from "../Header/Header";

export default function MainSection() {
  return (
    <>
      <Header />
      <div className="main_section">
        <Visual />
        <Banner />
      <div className="bottom_div">
        <Bottom />
        </div>    
      </div>
    </>
  );
}
