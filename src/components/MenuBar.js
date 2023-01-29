import React, { useState } from "react";
import "./../CSS Folder/MenuBar.css";

// import the npm packages
// import { Link } from "react-router-dom";

const MenuComponent = {
  id: 4,
  keywords: "Menu",
  menuBar_data: [],
};

const menuBar_data = [
  { id: 0, icon: "fa fa-home", name: "Home" },
  { id: 1, icon: "fa fa-check-circle", name: "Project" },
  { id: 2, icon: "fa fa-cog", name: "Skill" },
  { id: 3, icon: "fa fa-user", name: "About" },
  { id: 4, icon: "fa fa-phone", name: "Contact" },
];

const MenuBar = ({ lenght, openContact }) => {
  // Initialising useSate Hooks
  const [slt_iconID, upd_iconID] = useState(0);

  let page_height = lenght / 4;
  window.onscroll = () => {
    window.scrollY % page_height == 0 &&
      upd_iconID(window.scrollY / page_height);
    // console.log(window.scrollY);
  };

  return (
    <>
      <div className="container_menu_bar">
        <ul>
          <li className="menu_indicator">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span> Menu </span>
          </li>

          {menuBar_data.map((item, index) => {
            return (
              <li
                key={index}
                className={item.id == slt_iconID ? "active" : ""}
                onClick={() => {
                  if (item.id == 4) {
                    openContact();
                  } else {
                    upd_iconID(item.id);
                  }
                }}
              >
                <a href={`/#${item.name}Page`}>
                  <span className="icon">
                    <i className={item.icon}></i>
                  </span>
                  <span>
                    <p>{item.name}</p>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
