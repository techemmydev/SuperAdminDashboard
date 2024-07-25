import React, { useState } from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwo,
  PiNumberCircleThreeLight,
} from "react-icons/pi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import styles from "../AddRole/Addnewrole.module.css";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import Todolist from "../../UserMangementFolder/Permission/TodoListPermission";
import BasicInfoNavigate from "./StepNavigation/BasicInfo/BasicInfoNavigate";
import PermissionNavigate from "./StepNavigation/SetpermissionNavigate/PermissionNavigate";

import ReviewDetails from "./StepNavigation/REVIEWdETAILS/ReviewDetails";

const steps = [
  { id: 1, label: "Basic Info", myicons: <PiNumberCircleOneLight /> },
  { id: 2, label: "Set Permissions", myicons: <PiNumberCircleTwo /> },
  { id: 3, label: "Review Details", myicons: <PiNumberCircleThreeLight /> },
];

const AddNewRole = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  // const handleBack = () => {
  //   setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  // };

  return (
    <React.Fragment>
      <section>
        <div className={styles.flexheading}>
          <h1 className={styles.addnewh1}>Assign New Role</h1>
          <h2 className={styles.addnewh2}>Staff / Assign new role</h2>
        </div>
        <div className={styles.flexheading}>
          <div className={styles.stepNavigation}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <span
                  className={
                    currentStep > step.id
                      ? styles.icon
                      : currentStep === step.id
                      ? styles.activeIcon
                      : styles.icon
                  }
                >
                  {currentStep > step.id ||
                  (currentStep === step.id && step.id !== 2) ? (
                    <IoCheckmarkCircleSharp />
                  ) : (
                    step.myicons
                  )}
                </span>
                <span
                  className={
                    currentStep === step.id ? styles.activeLabel : styles.label
                  }
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div>
            {currentStep === 1 && <BasicInfoNavigate />}
            {currentStep === 2 && <PermissionNavigate />}
            {currentStep === 3 && <ReviewDetails />}
          </div>
        </div>

        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleBack} disabled={currentStep === 1}>
            Back
            </button>
          </div> */}

        {currentStep !== 3 && <Todolist title={" Assign this role"} />}

        <div className={styles.buttonFlex}>
          <Button
            style={{
              width: "116px",
              height: "50px",
              border: "1px solid #FF8500",
              backgroundColor: "white",
              color: "#0A0F29",
              fontFamily: "Plus Jakarta Sans",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Cancel
          </Button>

          <Button
            next={handleNext}
            style={{
              width: "116px",
              height: "50px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            {currentStep === 3 ? "Create" : "Continue"}
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddNewRole;
