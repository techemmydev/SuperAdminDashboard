import React from "react";
import { NavlinkSidebar } from "./NavbarLink";
import navStyles from "../SidebarDashboard/sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../LOGO/Logo";
const SidebarDash = () => {
  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(route) {
    return location.pathname === route;
  }
  return (
    <div>
      <Logo />
      <div className={navStyles.navigationLink}>
        <nav className={navStyles.Linkss}>
          <ul>
            {NavlinkSidebar.map((route, index) => (
              <Link
                to={route.path}
                key={index}
                style={{
                  color: isActive(route.path) ? "  #FF8500" : "#0A0F29",
                  fontWeight: isActive(route.path) ? "400" : "700",
                  textDecoration: isActive(route.path) ? "none" : "none",
                }}
              >
                <li
                  style={{
                    backgroundColor: isActive(route.path) ? " #FFC280" : "",
                    padding: isActive(route.path) ? "10px" : "",
                  }}
                >
                  <img src={route.icons} alt="" /> {route.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDash;
