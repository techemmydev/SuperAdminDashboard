import React from "react";

const Userpicture = () => {
  return (
    <div>
      <div
        style={{
          width: "43px",
          height: "42px",
          borderRadius: "300px",
          backgroundColor: "orangered",
          backgroundImage: `url(${"/AttendanceEshImage/faith.svg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Userpicture;
