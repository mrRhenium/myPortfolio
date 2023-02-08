import React, { useEffect } from "react";
import ImageTag from "../components/ImageTag";
import "../CSS Folder/AboutUs.css";

const about_data = [
  {
    id: 0,
    imp: false,
    content:
      "I am passionate in programming and logic building or I also enjoy building User Experience and Interface",
  },
  {
    id: 1,
    imp: false,
    content:
      "I am Passionate and curious to learn new Technologies & their Applications.",
  },
  {
    id: 2,
    imp: true,
    content: "I am also a Good Problem Solver 1500+ ratings on LeetCode",
  },
  {
    id: 3,
    imp: false,
    content:
      "I have a Competitive thinking which help me to grow fast and learn more & more.",
  },
];

const AboutUs = ({ openContact }) => {
  //

  useEffect(() => {
    //
    const about_page = document.querySelector(".aboutUs_page .right_part");

    let observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          about_page.classList.add("active");
        } else {
          about_page.classList.remove("active");
        }
      },
      {
        root: null,
        threshold: 0.8,
      }
    );
    observer.observe(about_page);

    return () => {
      observer.unobserve(about_page);
      // console.log("Unmounting");
    };
  }, []);

  return (
    <>
      <section className="aboutUs_page" id="AboutPage">
        <ImageTag openContact={openContact} />
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
            {about_data.map((item, index) => {
              return (
                <span key={index} className={item.imp ? "imp" : ""}>
                  <p>{item.content}</p>
                </span>
              );
            })}
          </div>
          <div className="menuBar_cntnr"></div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
