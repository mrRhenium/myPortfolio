import React from "react";
import "../CSS Folder/Home.css";
import Anim_text from "../components/Anim_text";

const Home = () => {
  //

  return (
    <>
      <section className="home_page">
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
                  <Anim_text />
                </span>
                <span className="home_links">
                  <span className="link_linkedin">
                    <a href="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span className="link_github">
                    <a href="#">
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
