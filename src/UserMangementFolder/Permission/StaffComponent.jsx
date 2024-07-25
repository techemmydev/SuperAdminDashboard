import React from "react";
import { AllstaffArray } from "./StaffPermissionArray"; // Assuming your data array import path
import SwitchButton from "../../COMPANY/companySubscription/SwitchButton/SwitchButton";
import style from "../Permission/Permissionstyle.module.css";
const StaffComponent = () => {
  return (
    <div>
      <div className={`${style.Allowcontainer}`}>
        <div className={`${style.Allowaccess}`}>
          <div className={`${style.infoDetails}`}>
            <h2>Standard Access 1</h2>
          </div>
          <div className={`${style.staffSwitch}`}>
            <SwitchButton />
            <h2>Enable all</h2>
          </div>
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
      <div className={`${style.margin_top}`}>
        <div className={`${style.Allowcontainer}`}>
          <div className={`${style.Allowaccess}`}>
            <div className={`${style.infoDetails}`}>
              <h2>Custom Access</h2>
            </div>
            <div className={`${style.staffSwitch}`}>
              <SwitchButton />
              <h2>Enable all</h2>
            </div>
          </div>
          <div className={`${style.staff}`}>
            {AllstaffArray.map((staff, index) =>
              staff.AllstaffArrayInformation?.map((info, items) => (
                <div
                  key={`${index}-${items}`}
                  className={`${style.staffSwitch}`}
                >
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
    </div>
  );
};

export default StaffComponent;
