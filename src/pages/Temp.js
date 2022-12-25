import React from "react";
import MenuBar from "../components/MenuBar";
import "./../CSS Folder/MenuBar.css";

const Temp = () => {
  return (
    <>
      <div
        className="container_temp"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <MenuBar />
      </div>
    </>
  );
};

export default Temp;
