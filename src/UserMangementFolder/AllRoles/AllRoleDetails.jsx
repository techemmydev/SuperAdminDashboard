import React from "react";
import style from "../AllRoles/Allrole.module.css";
import { MdArrowBackIos } from "react-icons/md";
// import GeneralSerach from "../../SuperAdminComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../../SuperAdminComponent/DownloadAndPrint/DownloadAndPrint";
// import Attendance_Table from "./StaffTableData/StaffData";
// import Previous_Next from "../../SuperAdminComponent/PreviousAndNextButton/Previous_Next";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
// import { FaPlus } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// import StaffData from "../../StaffTableData/StaffData";

import RoleDataDetails from "./AllroleDataTable/RoleDataDetails";
import RoleToggle from "./AllroleToggle/RoleToggle";
import Userpicture from "../../SuperAdminComponent/UserPicture/Userpicture";

// import { Outlet } from "react-router-dom";
const AllRoleDetails = ({ selectedIndex }) => {
  return (
    <div>
      <div className={style.GenerateCode_container_h1}>
        <h1>User Management</h1>
        <h1>User Management / All roles</h1>
      </div>
      <div className={style.mobile}>
        <h2>Roles</h2>
        <div>
          <DownloadAndPrint />
        </div>
      </div>

      <div className={style.GenerateCode_container1}>
        <div className={`${style.hideButton}`}>
          <Button
            next={selectedIndex}
            style={{
              width: "150px",
              heigth: "45px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",
              display: "flex",
              alignItem: "center",
              gap: "3px",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            <MdArrowBackIos />
            Back
          </Button>
        </div>
        <div className={`${style.hide_Desktop}`}>
          <DownloadAndPrint />
        </div>
      </div>
      <div className={style.imgaecontainer}>
        <h1>Roles Details</h1>
        <div className={`${style.staffSwitch}`}>
          <Userpicture />
          <div>
            <h2>John Anioke</h2>
            <p>Report to</p>
          </div>
        </div>
      </div>
      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <div>
            <RoleDataDetails />
          </div>
          <div>
            <RoleToggle />
          </div>
        </div>
        <div className={`${style.showButton}`}>
          <Button
            next={selectedIndex}
            style={{
              width: "150px",
              heigth: "45px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",
              display: "flex",
              alignItem: "center",
              gap: "3px",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            <MdArrowBackIos />
            Back
          </Button>
        </div>
      </section>

      {/* <Outlet /> */}
    </div>
  );
};

export default AllRoleDetails;
