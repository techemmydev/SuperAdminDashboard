import React from "react";
import style from "../Staff_Modal/Staffmodal.module.css";

const StaffModel = ({ isVisible, toggleModal, menuItems, onMenuItemClick }) => {
  if (!isVisible) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <ul className={style.modalList}>
          {menuItems.map((item, index) => (
            <li key={index} className={style.modalItem}>
              <span
                className={style.modalLink}
                onClick={() => onMenuItemClick(item.action)}
              >
                <span className={style.modalIcon}>{item.icon}</span>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        <button className={style.closeButton} onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StaffModel;
