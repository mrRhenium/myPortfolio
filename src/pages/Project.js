import React from "react";
import "./../CSS Folder/Project.css";

const Project = () => {
  return (
    <>
      <section className="project_page">
        <section className="section_left">
          <div className="upper_part">
            <h1>PROJECTS</h1>
            <strong>3/5</strong>
          </div>
          <div className="lower_part">
            <div className="project_links_cntnr">
              <div className="project_links_card">
                <div className="card_img_cntnr">
                  <span className="card_title_img">
                    <img
                      src="./assets/light bulb.png"
                      alt="project_title_image"
                    />
                  </span>
                </div>
                <div className="card_link_cntnr">
                  <span className="card_github_link">
                    <a href="">
                      <i className="fa fa-github" aria-hidden="true"></i>
                      <i>Preview</i>
                    </a>
                  </span>
                  <span className="card_deploy_link">
                    <a href="">
                      <i className="fa fa-github" aria-hidden="true"></i>
                      <i>Deploy</i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="project_slider_btn_cntnr">
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </div>
          </div>
        </section>
        <section className="section_right">
          <div className="upper_part">
            <h1>PROJECTS</h1>
            <strong>3/5</strong>
          </div>
          <div className="project_details_cntnr">
            <div className="project_details">
              <div className="title_img_cntnr"></div>
              <div className="project_description"></div>
            </div>
          </div>
        </section>
        <section className="section_menu"></section>
      </section>
    </>
  );
};

export default Project;
