import React from "react";
import style from "../COMPANY_EDIT_STAFF/Editcomp.module.css";
import Button from "../../SuperAdminComponent/Buttoncomponent/Button";
import { CgAsterisk } from "react-icons/cg";
import {
  EditArrayCompany,
  EditArrayCompany2,
  EditArrayCompany3,
} from "./EditArrayInfo";

const EditCompany = () => {
  return (
    <React.Fragment>
      <section>
        <div className={`${style.flexheading} `}>
          <h1 className={`${style.addnewh1} `}>Edit</h1>
          <h1 className={`${style.addnewh1} `}>Company List / Edit</h1>
        </div>

        <div className={`${style.addnewContainer1} `}>
          <div className={`${style.addnewContainer} `}>
            <div className={`${style.titleHeading} `}>
              <h1>Basic Details</h1>
            </div>
            <div className={`${style.info_Container} `}>
              {EditArrayCompany.map((item, index) => {
                // corrected variable name
                return (
                  <div className={`${style.addnew} `} key={index}>
                    <div>
                      <div>
                        <label
                          htmlFor={item.id}
                          className={`${style.labelfont} `}
                        >
                          {item.lable}
                          <CgAsterisk style={{ color: "FF6060" }} />
                        </label>
                      </div>
                      <div>
                        {item.lable === "Company Type " ? (
                          <select
                            key={index}
                            style={{
                              width: "320px",
                              height: "45px",
                              marginBottom: "20px",
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">
                              {item.placeholdertiltle}
                            </option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            id={item.id}
                            placeholder={item.placeholdertiltle}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${style.titleHeading} `}>
              <h1>Admin Details</h1>
            </div>
            <div className={`${style.info_Container} `}>
              {EditArrayCompany2.map((item, index) => {
                // corrected variable name
                return (
                  <div className={`${style.addnew} `} key={index}>
                    <div>
                      <div>
                        <label
                          htmlFor={item.id}
                          className={`${style.labelfont} `}
                        >
                          {item.lable}
                          <CgAsterisk style={{ color: "FF6060" }} />
                        </label>
                      </div>
                      <div>
                        {!item.lable === "Company Type " ? (
                          <select
                            key={index}
                            style={{
                              width: "320px",
                              height: "45px",
                              marginBottom: "20px",
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            id={item.id}
                            placeholder={item.placeholdertiltle}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${style.titleHeading} `}>
              <h1>Address</h1>
            </div>
            <div className={`${style.info_Container} `}>
              {EditArrayCompany3.map((item, index) => {
                // corrected variable name
                return (
                  <div className={`${style.addnew} `} key={index}>
                    <div>
                      <div>
                        <label
                          htmlFor={item.id}
                          className={`${style.labelfont} `}
                        >
                          {item.lable}
                          <CgAsterisk style={{ color: "FF6060" }} />
                        </label>
                      </div>
                      <div>
                        {!item.lable === "Company Type " ? (
                          <select
                            key={index}
                            style={{
                              width: "320px",
                              height: "45px",
                              marginBottom: "20px",
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            id={item.id}
                            placeholder={item.placeholdertiltle}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className={`${style.titleHeading} `}>
              <h1>Address</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div className={`${style.addnew} `}>
                <div>
                  <label htmlFor="" className={`${style.labelfont} `}>
                    Address <CgAsterisk style={{ color: "FF6060" }} />
                  </label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className={`${style.addnew} `}>
                <div>
                  <label htmlFor="" className={`${style.labelfont} `}>
                    City <CgAsterisk style={{ color: "FF6060" }} />
                  </label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div> */}
            <div>
              <Button
                style={{
                  width: "210px",
                  heigth: "50px",

                  backgroundColor: " #FF8500",
                  // marginTop: "1rem",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                  marginBottom: "10px",
                  fontSize: "15px",
                  fontWeight: "700",
                  // lineHeight: "24px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditCompany;
