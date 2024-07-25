import React from "react";
import style from "../TableImageData/chart.module.css";
import { chart } from "./ch";

import { Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Chartimage = () => {
  const handleCheckIn = (data) => {
    console.log(`Checking in: ${data}`);
  };

  return (
    <div className={`${style.flxsbac}`}>
      <div className={`${style.flxs}`}>
        <div>
          <h1>Top Company</h1>
        </div>
        <HiOutlineDotsVertical />
      </div>
      <section className={`${style.table_Flex}`}>
        {chart.map((items, index) => (
          <table className={`${style.table_styling}`} key={index}>
            <thead>
              <tr>
                <th className={`${style.tableheading}`}>
                  {items.tableHeading === "Checkbox" ? (
                    <input type="checkbox" className={`${style.checkbox}`} />
                  ) : (
                    items.tableHeading
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.tablesbody.map((tablesbody, tableIndex) => (
                <tr key={tableIndex} className={`${style.trr}`}>
                  {items.tableHeading === "Admin" ? (
                    <td className={`${style.tabledata}`}>
                      <img
                        src={tablesbody.imageUrl}
                        alt={tablesbody.tableData}
                        className={`${style.image}`}
                      />
                      {tablesbody.tableData}
                    </td>
                  ) : items.tableHeading === "Status" ? (
                    <td className={`${style.tabledata} `}>
                      <button
                        className={`${style.checkInButton} ${
                          tableIndex % 2 === 0
                            ? style.evenButton
                            : style.oddButton
                        }`}
                        onClick={() =>
                          handleCheckIn(tablesbody.tableDatabutton)
                        }
                      >
                        {tablesbody.tableDatabutton}
                      </button>
                    </td>
                  ) : items.tableHeading === "ID" ? (
                    <td className={`${style.tabledata}`}>
                      <input type="checkbox" className={`${style.checkbox}`} />
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

export default Chartimage;
