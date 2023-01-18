import React from "react";
import "./../CSS Folder/Project.css";

const project_data = [
  {
    titleImg: "./assets/light bulb.png",
    title: "1.Tournament Organiser",
    subTitle: "- It is based on Real Problem.",
    description: `This project is build upon my real problem when I playing the badminton with my friends. It is used to organise the Badminton tournament among the players..`,
    descriptionImg: "./assets/bg.jpg",

    points: [
      "Local Storage is Used to store the Data.",
      "Randome Matches is organise among the players.",
      "At the end of Tournament Winners wated on the Leaderboard.",
      "Rematch functioy is avalaible.",
      "Match Timing is also Recorded.",
      "Two mode are avalaible for seleting the Winners.",
    ],
    techUsed: ["NodeJs", "NodeJs", "NodeJs", "NodeJs"],
  },
  {
    titleImg: "./assets/light bulb.png",
    title: "2.Tournament Organiser",
    subTitle: "- It is based on Real Problem.",
    description: `This project is build upon my real problem when I playing the badminton with my friends. It is used to organise the Badminton tournament among the players..`,
    descriptionImg: "./assets/bg.jpg",

    points: [
      "Local Storage is Used to store the Data.",
      "Randome Matches is organise among the players.",
      "At the end of Tournament Winners wated on the Leaderboard.",
      "Rematch functioy is avalaible.",
      "Match Timing is also Recorded.",
      "Two mode are avalaible for seleting the Winners.",
    ],
    techUsed: ["NodeJs", "NodeJs", "NodeJs", "NodeJs"],
  },
];

const Project = () => {
  return (
    <>
      <section className="project_page" id="ProjectPage">
        <div className="section_left">
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
        </div>
        <div className="section_right">
          <div className="upper_part">
            <h1>PROJECTS</h1>
            <strong>3/5</strong>
          </div>
          <div className="lower_part">
            {/*  */}
            {/* <div className="slider_cntnr"> */}
            {project_data.map((item, index) => {
              return (
                <div key={index} className="project_details">
                  <span className="heading">
                    <h2>
                      <img src={item.titleImg} alt={item.title} />
                      <header>
                        {item.title}
                        <strong>{item.subTitle} </strong>
                      </header>
                    </h2>
                    <span className="brief_description">
                      <p>{item.description}</p>
                      <img src={item.descriptionImg} alt={item.title} />
                    </span>
                  </span>
                  <span className="points">
                    <ol>
                      {item.points.map((p, index) => {
                        return (
                          <li key={index}>
                            <p>{p}</p>
                          </li>
                        );
                      })}
                    </ol>
                  </span>
                  <span className="tech_used">
                    <h3>TECH. USED : </h3>
                    {item.techUsed.map((t, index) => {
                      return (
                        <span key={index} className="tech_used_item">
                          <p>{t}</p>
                        </span>
                      );
                    })}
                  </span>
                </div>
              );
            })}
            {/* </div> */}
            {/*  */}
          </div>
        </div>
        <div className="section_menu"></div>
      </section>
    </>
  );
};

// const project_cntnr = document.querySelector(
//   ".project_page .section_right .lower_part"
// );

// document.onclick = () => {
//   project_cntnr.scrollLeft += project_cntnr.clientWidth;
// };
// console.log(project_cntnr.scrollLeft);

export default Project;
