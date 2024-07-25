import React from "react";
import style from "../companySubscription/ComapnysubStyle.module.css";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import SwitchButton from "./SwitchButton/SwitchButton";
import CompanySubtableData from "./CompanySubcriptiontable/CompanySubtableData";

const CompanySub = () => {
  return (
    <React.Fragment>
      <div className={style.GenerateCode_container_h1}>
        <h1>Company Subscription</h1>
        <p>Dashboard / Subscription</p>
      </div>
      <section className={`${style.sectionbox1}`}>
        <div className={`${style.sectionbox}`}>
          <div className={`${style.changeplanbox}`}>
            <div>
              <h2>Current Subscription</h2>
              <p>Details about your current subscription</p>
            </div>
            <div>
              <Button
                style={{
                  width: "97px",
                  height: "24px",
                  backgroundColor: "#1890FF",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              >
                Change Plan
              </Button>
            </div>
          </div>
          <div className={`${style.basicplans}`}>
            <div>
              <h2>Basic Plan</h2>
            </div>
            <div className={`${style.autorenew}`}>
              <SwitchButton />
              <span>Auto Renewal</span>
            </div>
          </div>
          <div className={`${style.wifi}`}>
            <div className={`${style.autorenewWifi}`}>
              <img src="AttendanceEshImage/wifi.png" alt="" />
              <p>
                Limited access to Student Information, no API required, no
                customization option
              </p>
            </div>
            <div>
              <Button
                style={{
                  width: "54px",
                  height: "24px",
                  backgroundColor: "#23BD33",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              >
                Renew
              </Button>
            </div>
          </div>
          <CompanySubtableData />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CompanySub;
