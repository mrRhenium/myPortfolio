import React from "react";
import "../CSS Folder/ImageTag.css";

const ImageTag = ({ openContact }) => {
  return (
    <>
      <div className="imageTag_cntnr">
        <div className="aboutUsImg">
          <img src="./assets/aboutImg_bg.png" alt="" />
          <img src="./assets/aboutImg.png" alt="" />
        </div>
        <button
          onClick={() => {
            openContact();
          }}
        >
          Contact me
          <i className="fa fa-phone" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default ImageTag;
