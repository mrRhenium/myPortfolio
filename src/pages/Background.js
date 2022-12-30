import React from "react";
import "./../CSS Folder/Background.css";
import MenuBar from "../components/MenuBar";
import Home from "./Home";
import Project from "./Project";

const Background = () => {
  return (
    <>
      <div className="background_container">
        <Home />
        <Project />
      </div>
      <MenuBar />
    </>
  );
};

export default Background;
