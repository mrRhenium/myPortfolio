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
          <div className="lower_part">
            <div className="project_details">
              <span className="heading">
                <h2>
                  <img src="./assets/light bulb.png" alt="" />
                  <header>
                    Tournament Organiser
                    <strong> - It is based on Real Problem.</strong>
                  </header>
                </h2>
                <span className="brief_description">
                  <p>
                    This project is build upon my real problem when I playing
                    the badminton with my friends.
                    <br />
                    It is used to organise the Badminton tournament among the
                    players.It is used to organise the Badminton tournament
                    among the players.
                  </p>
                  <img src="./assets/bg.jpg" alt="" />
                </span>
              </span>
              <span className="points">
                <p>
                  <ul>
                    <li>Local Storage is Used to store the Data.</li>
                    <li>Randome Matches is organise among the players.</li>
                    <li>
                      At the end of Tournament Winners was listed on the
                      Leaderboard.
                    </li>
                    <li>Rematch functionality is avalaible</li>
                    <li>Match Timing is also Recorded.</li>
                    <li>Two mode are avalaible for seleting the Winners.</li>
                  </ul>
                </p>
              </span>
              <span className="tech_used">
                <h3>TECH. USED : </h3>
                <span className="tech_used_item">
                  <p>NodeJs</p>
                </span>
                {/*  */}
                <span className="tech_used_item">
                  <p>NodeJs</p>
                </span>
                <span className="tech_used_item">
                  <p>NodeJs</p>
                </span>
                <span className="tech_used_item">
                  <p>NodeJs</p>
                </span>
                <span className="tech_used_item">
                  <p>NodeJs</p>
                </span>
                {/*  */}
              </span>
            </div>
          </div>
        </section>
        <section className="section_menu"></section>
      </section>
    </>
  );
};

export default Project;
