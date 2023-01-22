import React, { useEffect, useState } from "react";
import "./../CSS Folder/Project.css";

const project_data = [
  {
    id: 0,
    titleImg: "./assets/light bulb.png",
    title: "Tournament Organiser",
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
    id: 1,
    titleImg: "./assets/light bulb.png",
    title: "Tournament Organiser",
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
    id: 2,
    titleImg: "./assets/light bulb.png",
    title: "Tournament Organiser",
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
    id: 3,
    titleImg: "./assets/light bulb.png",
    title: "Tournament Organiser",
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
    id: 4,
    titleImg: "./assets/light bulb.png",
    title: "Tournament Organiser",
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
  const [pjtId, upd_pjtId] = useState(0);
  let total_pjt = project_data.length;
  // console.log(pjtId, total_pjt);

  useEffect(() => {
    //

    const project_page = document.querySelector(".project_page");

    let slideShow;
    let observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          slideShow = setInterval(() => {
            upd_pjtId((pjtId + 1) % total_pjt);
            // console.log(pjtId, "slideShow is started");
          }, 2500);
        } else {
          clearInterval(slideShow);
        }
      },
      {
        root: null,
        threshold: 1,
      }
    );
    observer.observe(project_page);

    const project_cntnr = document.querySelector(
      ".project_page .section_right .lower_part"
    );
    project_cntnr.scrollLeft = pjtId * project_cntnr.clientWidth;

    project_cntnr.addEventListener("mouseenter", () => {
      clearInterval(slideShow);
      // console.log("Mouse In");
    });

    project_cntnr.addEventListener("mouseleave", () => {
      upd_pjtId((pjtId + 1) % total_pjt);
      // console.log("Mouse Out");
    });

    //
    //

    return () => {
      clearInterval(slideShow);
      observer.unobserve(project_page);
      // console.log("Unmounting");
    };

    //
  }, [pjtId]);

  return (
    <>
      <section className="project_page" id="ProjectPage">
        <div className="section_left">
          <div className="upper_part">
            <h1>PROJECTS</h1>
            <strong>{pjtId + 1 + "/" + total_pjt}</strong>
          </div>
          <div className="lower_part">
            <div className="project_links_cntnr">
              <div className="project_links_card">
                <div className="card_img_cntnr">
                  <span className="card_title_img">
                    <img
                      src={project_data[pjtId].titleImg}
                      alt={project_data[pjtId].title}
                    />
                  </span>
                </div>
                <div className="card_link_cntnr">
                  <span className="card_github_link">
                    <a href="">
                      <i className="fa fa-github" aria-hidden="true"></i>
                      <i>{pjtId + 1} Preview</i>
                    </a>
                  </span>
                  <span className="card_deploy_link">
                    <a href="">
                      <i className="fa fa-github" aria-hidden="true"></i>
                      <i>{pjtId + 1} Deploy</i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="project_slider_btn_cntnr">
              <span className="project_indicator">
                <ul>
                  {project_data.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={item.id == pjtId ? "active" : ""}
                        onClick={() => {
                          upd_pjtId(item.id);
                        }}
                      >
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </li>
                    );
                  })}
                </ul>
              </span>
              <span className="slider_btn">
                <i
                  className="fa fa-arrow-circle-o-left"
                  aria-hidden="true"
                  onClick={() => upd_pjtId((pjtId - 1 + total_pjt) % total_pjt)}
                ></i>
                <i
                  className="fa fa-arrow-circle-o-right"
                  aria-hidden="true"
                  onClick={() => upd_pjtId((pjtId + 1) % total_pjt)}
                ></i>
              </span>
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

            {project_data.map((item, index) => {
              // if (item.id == pjtId)
              return (
                <div key={index} className="project_details">
                  <span className="heading">
                    <h2>
                      <img src={item.titleImg} alt={item.title} />
                      <header>
                        {item.id + 1 + ". " + item.title}
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

            {/*  */}
          </div>
        </div>
        <div className="section_menu"></div>
      </section>
    </>
  );
};

export default Project;
