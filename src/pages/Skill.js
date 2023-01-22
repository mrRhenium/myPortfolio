import React, { useEffect, useState } from "react";
import "./../CSS Folder/Skill.css";

const skill_data = [
  {
    id: 0,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
      {
        id: 5,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags",
      },
      {
        id: 6,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 7,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 8,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 9,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 1,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 2,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "database"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 3,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 4,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 5,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "backend"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 6,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["database"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 7,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["libraries", "database", "DSA"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 8,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "backend", "libraries"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 9,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "JS API", "design"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 10,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "backend", "hosting"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 11,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "dsa"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
      },
    ],
  },
  {
    id: 12,
    titleImg: "./assets/light bulb.png",
    title: "HTML:Hyper Text Markup Language",
    subtitle: "HTML",
    category: ["frontend", "npm package"],
    points: [
      {
        id: 0,
        img: "./assets/light bulb.png",
        content: "Understanding of all tags and elements",
      },
      {
        id: 1,
        img: "./assets/light bulb.png",
        content: "elements",
      },
      {
        id: 2,
        img: "./assets/light bulb.png",
        content: "Understanding of all elements",
      },
      {
        id: 3,
        img: "./assets/light bulb.png",
        content: "all tags and elements",
      },
      {
        id: 4,
        img: "./assets/light bulb.png",
        content: "Understanding ",
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
];

const Skill = () => {
  const [sltSkillId, upd_sltSkillId] = useState(0);
  const [categoryId, upd_categoryId] = useState(0);

  useEffect(() => {
    const skill_page = document.querySelector(".skill_page");

    const detail_card = document.querySelector(
      ".skill_page .section_left .lower_part .card"
    );

    detail_card.classList.toggle("active");

    let observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          detail_card.classList.add("active");
          observer.unobserve(skill_page);
          // console.log("skill page");
        } else {
          detail_card.classList.remove("active");
        }
      },
      {
        root: null,
        threshold: 1,
      }
    );
    observer.observe(skill_page);

    return () => {
      observer.unobserve(skill_page);
      // console.log("Unmounting");
    };
  }, [sltSkillId]);

  return (
    <>
      <section className="skill_page" id="SkillPage">
        <div className="section_left">
          <div className="upper_part">
            <h2>SKILLS</h2>
          </div>
          <div className="lower_part">
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
          <div className="filter_cntnr">
            {skillCategory_data.map((item, index) => {
              return (
                <span
                  key={index}
                  className={
                    item.id == categoryId ? "filter_item active" : "filter_item"
                  }
                  onClick={() => upd_categoryId(item.id)}
                >
                  <p>{item.name}</p>
                </span>
              );
            })}
          </div>
          <div className="lower_part">
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
                        item.id == sltSkillId
                          ? "skill_item active"
                          : "skill_item"
                      }
                    >
                      <span className="img">
                        <img src={item.titleImg} alt={item.subtitle} />
                      </span>
                      <span className="title">
                        <p>{item.id + "-" + item.subtitle}</p>
                      </span>
                      <span className="btn">
                        <button onClick={() => upd_sltSkillId(item.id)}>
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
