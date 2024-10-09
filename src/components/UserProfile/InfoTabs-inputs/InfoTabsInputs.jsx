"use client";
import { Autocomplete, Chip, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const InfoTabsInputs = ({
  field,
  isEditActive,
  inputData,
  inputChangeHandler,
}) => {
  const [label, value] = [field[0], field[1] ? field[1] : ""];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('ddd');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevOptions) => [...prevOptions, value]);
    setInputValue('');
  };

  const handleDelete = (option) => {
    setSelectedOptions((prevOptions) => prevOptions.filter((o) => o !== option));
  };
  // console.log('inputData',typeof(inputData.tel))
  let input;
  switch (label) {
    case "email":
      input = (
        <TextField
          type="email"
          variant="outlined"
          className="h-1s"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={label}
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
          className="h-1s"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={label}
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
          className="h-1s"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={label}
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
          className="h-1s"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={label}
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
          className="h-1s"
          size="small"
          margin="dense"
          name={label}
          disabled={!isEditActive}
          id={label}
          label={label}
          onChange={inputChangeHandler}
          value={value}
        />
      );
      break;
      case "fields":
        input = (
          <Autocomplete
          multiple
          options={options}
          value={selectedOptions}
          onChange={handleSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select multiple options"
              placeholder="Choose..."
            />
          )}
        />
        );
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
      {/* <TextField
        type="text"
        variant="outlined"
        className="h-1s"
        size="small"
        margin="dense"
        name={label}
        disabled={!isEditActive}
        id={label}
        label={label}
        onChange={inputChangeHandler}
        value={value}
      /> */}
      {input}
    </div>
  );
};

export default InfoTabsInputs;

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];