import React, { useState } from "react";
import style from "./Company.module.css";
import GeneralSerach from "../SuperAdminComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../SuperAdminComponent/DownloadAndPrint/DownloadAndPrint";
import { IoIosAddCircleOutline } from "react-icons/io";
import CompanyTable from "../COMPANY/CompanyAttendanceTable/CompanyTable";
import Previous_Next from "../SuperAdminComponent/PreviousAndNextButton/Previous_Next";
import Button from "../SuperAdminComponent/Buttoncomponent/Button";

import { FaEdit, FaTrash, FaRegCreditCard } from "react-icons/fa";
import Modal from "./CompanyAttendanceTable/Modal/Model";

const menuItems = [
  { icon: <FaEdit />, text: "Edit", action: "edit" },
  { icon: <FaTrash />, text: "Delete", action: "delete" },
  { icon: <FaRegCreditCard />, text: "Subscription", action: "subscription" },
];

const CompanyList = ({ selectedindexAddnewcompany, onMenuItemClick }) => {
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
        <h1 className={`${style.hideh1} `}>Company</h1>
        <h1 className={`${style.hideh1} `}>Company / Company List</h1>
      </div>
      <div className={style.GenerateCode_container}>
        <div>
          <Button
            next={selectedindexAddnewcompany}
            style={{
              width: "150px",
              height: "45px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "700",
              justifyContent: "center",
            }}
          >
            <IoIosAddCircleOutline style={{ fontSize: "17px" }} />
            Add New Company
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
              <h1>Company List</h1>
            </div>
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
          <CompanyTable
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
            menuItems={menuItems}
            onMenuItemClick={handleMenuItemClick}
          />
          <Previous_Next />
        </div>
      </section>
      <Modal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        menuItems={menuItems}
        onMenuItemClick={handleMenuItemClick}
      />
    </div>
  );
};

export default CompanyList;
