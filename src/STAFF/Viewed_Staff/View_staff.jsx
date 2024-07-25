import React from "react";
import { viewStaffProfile } from "./ViewstaffArray";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import style from "../Viewed_Staff/Viewstaff.module.css";
import { FiUserPlus } from "react-icons/fi";
import DownloadAndPrint from "../../SuperAdminComponent/DownloadAndPrint/DownloadAndPrint";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button.jsx";
import { RxQuestionMarkCircled } from "react-icons/rx";

const View_staff = () => {
  const staffProfiles = viewStaffProfile || [];

  return (
    <React.Fragment>
      <div className={style.GenerateCode_container_h1}>
        <h1>View Profile</h1>
        <h1>Staff List / View Profile</h1>
      </div>

      <div className={style.GenerateCode_container}>
        <div className={`${style.Mobileshow}`}>
          <h1>View Profile</h1>
          <Link to={"/addnewstaff"} style={{ textDecoration: "none" }}>
            <Button
              style={{
                width: "150px",
                height: "45px",
                backgroundColor: "#FF8500",
                color: "white",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              <FiUserPlus />
              Assign Role
            </Button>
          </Link>
        </div>
        <div className={`${style.hideMobile}`}>
          <DownloadAndPrint />
        </div>
      </div>
      <section className={`${style.viewContainer}`}>
        <div className={`${style.viewContainer2}`}>
          {staffProfiles.map((item, index) => (
            <div
              className={`${style.viewContainerdiv}`}
              key={`profile-${index}`}
            >
              {item.username ? (
                <div>
                  <div className={`${style.viewflex1}`}>
                    <div>
                      <img
                        src={item.userproficture}
                        alt={`${item.username}'s profile`}
                      />
                    </div>
                    <div className={`${style.viewflexDetails}`}>
                      <h1>{item.username}</h1>
                      <p>{item.useremail}</p>
                      {item.isActive ? <span>active</span> : ""}
                    </div>
                  </div>
                  <div className={`${style.viewflex2}`}>
                    {item.projectdone?.map((done, projIndex) => (
                      <div key={`project-${index}-${projIndex}`}>
                        <h1>{done.show}</h1>
                        <p>{done.school}</p>
                      </div>
                    ))}
                  </div>
                  <div className={`${style.viewflexDetailsInfo}`}>
                    <div>
                      <p>{item.heading}</p>
                      <h5>{item.useremail2}</h5>
                    </div>
                    <div>
                      <p>{item.heading2}</p>
                      <h5>{item.position}</h5>
                    </div>
                    <div>
                      <p>{item.heading3}</p>
                      <h5>{item.phone}</h5>
                    </div>
                    <div>
                      <p>{item.heading4}</p>
                      <h5>{item.staffId}</h5>
                    </div>
                    <div>
                      <p>{item.heading5}</p>
                      <h5>{item.joinDate}</h5>
                    </div>
                    <div>
                      <p>{item.heading6}</p>
                      <h5>{item.Address}</h5>
                    </div>
                    <div>
                      <p>{item.heading7}</p>
                      <h5>{item.Gender}</h5>
                    </div>
                    <div>
                      <p>{item.heading8}</p>
                      <h5>{item.DateofBirth}</h5>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${index === 1 ? style.boder : ""}`}>
                  {item.jobtileheading && (
                    <h2 className={`${style.teams}`}>{item.jobtileheading}</h2>
                  )}
                  {item.jobtile && (
                    <div className={`${style.numberofteamsflex}`}>
                      <p>{item.jobtile}</p>
                      {item.jobtile1 && <p>{item.jobtile1}</p>}
                    </div>
                  )}
                  <div>
                    {item.viewall && (
                      <div className={`${style.viewallflex}`}>
                        <p className={`${style.viewallstyle}`}>
                          {item.viewall}
                        </p>
                        <span>
                          View all{" "}
                          <FaArrowRight
                            className={`${style.viewallflexIcons}`}
                          />
                        </span>
                      </div>
                    )}
                  </div>

                  {item.showTeam?.map((team, teamIndex) => (
                    <div
                      key={`showTeam-${index}-${teamIndex}`}
                      className={`${style.developertitle}`}
                    >
                      <div>
                        <img
                          src={team.showTeamimage}
                          alt={`${team.showTeamname}'s profile`}
                        />
                      </div>
                      <div>
                        <h2>{team.showTeamtitle}</h2>
                        <p>{team.showTeamname}</p>{" "}
                      </div>
                    </div>
                  ))}

                  {item.imagestack?.map((image, imgIndex) => (
                    <div
                      key={`imagestack-${index}-${imgIndex}`}
                      className={`${style.imagestack}`}
                    >
                      <img
                        src={image.image1}
                        alt={`${item.username}'s profile image`}
                        className={`${style.imageStackItem1}`}
                      />
                      <img
                        src={image.image2}
                        alt={`${item.username}'s profile image`}
                        className={`${style.imageStackItem2}`}
                      />
                      <img
                        src={image.image3}
                        alt={`${item.username}'s profile image`}
                        className={`${style.imageStackItem3}`}
                      />
                      <p className={`${style.imageStackItemp}`}>{item.perr}</p>
                    </div>
                  ))}

                  <div className={`${style.roleandresponsibilty}`}>
                    <h1>{item.title}</h1>
                    <p>{item.footnote}</p>
                  </div>
                  <div className={`${index === 2 ? style.boder : ""}`}>
                    <p className={`${style.reporttop}`}>{item.reportto}</p>
                    {item.repotshowTeam?.map((team, teamIndex) => (
                      <div
                        key={`reportshowTeam-${index}-${teamIndex}`}
                        className={`${style.developertitle}`}
                      >
                        <div>
                          <img
                            src={team.reportshowTeamimage}
                            alt={`${team.reportshowTeamimage}'s profile`}
                          />
                        </div>
                        <div className={`${style.padding}`}>
                          <p>{team.showTeamtitle222}</p>
                          <h2>{team.showTeamname222}</h2>
                        </div>
                        <FaArrowRight style={{ color: " #ff8500" }} />
                      </div>
                    ))}

                    <div>
                      {index === 2 && (
                        <div className={`${style.developertitle}`}>
                          {/* Your code to display details from item object (staff at index 2) */}
                          <h2>{item.AccesRole}</h2>
                          <p>{item.AdminAccess}</p>
                          <span>
                            <RxQuestionMarkCircled style={{ color: "gray" }} />
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={`${style.developertitle}`}>
                      <h2>{item.workhours}</h2>
                      <p>{item.worktime}</p>
                    </div>
                    {/* <p>{item.reportto}</p> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default View_staff;
