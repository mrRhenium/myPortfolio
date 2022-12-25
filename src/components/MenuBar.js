import React from "react";
import "./../CSS Folder/MenuBar.css";

const MenuBar = () => {
  return (
    <>
      <div className="container_menu_bar">
        <ul>
          <span className="indicator"></span>
          <li>
            <span className="icon active">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name active">
              <a> Home</a>
            </span>
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name">
              <a> Projects</a>
            </span>
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name">
              <a> Skills</a>
            </span>
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name">
              <a> About</a>
            </span>
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name">
              <a> Contanct</a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
