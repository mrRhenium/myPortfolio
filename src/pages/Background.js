import React, { useEffect, useState } from "react";
import "./../CSS Folder/Background.css";

// import the components
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";
import AboutUs from "./AboutUs";
import MenuBar from "../components/MenuBar";
import PopUp from "../components/PopUp";
import Contact from "./Contact";
import Feedback from "./Feedback";

// import the npm packages
// import { Route, Routes } from "react-router-dom";

const Background = () => {
  const [pageLength, upd_pageLength] = useState(0);
  const [contactPage, upd_contactPage] = useState(0);
  const [feedbackPage, upd_feedbackPage] = useState(0);

  const closeContact = () => {
    upd_contactPage(0);
  };

  const showContanct = () => {
    upd_contactPage(1);
  };

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
        <AboutUs openContact={showContanct} />
        {contactPage ? (
          <PopUp children={<Contact />} closepopUp={closeContact} />
        ) : null}
        {feedbackPage ? <PopUp children={<Feedback />} /> : null}
      </div>
      <MenuBar lenght={pageLength} openContact={showContanct} />
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
