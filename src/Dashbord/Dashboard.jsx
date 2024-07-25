import React from "react";
import style from "../Dashbord/dashboard.module.css";
import { dashboardcontent } from "./dashcontent";
import Pie from "./TViewData/PieChart/Pie";
import Chartimage from "./TViewData/TableImageData/Chartimage";
import Donony from "./TViewData/DonutChart/Donony";
import RecentActivities from "./TViewData/TimelineBars/RecentActivities";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className={style.welcomejohn}>
        <h1>Welcome faith</h1>
        <p>Home</p>
      </div>
      <section className={style.container}>
        <div className={`${style.dashboard_container1}`}>
          {dashboardcontent.map((items, index) => {
            return (
              <div className={`${style.dashboard_container} `} key={index}>
                <div>
                  <h1 className={`${style.dashboard_containerh1} `}>
                    {items.heading}
                    {index === 0 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                    {index === 1 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                  </h1>
                  <p className={`${style.dashboard_containerPara}`}>
                    {items.amount}{" "}
                    {index === 2 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div>
                  <img src={items.icons} alt="icons" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <aside className={`${style.dashboard_chart_container}`}>
        <Donony />

        <Chartimage />
        <RecentActivities />
        <Pie />
      </aside>
    </React.Fragment>
  );
};

export default Dashboard;
