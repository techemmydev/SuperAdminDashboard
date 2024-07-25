// src/components/UserPermissionAllStaff/StaffPermission.jsx
import React, { useState } from "react";
import style from "../SetpermissionNavigate/setpermit.module.css";

import Userpicture from "../../../../SuperAdminComponent/UserPicture/Userpicture";
import StaffComponent from "../../../../UserMangementFolder/Permission/StaffComponent";

const PermissionNavigate = () => {
  return (
    <React.Fragment>
      <div className={`${style.paddingcontainer}`}>
        <div className={style.GenerateCode_container1}>
          <h1>Set Permissions</h1>
          <div className={`${style.staffSwitch}`}>
            <Userpicture />
            <div>
              <h1>Faith Peace</h1>
              <p>Owner (Super Admin)</p>
            </div>
          </div>
        </div>

        <div>
          <StaffComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PermissionNavigate;
