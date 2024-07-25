import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const SwitchButton = () => {
  return (
    <div>
      <Switch
        {...label}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#FF8500",
            "&:hover": {
              backgroundColor: "rgba(255, 133, 0, 0.08)",
            },
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#FF8500",
          },
        }}
      />
    </div>
  );
};
export default SwitchButton;
