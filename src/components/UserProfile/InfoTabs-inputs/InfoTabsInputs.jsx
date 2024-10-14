"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Fields from "../inputs/Fields";
import { inputLabel } from "@/dictionaries/fields-name";
const InfoTabsInputs = ({
  field,
  isEditActive,
  inputData,
  setInputData,
  inputChangeHandler,
  isNatCodeValid,
  isTelValid,
}) => {
  const [label, value] = [field[0], field[1] ? field[1] : ""];
  console.log("isNatCodeValid", isNatCodeValid);
  let input;
  switch (label) {
    case "email":
      input = (
        <TextField
          type="email"
          variant="outlined"
          className="w-full"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={inputLabel[label]}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
    case "username":
      input = (
        <TextField
          type="text"
          variant="outlined"
          className="h-1s w-full"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={inputLabel[label]}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
    case "tel":
      input = (
        <TextField
          type="text"
          variant="outlined"
          className="h-1s w-full"
          size="small"
          margin="dense"
          name={label}
          required
          disabled={!isEditActive}
          placeholder="0-"
          id={label}
          error={!!isTelValid}
          helperText={isTelValid}
          label={inputLabel[label]}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
    case "natcode":
      input = (
        <TextField
          type="text"
          variant="outlined"
          className="h-1s w-full"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          required
          id={label}
          error={!!isNatCodeValid}
          helperText={isNatCodeValid}
          label={inputLabel[label]}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
    case "isadmin":
      input = (
        <TextField
          type="text"
          variant="outlined"
          className="h-1s w-full"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={inputLabel[label]}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
    case "fields":
      input = <Fields {...{ isEditActive, setInputData, label, value }} />;
      break;
    default:
      break;
  }
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-teal-600 hover:text-teal-800 transition-all duration-100 ease-linear"
      >
        {label}
      </label>
      {input}
    </div>
  );
};

export default InfoTabsInputs;
