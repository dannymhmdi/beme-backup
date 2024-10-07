"use client";
import { TextField } from "@mui/material";
import React from "react";

const InfoTabsInputs = ({ field, isEditActive, setIsEditActive }) => {
  const [label, value] = [field[0], field[1]];
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-teal-600 hover:text-teal-800 transition-all duration-100 ease-linear"
      >
        {label}
      </label>
      <TextField
        type="text"
        variant="outlined"
        className="h-1s"
        size="small"
        margin="dense"
        name={label}
        disabled={isEditActive}
        id={label}
        // label={label}
        value={value}
      />
    </div>
  );
};

export default InfoTabsInputs;
