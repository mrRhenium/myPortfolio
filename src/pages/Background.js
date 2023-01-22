import React, { useEffect, useState } from "react";
import "./../CSS Folder/Background.css";

// import the components
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";
import AboutUs from "./AboutUs";
import MenuBar from "../components/MenuBar";

// import the npm packages
// import { Route, Routes } from "react-router-dom";

const Background = () => {
  const [pageLength, upd_pageLength] = useState(0);

  useEffect(() => {
    //

    const background = document.querySelector(".background_container");
    upd_pageLength(background.clientHeight);

    let resizeObserver = new ResizeObserver((e) => {
      upd_pageLength(background.clientHeight);
    });
    resizeObserver.observe(background);

    //
    // console.log("componentDidMount");
  }, []);

  return (
    <>
      <div className="background_container">
        <Home />
        <Project />
        <Skill />
        <AboutUs />
      </div>
      <MenuBar lenght={pageLength} />
    </>
  );
};

export default Background;

{
  /* <Routes>
          <Route path="/home" element=iHome />} />
          <Route path="/project" eleme.home_pagent={<Project />} />

          console.log(home_page);
          <Route path="/skill" element={<Skill />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes> */
}
