import React, { useState } from "react";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import style from "../AttendanceMgt/Attendancemanage.module.css";
import Userdetails from "../AttendanceMgt/Userdetails";
import AllRoleDetails from "../AllRoles/AllRoleDetails";
import StaffPermission from "../UserPermissionAllStaff/StaffPermission";

const AttendanceManage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <React.Fragment>
      <section>
        <div className={`${style.flexheading} `}>
          <h1 className={`${style.addnewh1} `}>User Management</h1>
          <div className={`${style.newrole}`}>
            <h1 className={`${style.newrolePara}`}>Staff / Assign new role</h1>

            <div className={`${style.newrole_button_hide}`}>
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
                <img src="/AttendanceEshImage/Icon.png" /> Assign Role
              </Button>
            </div>
          </div>
        </div>
        {selectedIndex === 0 && (
          <Userdetails
            selectedIndex={() => setSelectedIndex(1)}
            selectedIndexPreviouspage={() => setSelectedIndex(2)}
          />
        )}
        {selectedIndex === 1 && (
          <AllRoleDetails selectedIndex={() => setSelectedIndex(0)} />
        )}
        {selectedIndex === 2 && (
          <StaffPermission
            selectedIndexPreviouspage={() => setSelectedIndex(2)}
            backToAllUserdatils={() => setSelectedIndex(0)}
          />
        )}
      </section>
    </React.Fragment>
  );
};

export default AttendanceManage;
