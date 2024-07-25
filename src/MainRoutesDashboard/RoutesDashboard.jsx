import React from "react";
import Navbar from "../SuperAdminComponent/Navbar/Navbar";
import SidebarDash from "../SuperAdminComponent/SidebarDashboard/SidebarDash";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashbord/Dashboard";
import Company from "../COMPANY/Company";
import EditCompany from "../COMPANY/COMPANY_EDIT_STAFF/EditCompany";

import Staff from "../STAFF/Staff";
import NewEditstaff from "../STAFF/EDITSTAFF/NewEditstaff";
import StaffNewDetails from "../STAFF/ADDNEWSTAFF/StaffNewDetails";
import View_staff from "../STAFF/Viewed_Staff/View_staff";
import SettingInput from "../SettingsFolder/SettingInput";
import CompanySub from "../COMPANY/companySubscription/CompanySub";
import StaffPermission from "../UserMangementFolder/UserPermissionAllStaff/StaffPermission";
import AllRoleDetails from "../UserMangementFolder/AllRoles/AllRoleDetails";
// import StaffComponent from "../UserMangementFolder/Permission/StaffComponent";
// import SelectedStaff from "../UserMangementFolder/Permission/SelectedStaff";

import AddNewRole from "../STAFF/AddRole/AddNewRole";
import AttendanceManage from "../UserMangementFolder/AttendanceMgt/AttendanceManage";
import Settings from "../SettingsFolder/Settings";

const RoutesDashboard = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SidebarDash />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "  #fafcff",
        }}
      >
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/company" element={<Company />} />

            <Route path="/editstaff" element={<EditCompany />} />

            <Route path="/staff" element={<Staff />} />
            <Route
              path="/User Management/Allroles/Details"
              element={<AllRoleDetails />}
            />
            <Route path="/addnewstaff" element={<StaffNewDetails />} />
            <Route path="/EditNewstaff" element={<NewEditstaff />} />
            <Route path="/view" element={<View_staff />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subscription" element={<CompanySub />} />
            <Route path="/role" element={<AddNewRole />} />
            <Route path="/NewRole" element={<AddNewRole />} />
            <Route path="/User_Management" element={<AttendanceManage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RoutesDashboard;
