import React from "react";
import "./../CSS Folder/MenuBar.css";

// const menu_items = document.querySelectorAll(".container_menu_bar ul li");

// console.log(typeof menu_items, menu_items);

// menu_items.map((item) => {
//   console.log("hello", item);
// });

const MenuBar = () => {
  return (
    <>
      <div className="container_menu_bar">
        <ul>
          <li className="menu_indicator">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span>Menu</span>
          </li>
          <li>
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name">
              <a> Home</a>
            </span>
          </li>
          <li className="active">
            <span className="icon active">
              <i className="fa fa-home"></i>
            </span>
            <span className="icon_name active">
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
