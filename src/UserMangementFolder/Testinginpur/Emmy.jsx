// src/components/SearchFilterBar.jsx
import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import {
  FilterList as FilterListIcon,
  ViewList as ViewListIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "5px",
  backgroundColor: "#fff",
});

const StyledTextField = styled(TextField)({
  marginRight: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& input": {
    padding: "10px",
  },
});

const Emmy = () => {
  return (
    <StyledBox>
      <StyledTextField
        placeholder="Search"
        variant="outlined"
        InputProps={{ "aria-label": "search" }}
      />
      <IconButton aria-label="filter">
        <FilterListIcon />
        <span style={{ marginLeft: "5px" }}>Filter</span>
      </IconButton>
      <IconButton aria-label="list view">
        <ViewListIcon />
      </IconButton>
      <IconButton aria-label="grid view">
        <AppsIcon />
      </IconButton>
    </StyledBox>
  );
};

export default Emmy;
