import React from "react";
import { CgAsterisk } from "react-icons/cg";
import { newRoleInputArray } from "./NewRole";
import style from "../BasicInfo/Basic.module.css";
const BasicInfoNavigate = () => {
  return (
    <div>
      <div className={`${style.addnewContainer1}`}>
        <div className={`${style.addnewContainer}`}>
          <div className={`${style.titleHeading}`}>
            <h1>Basic Details</h1>
          </div>
          <div className={`${style.info_Container}`}>
            {newRoleInputArray.map((item) => (
              <div className={`${style.addnew}`} key={item.id}>
                <div>
                  <label htmlFor={item.id} className={`${style.labelfont}`}>
                    {item.label}
                    <CgAsterisk style={{ color: "#FF6060" }} />
                  </label>
                </div>
                <div>
                  {item.type === "select" ? (
                    <select
                      id={item.id}
                      style={{
                        width: "320px",
                        height: "45px",
                        marginBottom: "20px",
                      }}
                    >
                      {item.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : item.type === "textarea" ? (
                    <textarea
                      id={item.id}
                      placeholder={item.placeholderTitle}
                      style={{
                        width: "320px",
                        height: "100px",
                        marginBottom: "20px",
                        resize: "none",
                        outlineColor: "floralwhite",
                      }}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      id={item.id}
                      placeholder={item.placeholderTitle}
                      style={{
                        width: "320px",
                        height: "45px",
                        marginBottom: "20px",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoNavigate;
