import React, { useState } from "react";
import CompanyList from "../COMPANY/CompanyList";
import AddNewCompany from "../COMPANY/ADDNEW_COMPANY/AddNewCompany";
import EditCompany from "./COMPANY_EDIT_STAFF/EditCompany";
import CompanySub from "./companySubscription/CompanySub";

const Company = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleMenuItemClick = (action) => {
    if (action === "edit") {
      setCurrentStep(2); // Navigate to the EditCompany step
    }
    if (action === "subscription") {
      setCurrentStep(3); // Navigate to the EditCompany step
    }
    // Handle other actions as needed
  };

  return (
    <div>
      {currentStep === 0 && (
        <CompanyList
          selectedindexAddnewcompany={() => setCurrentStep(1)}
          onMenuItemClick={handleMenuItemClick} // Pass the function down
        />
      )}
      {currentStep === 1 && (
        <AddNewCompany
          selectedIndex={() => setCurrentStep(1)}
          back={() => setCurrentStep(0)}
        />
      )}
      {currentStep === 2 && <EditCompany back={() => setCurrentStep(0)} />}
      {currentStep === 3 && <CompanySub back={() => setCurrentStep(3)} />}
    </div>
  );
};

export default Company;
