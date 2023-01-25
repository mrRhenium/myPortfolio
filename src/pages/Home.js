import React from "react";
import "../CSS Folder/Home.css";
import AnimText from "../components/AnimText";

const Home = () => {
  const tag_line = "I convert the imagination into a creative product";
  //

  return (
    <>
      <section className="home_page" id="HomePage">
        {/*  */}

        {/* background part start */}
        <section className="hero_section">
          <div className="hero_left">
            <img src="./assets/home_img.png" alt="developer_image" />
          </div>
          <div className="hero_right">
            <div className="code_logo">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </section>
        {/* background part enda */}

        {/* Forground part start */}
        <section className="hero_absolute_setion">
          <div className="upper_part">
            <div className="intro">
              <div className="intro_upper">
                <p>Hi There,</p>
              </div>
              <div className="intro_mid">
                <p>This is Nitesh Yadav.</p>
              </div>
              <div className="intro_lower">
                <span className="profession">
                  <AnimText />
                </span>
                <br />
                <br />
                <span className="tag_line_cntnr">
                  <strong>{tag_line}</strong>
                  <span className="link_resume">
                    <a
                      href="https://www.linkedin.com/in/nitesh--yadav/"
                      target="_blank"
                      rel="external"
                    >
                      Resume
                    </a>
                    <i className="fa fa-cloud-download" aria-hidden="true"></i>
                  </span>
                  <span className="link_aboutMe">
                    <a href="#AboutPage">About me</a>
                    <i
                      className="fa fa-arrow-circle-o-down"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
                <span className="home_links">
                  <span className="link_linkedin">
                    <a
                      href="https://www.linkedin.com/in/nitesh--yadav/"
                      target="_blank"
                      rel="external"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span className="link_github">
                    <a
                      href="https://github.com/mrRhenium"
                      target="_blank"
                      rel="external"
                    >
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="lower_part"></div>
        </section>
        {/* Forground part ends */}

        {/*  */}
      </section>
    </>
  );
};

export default Home;
