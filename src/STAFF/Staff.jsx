import React, { useState } from "react";
import StaffList from "../STAFF/StaffList";
import StaffNewDetails from "../STAFF/ADDNEWSTAFF/StaffNewDetails";
import NewEditstaff from "./EDITSTAFF/NewEditstaff";

import View_staff from "./Viewed_Staff/View_staff";
import AddNewRole from "./AddRole/AddNewRole";

const Staff = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleMenuItemClick = (action) => {
    if (action === "edit") {
      setCurrentStep(2); // Navigate to the EditCompany step
    }
    if (action === "viewProfile") {
      setCurrentStep(3); // Navigate to the EditCompany step
    }
    if (action === "assign role") {
      setCurrentStep(4); // Navigate to the EditCompany step
    }
    // Handle other actions as needed
  };
  return (
    <div>
      <div>
        {currentStep === 0 && (
          <StaffList
            selectedindexAddnewcompany={() => setCurrentStep(1)}
            onMenuItemClick={handleMenuItemClick} // Pass the function down
          />
        )}
        {currentStep === 1 && (
          <StaffNewDetails
            selectedIndex={() => setCurrentStep(1)}
            back={() => setCurrentStep(0)}
          />
        )}
        {currentStep === 2 && <NewEditstaff back={() => setCurrentStep(0)} />}
        {currentStep === 3 && <View_staff back={() => setCurrentStep(3)} />}
        {currentStep === 4 && <AddNewRole back={() => setCurrentStep(4)} />}
      </div>
    </div>
  );
};

export default Staff;
