import React, { useEffect, useState } from "react";
import "./../CSS Folder/Skill.css";

const skill_data = [
  {
    id: 3,
    active: 1,
    rank: 1,
    titleImg: "./assets/skill/node1.png",
    title: "NODE-JS (Backend)",
    subtitle: "Node-Js",
    category: ["backend"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of Syntax",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Create Servers",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Routes",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Fs, Path, Os Modules",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Frontend",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Database",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 4,
    active: 1,
    rank: 2,
    titleImg: "./assets/skill/express.png",
    title: "EXPRESS (Backend)",
    subtitle: "Express",
    category: ["backend", "libraries"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of Syntax",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Create Servers",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Routers",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Intergrate with Various Modules",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Frontend",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Database",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "GET, POST, PUT, DELETE",
      },
      {
        id: 7,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 5,
    active: 1,
    rank: 3,
    titleImg: "./assets/skill/mongo.png",
    title: "MONGO Database",
    subtitle: "MongoDB",
    category: ["backend", "database"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of Syntax",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Mongoose Packages",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Filter, Sorting etc Properties",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Work on CLI",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Frontend",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Backend",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Mongo-DB Atlas",
      },
      {
        id: 7,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 6,
    active: 1,
    rank: 4,
    titleImg: "./assets/skill/react.png",
    title: "REACT-JS : Frontend",
    subtitle: "React-Js",
    category: ["frontend", "design", "libraries"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of Syntax",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "ES6 propeties",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Life Cycle of Component",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Redux Toolkit",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "React Router Dom",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Context API",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Hooks",
      },
      {
        id: 7,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Backend",
      },
      {
        id: 8,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Database",
      },
      {
        id: 9,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 7,
    active: 1,
    rank: 5,
    titleImg: "./assets/skill/firebase.png",
    title: "FIREBASE : Database",
    subtitle: "Firebase",
    category: ["frontend", "backend", "database"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of tools",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Connect with Frontent",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Authentications",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Real time database",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Cloude Storage",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Hosting",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 12,
    active: 1,
    rank: 6,
    titleImg: "./assets/skill/dsa.png",
    title: "DATA STRUCTURE & ALGORITHMS",
    subtitle: "DSA",
    category: ["DSA"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "1000+ Questions Solved",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "1500+ Rating on LeetCode",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "All Data structures",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Famous Algorithms",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Good Problem Solving Skills",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 13,
    active: 1,
    rank: 7,
    titleImg: "./assets/skill/redux.png",
    title: "REDUX",
    subtitle: "Redux",
    category: ["frontend", "npm package"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good knowledge of middleware",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Reducer functions",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Action types & functions",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Dispatch method",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Knowledge of Redux Thunk",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 8,
    active: 1,
    rank: 8,
    titleImg: "./assets/skill/figma.png",
    title: "FIGMA : Design",
    subtitle: "Figma",
    category: ["frontend", "design"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of tools",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Frames",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Groups",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Color Combination",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Widgets",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 10,
    active: 1,
    rank: 9,
    titleImg: "./assets/skill/js_api's.png",
    title: "JAVASCRIPT API's",
    subtitle: "Js API's",
    category: ["frontend", "JS API"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of API's",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Intersection Observer",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Resize Observer",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Speech Synthesis",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Speech Recognition",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 0,
    active: 1,
    rank: 10,
    titleImg: "./assets/skill/html.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of all Tags",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Tricks about SEO",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Canvas for game development",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Link with CSS",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Link with JS",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Forms and Events",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 1,
    active: 1,
    rank: 11,
    titleImg: "./assets/skill/css.png",
    title: "Cascading Style Sheet : CSS",
    subtitle: "CSS",
    category: ["frontend", "design"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding all CSS properties",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Pseudo Elements",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Flex Box Properties",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Grid properties",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Media Propeties",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Knowledge of @Keyframes",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "--root(), var() & calc() properties",
      },
      {
        id: 7,
        img: "./assets/skill/correct2.jpg",
        content: "::before and ::after class",
      },
      {
        id: 8,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 2,
    active: 1,
    rank: 12,
    titleImg: "./assets/skill/js.png",
    title: "JavaScript : JS",
    subtitle: "JavaScript",
    category: ["frontend", "Backend"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of Syntax",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "JS API's",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Understanding of Object and Arrays",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "Async & Await and try & catch",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Promises, Clousers, bind etc. Properties",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "DOM Properties",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "(Get, Post, Put, Delete) : Fetch",
      },
      {
        id: 7,
        img: "./assets/skill/correct2.jpg",
        content: "Window properties",
      },
      {
        id: 8,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 9,
    active: 1,
    rank: 13,
    titleImg: "./assets/skill/npm.png",
    title: "NPM PACKAGES",
    subtitle: "NPM",
    category: ["frontend", "backend", "npm package"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Good understanding of packages",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Date Module",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "Multer Module",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "CORS Module",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "React Router DOM and Redux",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Mongoose Module",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
  {
    id: 11,
    active: 1,
    rank: 14,
    titleImg: "./assets/skill/hosting.png",
    title: "HOSTING : DEPLOY",
    subtitle: "Hosting",
    category: ["frontend", "hosting", "backend"],
    points: [
      {
        id: 0,
        img: "./assets/skill/correct2.jpg",
        content: "Vercel website",
      },
      {
        id: 1,
        img: "./assets/skill/correct2.jpg",
        content: "Netlify website",
      },
      {
        id: 2,
        img: "./assets/skill/correct2.jpg",
        content: "GitHub pages",
      },
      {
        id: 3,
        img: "./assets/skill/correct2.jpg",
        content: "FireBase website",
      },
      {
        id: 4,
        img: "./assets/skill/correct2.jpg",
        content: "Heroku",
      },
      {
        id: 5,
        img: "./assets/skill/correct2.jpg",
        content: "Railway website",
      },
      {
        id: 6,
        img: "./assets/skill/correct2.jpg",
        content: "Many more things",
      },
    ],
  },
];

const skillCategory_data = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "frontend",
  },
  {
    id: 2,
    name: "backend",
  },
  {
    id: 3,
    name: "database",
  },
  {
    id: 4,
    name: "libraries",
  },
  {
    id: 5,
    name: "npm package",
  },
  {
    id: 6,
    name: "JS API",
  },
  {
    id: 7,
    name: "hosting",
  },
  {
    id: 8,
    name: "design",
  },
  {
    id: 9,
    name: "DSA",
  },
  {
    id: 10,
    name: "Others",
  },
];

const Skill = () => {
  const [sltSkillId, upd_sltSkillId] = useState(0);
  const [categoryId, upd_categoryId] = useState(0);
  const [expandBtn, upd_expandBtn] = useState(1);

  const showSkillDetails = (left, right) => {
    if (expandBtn) {
      left.classList.add("active");
      right.classList.add("active");
    } else {
      left.classList.remove("active");
      right.classList.remove("active");
    }
    upd_expandBtn(!expandBtn);
  };

  useEffect(() => {
    const expandButton = document.querySelector(".skill_page .section_left i");
    const detailButton = document.querySelectorAll(
      ".skill_page .section_right .lower_part .skill_item .btn button"
    );

    const section_left = document.querySelector(".skill_page .section_left");
    const section_right = document.querySelector(".skill_page .section_right");

    const expandButtonFunction = () => {
      showSkillDetails(section_left, section_right);
    };

    const detailButtonFunction = () => {
      if (expandBtn) showSkillDetails(section_left, section_right);
    };

    expandButton.addEventListener("click", expandButtonFunction);

    for (let x of detailButton) {
      x.addEventListener("click", detailButtonFunction);
    }

    const about_page = document.querySelector(".aboutUs_page");

    const skill_page = document.querySelector(".skill_page");
    // active the components
    const Observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          // console.log(skill_page);
          skill_page.classList.add("active");
        } else {
          skill_page.classList.remove("active");
        }
      },
      {
        root: null,
        thresold: 0.8,
      }
    );

    Observer.observe(about_page);

    return () => {
      Observer.unobserve(skill_page);
      expandButton.removeEventListener("click", expandButtonFunction);

      for (let x of detailButton) {
        x.removeEventListener("click", detailButtonFunction);
      }

      // console.log("Unmounting");
    };
  }, [expandBtn, categoryId]);

  return (
    <>
      <section className="skill_page" id="SkillPage">
        <div className="section_left">
          <div className="upper_part">
            <h2>SKILLS</h2>
          </div>
          <div className="lower_part">
            <span className="close_btn_cntnr">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
            <div className="card">
              <div className="head">
                <span className="img">
                  <img src={skill_data[sltSkillId].titleImg} alt="skill_img" />
                </span>
                <span className="title">
                  <p>{skill_data[sltSkillId].title}</p>
                </span>
              </div>
              <div className="body">
                <div className="item_cntnr">
                  {skill_data[sltSkillId].points.map((item, index) => {
                    return (
                      <div key={index} className="items">
                        <span className="rods"></span>
                        <span className="content">
                          <span className="img">
                            <img src={item.img} alt="valid" />
                          </span>
                          <span className="points">
                            <p>{item.content}</p>
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_right">
          <div className="upper_part">
            <h2>SKILLS</h2>
          </div>
          <div className="lower_part">
            <div className="filter_cntnr">
              {skillCategory_data.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={
                      item.id == categoryId
                        ? "filter_item active"
                        : "filter_item"
                    }
                    onClick={() => upd_categoryId(item.id)}
                  >
                    <p>{item.name}</p>
                  </span>
                );
              })}
            </div>
            <div className="skill_items_cntnr">
              {skill_data.map((item, index) => {
                if (
                  skillCategory_data[categoryId].name == "all" ||
                  item.category.includes(skillCategory_data[categoryId].name)
                ) {
                  return (
                    <span
                      key={index}
                      className={
                        item.rank - 1 == sltSkillId
                          ? "skill_item active"
                          : "skill_item"
                      }
                      onClick={() => upd_sltSkillId(item.rank - 1)}
                    >
                      <span className="img">
                        <img src={item.titleImg} alt={item.subtitle} />
                      </span>
                      <span className="title">
                        <p>{item.subtitle}</p>
                      </span>
                      <span className="btn">
                        <button onClick={() => upd_sltSkillId(item.rank - 1)}>
                          Details
                        </button>
                      </span>
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="section_menu"></div>
      </section>
    </>
  );
};

export default Skill;
