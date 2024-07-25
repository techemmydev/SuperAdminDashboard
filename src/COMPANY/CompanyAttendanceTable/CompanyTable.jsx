import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import style from "../CompanyAttendanceTable/CompanyStlyeTable.module.css";
import { CompanyTableview } from "./ComapnyData";

const CompanyTable = ({ toggleModal }) => {
  return (
    <div>
      <section className={`${style.table_Flex}`}>
        {CompanyTableview.map((items, index) => (
          <table className={`${style.table_styling}`} key={index}>
            <thead>
              <tr>
                <th className={`${style.tableheading}`}>
                  {items.tableHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.tablesbody.map((tablesbody, index) => (
                <tr key={index} className={`${style.trr}`}>
                  {items.tableHeading === "Action" && tablesbody.deleteIcon ? (
                    <td className={`${style.hide}`}>
                      <HiOutlineDotsVertical
                        onClick={toggleModal}
                        className={`${style.table_deleteicon}`}
                      />
                    </td>
                  ) : items.tableHeading === "Status" ? (
                    <td className={`${style.tabledata} `}>
                      <button
                        className={`${style.checkInButton} ${
                          index % 2 === 0 ? style.evenButton : style.oddButton
                        }`}
                        // onClick={() =>
                        //   handleCheckIn(
                        //     AttendanceTableview[0].tablesbody[index].tableData
                        //   )
                        // }
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
              ))}
            </tbody>
          </table>
        ))}
      </section>
    </div>
  );
};

export default CompanyTable;
