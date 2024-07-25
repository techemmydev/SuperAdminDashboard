import React from "react";
import { AllstaffArray } from "./RoleTogggleArray"; // Assuming your data array import path
import SwitchButton from "../../../COMPANY/companySubscription/SwitchButton/SwitchButton";
import editimage from "/AttendanceEshImage/edit.svg";
import style from "../AllroleToggle/Roles.module.css";

const RoleToggle = () => {
  return (
    <div>
      <div className={`${style.Allowcontainer}`}>
        <div className={`${style.flexedit}`}>
          <h1 className={`${style.h1}`}>Permissions</h1>
          <img src={editimage} alt="" />
        </div>

        <div className={`${style.staff}`}>
          {AllstaffArray.map((staff, index) =>
            staff.AllstaffArrayInformation?.map((info, items) => (
              <div key={`${index}-${items}`} className={`${style.staffSwitch}`}>
                <div>
                  <SwitchButton />
                </div>

                <div className={`${style.infoDetails}`}>
                  <h2>{info.showStaffheading}</h2>
                  <p>{info.showStaffheadingparagraphy}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleToggle;
