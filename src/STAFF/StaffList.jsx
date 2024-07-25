import React from "react";
import style from "../STAFF/Staff.module.css";
import GeneralSerach from "../SuperAdminComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../SuperAdminComponent/DownloadAndPrint/DownloadAndPrint";
// import Attendance_Table from "./StaffTableData/StaffData";
import Previous_Next from "../SuperAdminComponent/PreviousAndNextButton/Previous_Next";
import Button from "../SuperAdminComponent/Buttoncomponent/Button";
import { FaPlus } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { TbUserPlus } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import StaffData from "./StaffTableData/StaffData";

import { FaEdit } from "react-icons/fa";
import Modal from "../COMPANY/CompanyAttendanceTable/Modal/Model";
import { useState } from "react";
import StaffModel from "./Staff_Modal/StaffModel";

const menuItems = [
  { icon: <FaEdit />, text: "Edit", action: "edit" },
  { icon: <IoMdEye />, text: "View Profile", action: "viewProfile" },
  {
    icon: <TbUserPlus />,
    text: "Assign role",
    action: "assign role",
  },
  { icon: <FaRegTrashCan />, text: "Delete staff", action: "delete staff" },
];
const Staff = ({ selectedindexAddnewcompany, onMenuItemClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Menu item clicked: ${action}`);
    onMenuItemClick(action);
    // Implement action handling logic here
    toggleModal(); // Close the modal after an action is selected
  };
  return (
    <div>
      <div className={style.GenerateCode_container_h1}>
        <h1>Staff</h1>
        <h1>Staff / Staff List</h1>
      </div>
      <div className={style.GenerateCode_container}>
        <div>
          <Button
            next={selectedindexAddnewcompany}
            style={{
              width: "150px",
              heigth: "45px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",

              fontSize: "14px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            <FaPlus />
            Add New
          </Button>
        </div>
        <div>
          <GeneralSerach />
        </div>
      </div>
      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <div className={style.GenerateCode_container1}>
            <div className={style.GenerateCode_container_h1}>
              <h1>Staff List</h1>
            </div>

            <div>
              <DownloadAndPrint />
            </div>
          </div>

          <div className={`${style.download_mobile} `}>
            <h1>Staff List</h1>

            <div>
              <DownloadAndPrint />
            </div>
          </div>
          <div className={`${style.download_showingEntries} `}>
            <span>Show </span>
            <div
              style={{
                border: "2px solid #F5F5F5",
                width: "47px",
                textAlign: "center",
              }}
            >
              <span>10</span>
            </div>
            <span> entries</span>
          </div>

          <div>
            <StaffData
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
              menuItems={menuItems}
              onMenuItemClick={handleMenuItemClick}
            />
          </div>
          <Previous_Next />
        </div>
      </section>
      <StaffModel
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
      />
    </div>
  );
};

export default Staff;
