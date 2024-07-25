import React from "react";
import style from "./attenTable.module.css";
import { StaffDataArray } from "./StaffArrayInfo";
import { HiOutlineDotsVertical } from "react-icons/hi";

// import { FaEdit } from "react-icons/fa";
// import { IoMdEye } from "react-icons/io";
// import { TbUserPlus } from "react-icons/tb";
// import { FaRegTrashCan } from "react-icons/fa6";

const StaffData = ({ toggleModal }) => {
  return (
    <div>
      <section className={`${style.table_Flex}`}>
        {StaffDataArray.map((items, index) => {
          return (
            <table className={`${style.table_styling}`} key={index}>
              <thead>
                <tr>
                  <th className={`${style.tableheading}`}>
                    {items.tableHeading}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.tablesbody.map((tablesbody, index) => {
                  return (
                    <tr key={index} className={`${style.trr}`}>
                      {items.tableHeading === "Action" &&
                      tablesbody.deleteIcon ? (
                        <td>
                          <HiOutlineDotsVertical
                            onClick={toggleModal}
                            className={`${style.table_deleteicon}`}
                          />
                        </td>
                      ) : items.tableHeading === "Status" ? (
                        <td className={`${style.tabledata} `}>
                          <button
                            className={`${style.checkInButton} ${
                              index % 2 === 0
                                ? style.evenButton
                                : style.oddButton
                            }`}
                            onClick={() =>
                              handleCheckIn(
                                AttendanceTableview[0].tablesbody[index]
                                  .tableData
                              )
                            }
                          >
                            {tablesbody.tableDatabutton}
                          </button>
                        </td>
                      ) : (
                        <td className={`${style.tabledata}`}>
                          {tablesbody.tableDatabutton
                            ? tablesbody.tableDatabutton
                            : tablesbody.tableData}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </section>
    </div>
  );
};

export default StaffData;
