import React from "react";
import ImageTag from "../components/ImageTag";
import "../CSS Folder/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs_page" id="AboutPage">
        <ImageTag />
        <div className="left_part">
          <div className="left_design">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <header>
            <h3>About Us</h3>
          </header>
          <div className="right_design">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="right_part">
          <div className="content_cntnr">
            <header>
              <h3>About Us</h3>
            </header>
            <span>
              <p>
                I am passionate in the programming and logic building <br /> &{" "}
                <br /> I am also enjoy building User Experience and Interface
              </p>
            </span>
            <span>
              <p>
                I am Passionate and curious to learn new Technologies & their
                Applications.
              </p>
            </span>
            <span>
              <p>I am also a Good Problem Solver. 450+ Questions solved.</p>
            </span>
            <span>
              <p>I am also a Good Problem Solver. 450+ Questions solved.</p>
            </span>
          </div>
          <div className="menuBar_cntnr"></div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
