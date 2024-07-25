import React from "react";
import style from "../REVIEWdETAILS/review.module.css";

import ReviewToggling from "../REVIEWdETAILS/AllroleToggle/ReviewToggling";

import Rrrr from "./ReviewP/Rrrr";
import Userpicture from "../../../../SuperAdminComponent/UserPicture/Userpicture";

// import { Outlet } from "react-router-dom";
const ReviewDetails = () => {
  return (
    <div>
      <div className={style.imgaecontainer}>
        <h1>Review Details</h1>
        <div className={`${style.staffSwitch}`}>
          <Userpicture />
          <div>
            <h2>Faith Peace</h2>
            <p>Owner (Super Admin)</p>
          </div>
        </div>
      </div>
      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <Rrrr />

          <div>
            <ReviewToggling />
          </div>
        </div>
      </section>

      {/* <Outlet /> */}
    </div>
  );
};

export default ReviewDetails;
