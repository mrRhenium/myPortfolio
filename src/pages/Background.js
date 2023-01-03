import React from "react";
import "./../CSS Folder/Background.css";
import MenuBar from "../components/MenuBar";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";

const Background = () => {
  return (
    <>
      <div className="background_container">
        <Home />
        <Project />
        <Skill />
      </div>
      <MenuBar />
    </>
  );
};

export default Background;
