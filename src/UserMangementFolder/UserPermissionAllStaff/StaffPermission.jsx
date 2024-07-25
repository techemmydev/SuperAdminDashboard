// src/components/UserPermissionAllStaff/StaffPermission.jsx
import React, { useState } from "react";
import style from "../UserPermissionAllStaff/UserPermissionStaff.module.css";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Userpicture from "../../SuperAdminComponent/UserPicture/Userpicture";
import StaffComponent from "../Permission/StaffComponent";
import SelectedStaff from "../Permission/SelectedStaff";

const StaffPermission = ({
  // selectedIndexPreviouspage,
  backToAllUserdatils,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [permissionsActive, setPermissionsActive] = useState(false);

  return (
    <React.Fragment>
      <div className={`${style.GenerateCode_container1} ${style.hideMobile}`}>
        <h1>User Management</h1>
        <h1>User Management / Permissions</h1>
      </div>
      <div className={style.GenerateCode_container1}>
        <div className={`${style.usermangementlink}`}>
          <h1 onClick={backToAllUserdatils}>All roles</h1>
          <h1
            className={permissionsActive ? style.active : style.active}
            onClick={() => setPermissionsActive(true)}
          >
            Permissions
          </h1>
        </div>

        <div>
          <div className={` ${style.hideMobile}`}>
            <Link to="/addnewstaff" style={{ textDecoration: "none" }}>
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
        </div>
      </div>
      <div className={`${style.paddingcontainer}`}>
        <div className={style.GenerateCode_container1}>
          <h1>Permissions</h1>
          <div className={`${style.staffSwitch}`}>
            <Userpicture />
            <div>
              <h1>Faith Peace</h1>
              <p>Owner (Super Admin)</p>
            </div>
          </div>
        </div>
        <div className={style.GenerateCode_container1}>
          <div className={`${style.usermangementlink}`}>
            <h1
              className={selectedIndex === 0 ? style.active : style.inactive}
              onClick={() => {
                setSelectedIndex(0);
                setPermissionsActive(true); // Ensure Permissions stays active
              }}
            >
              All Staff
            </h1>
            <h1
              className={selectedIndex === 1 ? style.active : style.inactive}
              onClick={() => {
                setSelectedIndex(1);
                setPermissionsActive(true); // Ensure Permissions stays active
              }}
            >
              Selected Staff
            </h1>
          </div>
        </div>
        <div>
          {selectedIndex === 0 && <StaffComponent />}
          {selectedIndex === 1 && <SelectedStaff />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaffPermission;
