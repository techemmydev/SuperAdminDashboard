import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";
import { PiCirclesFourThin } from "react-icons/pi";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import style from "../AttendanceMgt/userdetails.module.css";

const rolesData = [
  {
    id: 1,
    position: "Senior Software Engineer",
    name: "John Anioke",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph:
      "Responsible for leading the development team in designing, implementing and maintaining complex software systems",
    tags: ["Development", "Design", "Development", "Design"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
  {
    id: 2,
    position: "Senior Marketing Management",
    name: "Paul Clement",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph:
      "Responsible for leading the marketing team in developing and executing comprehensive marketing strategies.",
    tags: ["Marketing", "Sales", "Development", "Creative"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
  {
    id: 3,
    position: "Customer Service Advocate",
    name: "John Anioke",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph:
      "Responsible for ensuring customer satisfaction and retention by providing proactive support and building strong relationships with clients.",
    tags: ["Customer Service", "Sales", "Product Management"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
  {
    id: 4,
    position: "Financial Analyst",
    name: "Emmanuel Charles",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph: "Responsible for analyzing financial data.",
    tags: ["Finance", "Executive", "Operations"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
  {
    id: 5,
    position: "Product Design",
    name: "Paul Clement",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph:
      "Responsible for ensuring customer satisfaction and retention by providing proactive support and building strong relationships with clients.",
    tags: ["Creative", "Product Management", "Branding", "Design"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
  {
    id: 6,
    position: "Human Resources Manager",
    name: "Abinusawa Opeyemi",
    skills: "Team Lead",
    profile: "/ViewProfileimage/john.png",
    paragraph:
      "Responsible for overseeing all aspects of HR functions, including recruitment, employee relations, performance management and compliance.",
    tags: ["HR", "Management", "Legal"],
    avatars: [
      "/AttendanceEshImage/Avatar.png",
      "/AttendanceEshImage/Avatar2.png",
      "/AttendanceEshImage/Avatar3.png",
      "/AttendanceEshImage/Avatar4.png",
      "/AttendanceEshImage/Avatar5.png",
      "/AttendanceEshImage/Avatar6.png",
      "/AttendanceEshImage/_Avatar add button.png",
    ],
  },
];

const Userdetails = ({ selectedIndex, selectedIndexPreviouspage }) => {
  const [permissionsActive, setPermissionsActive] = useState(false);

  return (
    <div>
      <div className={`${style.searchhideDesktop}`}>
        <div className={`${style.searchContainer1}`}>
          <input
            className={`${style.search}`}
            type="text"
            placeholder="search"
          />
          <div className={`${style.filter}`}>
            <h3 className={`${style.searchh3}`}>Filter</h3>
            <div className={`${style.searchicon}`}>
              <IoFilterSharp />
            </div>
          </div>
          <div className={`${style.dotsContainer}`}>
            <img src="/AttendanceEshImage/Filter.png" alt="Filter Icon" />
            <div className={`${style.dotsicon}`}>
              <PiCirclesFourThin />
            </div>
          </div>
        </div>
        <div>
          <Button
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "24px",
              background: "#FF8500",
              border: "1px solid #FF8500",
              color: "white",
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className={`${style.all_roles_container}`}>
        <div className={`${style.roles_div}`}>
          <h4
            className={`${style.all_roles} ${
              permissionsActive ? style.active : style.inactive
            }`}
            onClick={() => setPermissionsActive(true)}
          >
            All roles
          </h4>
          <div className={`${style.border}`}></div>
        </div>
        <h4
          className={`${style.permissions}`}
          onClick={selectedIndexPreviouspage}
        >
          Permissions
        </h4>
        <div className={`${style.searchContainer}`}>
          <div className={`${style.searchContainer1}`}>
            <input
              className={`${style.search}`}
              type="text"
              placeholder="search"
            />
            <div className={`${style.filter}`}>
              <h3 className={`${style.searchh3}`}>Filter</h3>
              <div className={`${style.searchicon}`}>
                <IoFilterSharp />
              </div>
            </div>
            <div className={`${style.dotsContainer}`}>
              <img src="/AttendanceEshImage/Filter.png" alt="Filter Icon" />
              <div className={`${style.dotsicon}`}>
                <PiCirclesFourThin />
              </div>
            </div>
          </div>
          <div className={`${style.buttonContainer}`}>
            <Button
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "24px",
                background: "#FF8500",
                border: "1px solid #FF8500",
                color: "white",
              }}
            >
              Search
            </Button>
            <Button
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "24px",
                background: "#FF8500",
                border: "1px solid #FF8500",
                color: "white",
              }}
            >
              <img src="/AttendanceEshImage/Icon.png" alt="Assign Role Icon" />{" "}
              Assign Role
            </Button>
          </div>
        </div>
      </div>

      <div className={`${style.body_container}`}>
        <h4 className={`${style.roles}`}>All roles</h4>
        <div className={`${style.profile_container}`}>
          {rolesData.map((item, index) => (
            <div className={`${style.main_container}`} key={index}>
              <div className={`${style.profile_div}`}>
                <div className={`${style.position}`}>
                  {item.position}
                  <div className={`${style.image}`}>
                    <img src={`${item.profile}`} alt={`${item.name}`} />
                    <div className={`${style.name}`}>
                      {item.name}
                      <div className={`${style.skills}`}>{item.skills}</div>
                    </div>
                    <BiSolidRightArrowAlt
                      onClick={selectedIndex}
                      className={`${style.arrow_icons}`}
                    />
                  </div>
                </div>
                <div className={`${style.paragraph}`}>{item.paragraph}</div>
                <div className={`${style.designdiv}`}>
                  {item.tags.map((tag, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${tag.length * 9}px`,
                        height: "28px",
                        padding: "2px 8px",
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        background: i % 2 === 0 ? "#f5f5f5" : "#ff85001a",
                        color: "#0a0f29",
                        margin: "2px",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={`${style.avatar_container}`}>
                  <div className={`${style.avatar_div}`}>
                    {item.avatars.map((avatar, i) => (
                      <img
                        key={i}
                        className={`${style.avatar} ${style[`avatar${i + 1}`]}`}
                        src={avatar}
                        alt={`Avatar ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                {/* <div className={`${style.role_button}`}>
                  <Button
                    style={{
                      fontFamily: "Plus Jakarta Sans",
                      fontSize: "12px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      background: "#FF8500",
                      border: "1px solid #FF8500",
                      color: "white",
                    }}
                  >
                    Assign Role
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
