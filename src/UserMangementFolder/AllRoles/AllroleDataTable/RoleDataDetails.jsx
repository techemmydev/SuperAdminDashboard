import React from "react";
import style from "./roleTable.module.css";
import { StaffDataArray } from "./RolesArrayInfo";
import editimage from "/AttendanceEshImage/edit.svg";

const RoleDataDetails = () => {
  return (
    <div>
      <section>
        <div>
          {StaffDataArray.map((items, index) => (
            <React.Fragment key={index}>
              <div className={`${style.table_Flex}`}>
                <div className={`${style.flexedit}`}>
                  <h1 className={`${style.h1}`}>{items.RolesTitleHeading}</h1>
                  <img src={editimage} alt="" />
                </div>

                <p className={`${style.p}`}>
                  <span>Description:</span> {items.jobDescription}
                </p>
                <div className={`${style.idx}`}>
                  <div>
                    <h2>staffID</h2>
                    <p>{items.StaffID}</p>
                    <h2>Salary</h2>
                    <p>{items.Salary}</p>
                  </div>
                  <div>
                    <h2>Permission Level</h2>
                    <p>{items.permissionleve}</p>
                    <h2>Reports to</h2>
                    <p>{items.Reportsto}</p>
                  </div>
                </div>
                <div className={`${style.teams}`}>
                  <h1>Teams</h1>
                  <div className={`${style.teamsflex}`}>
                    {items.numberofteams?.map((teams, teamIndex) => (
                      <h5
                        key={teamIndex}
                        className={
                          teamIndex === 0
                            ? style.span2
                            : teamIndex === 1
                            ? style.span1
                            : ""
                        }
                      >
                        {teams.Developmentteam}
                      </h5>
                    ))}
                  </div>
                </div>
                <div className={`${style.teamsmember}`}>
                  <h1 className={`${style.h1}`}>Team members</h1>
                  <div className={`${style.teamsflexmember}`}>
                    {items.showTeam?.map((teams, teamIndex) => (
                      <div key={teamIndex} className={`${style.bodercolor}`}>
                        <div>
                          <img
                            src={teams.showTeamimage}
                            alt={teams.showTeamtitle}
                          />
                        </div>
                        <div className={`${style.titleflex}`}>
                          <h1>{teams.showTeamname}</h1>
                          <p>{teams.showTeamtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {items.imagestack?.map((image, imgIndex) => (
                  <div
                    key={`imagestack-${index}-${imgIndex}`}
                    className={style.imagestack}
                  >
                    <img
                      src={image.image1}
                      alt={`Image 1`} // Optionally, add alt text
                      className={style.imageStackItem1}
                    />
                    <img
                      src={image.image2}
                      alt={`Image 2`} // Optionally, add alt text
                      className={style.imageStackItem2}
                    />
                    <img
                      src={image.image3}
                      alt={`Image 3`} // Optionally, add alt text
                      className={style.imageStackItem3}
                    />
                    <p className={`${style.imageStackItemp}`}>{items.perr}</p>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoleDataDetails;
