import React from "react";
import style from "../SearchInput/search.module.css";
import { CiSearch } from "react-icons/ci";
const SearchInput = ({ type, value, onChange, placeholder }) => {
  return (
    <div className={style.serchInput}>
      <form action="">
        <div className={style.serchbox}>
          <CiSearch className={style.CiSearch} />

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
