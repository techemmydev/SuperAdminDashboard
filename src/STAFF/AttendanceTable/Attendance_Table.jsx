import React from "react";
import style from "./attenTable.module.css";
import { AttendanceTableview } from "./AttendanceData";
import { BiTrash } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";

const Attendance_Table = () => {
  const handleCheckIn = (staffId) => {
    console.log(`Checked in staff with ID: ${staffId}`);
  };

  return (
    <div>
      <section className={`${style.table_Flex}`}>
        {AttendanceTableview.map((items, index) => {
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
                          <IoEyeOutline
                            className={`${style.table_deleteicon}`}
                            style={{ color: "black", marginRight: "10px" }}
                          />
                          <BiTrash className={`${style.table_deleteicon}`} />
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

export default Attendance_Table;
