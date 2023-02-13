import React, { useEffect, useState } from "react";
import "./../CSS Folder/Project.css";

const project_data = [
  {
    id: 0,
    rank: 1,
    active: 1,
    gitHubLink: "https://github.com/mrRhenium/tournamentOrganiser",
    siteLink: "https://mrrhenium.github.io/tournamentOrganiser/",
    titleImg: "./assets/project/trtmt_logo.png",
    title: "Tournament Organiser App",
    subTitle: "- It is based on my Real Problem.",
    descriptionImg: "./assets/project/trtmt_site.png",
    description: `PROBLEM : When we used to play badminton like sports with my friends. We were facing the problem😢 of fixing the accurate matches among the multiple players, remembering each player's match record & profiles and it is also very time consuming process. But after this Web Application we resolve all problems.😎`,
    points: [
      "Eye catching UI is implemented.",
      "Users can send their Feedback.",
      "Firebase database is used to store the user's feedback.",
      "Local Storage is used to store the app related data.",
      "Optimized Algorithms are used to decide matches.",
      "Random matches are organised among the players.",
      "At the end of tournament winners are listed on the leaderboard.",
      "Rematch functionality is avalaible.",
      "Match timing is also recorded.",
    ],
    techUsed: ["Firebase", "JavaScript", "CSS", "HTML", "Figma", "JS API's"],
  },
  {
    id: 1,
    rank: 2,
    active: 1,
    gitHubLink: "https://github.com/mrRhenium/Weather-75",
    siteLink: "https://mrrhenium.github.io/Weather-75/",
    titleImg: "./assets/project/weather_logo.png",
    title: "Weather Report Web-App.",
    subTitle: `- It is based on "How to use API's".`,
    descriptionImg: "./assets/project/weather_site.png",
    description: `It is the Web-Application based on "How to use API's". It is used to search weather report of any city in the world. we are using the API's for generating the Weather information.
    AI is used for Voice Synthesis who tell us the weather info., Let's Check-Out.`,
    points: [
      "Run on any device : Fully Responsive.",
      "API's is used to build the application.",
      "Voice's search functionality is implemented.",
      "We can also hear the information -> AI is used for voice synthesis.",
      "Users can give feedback to us.",
      "Firebase is used to store the data.",
      "Best UI/UX created : Attractive animation is used.",
    ],
    techUsed: ["JavaScript", "CSS", "HTML", "Firbase", "JS API's"],
  },
  {
    id: 2,
    rank: 3,
    active: 1,
    gitHubLink: "https://github.com/mrRhenium/ImagesUpload",
    siteLink: "https://github.com/mrRhenium/ImagesUpload",
    titleImg: "./assets/project/dualSvr_logo.png",
    title: "Working with Dual Server.",
    subTitle: "- This type of project nowhere on Internet.",
    descriptionImg: "./assets/project/dualSvr_site.png",
    description: `PROBLEM : Whenever we create any Text-Image uploading app like Instagram and other Social Media like applications. It usually contain huge data and images which increase the load on server, through it server become slow and heavy. To overcome these type of situations, they are using more than one server.`,
    points: [
      "Get, Post, Update, Delete with data (Text-Image) functionality is implemented.",
      "CORS (Cross Origin Resource Sharing) is implemented in it.",
      "Fully Backend Project.",
      "Have Dual Server (Main-Server & Media-Server).",
      "Primary Server is used for text related data and Media Server is used for Images.",
      "Fs, CORS & Multer Module is used in it.",
      "Self-Made project: Not found on Internet.",
    ],
    techUsed: ["Node-Js", "Express", "MongoDB", "NPM Packages", "HTML"],
  },
  {
    id: 3,
    rank: 4,
    active: 1,
    gitHubLink: "https://github.com/mrRhenium/myPortfolio",
    siteLink: "https://my-portfolio-beta-version2022.netlify.app/",
    titleImg: "./assets/project/portfolio_logo.png",
    title: "My Portfolio.",
    subTitle: "- Best UI/UX project",
    descriptionImg: "./assets/project/portfolio_site.png",
    description: `You already know about this project which you are seeing here is my Portfolio. This is frontent + Database related project. Whole Data which you are seeing is fetch from the Database and rendering on your Browser. Animation is used on Every Page.`,
    points: [
      "It is React-Js based Frontent + Database Project.",
      "Intersection & Resize Observer (JS-API's) is Used in it.",
      "Menu Icons dynamically change on Scrolling.",
      "Slide-Show function is implemented in it.",
      "Feedback and Rate-Us funtionality in it.",
      "Less write and Do more : This project is perfect example of it.",
      "Currently it is released in Beta-Version.",
    ],
    techUsed: ["React-Js", "Firebase", "HTML", "CSS", "JS-API's"],
  },
];

const Project = () => {
  const [pjtId, upd_pjtId] = useState(0);
  let totalPjt = project_data.length;

  useEffect(() => {
    //

    const project_page = document.querySelector(".project_page");

    let slideShow;
    let observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          slideShow = setInterval(() => {
            upd_pjtId((pjtId + 1) % totalPjt);
            // console.log(pjtId, "slideShow is started");
          }, 3000);
        } else {
          clearInterval(slideShow);
        }
      },
      {
        root: null,
        threshold: 0.7,
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
      upd_pjtId((pjtId + 1) % totalPjt);
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
            <strong>{pjtId + 1 + "/" + totalPjt}</strong>
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
                    <a
                      href={project_data[pjtId].gitHubLink}
                      target="_blank"
                      rel="external"
                    >
                      <i className="fa fa-eye" aria-hidden="true"></i>
                      <i>Source-Code</i>
                    </a>
                  </span>
                  <span className="card_deploy_link">
                    <a
                      href={project_data[pjtId].siteLink}
                      target="_blank"
                      rel="external"
                    >
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                      <i>View-Live</i>
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
                        className={item.id === pjtId ? "active" : ""}
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
                  onClick={() => upd_pjtId((pjtId - 1 + totalPjt) % totalPjt)}
                ></i>
                <i
                  className="fa fa-arrow-circle-o-right"
                  aria-hidden="true"
                  onClick={() => upd_pjtId((pjtId + 1) % totalPjt)}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="section_right">
          <div className="upper_part">
            <h1>PROJECTS</h1>
            <strong>{pjtId + 1 + "/" + totalPjt}</strong>
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
