import { inputLabel, names } from "@/dictionaries/fields-name";
import { Autocomplete, Checkbox, Chip, TextField } from "@mui/material";
import React, { useState } from "react";

const Fields = ({ isEditActive, setInputData, label, value }) => {
  const [selectedOptions, setSelectedOptions] = useState((value || []).map(v => ({value:v.value,label:v.label})));
  const handleSelect = (e, newValue) => {
    setSelectedOptions(newValue);
    setInputData((prev) => ({ ...prev, fields: newValue }));
  };
  console.log('value',value)
  console.log('selectedOptions',selectedOptions)
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={names}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      disabled={!isEditActive}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={handleSelect}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...rest } = getTagProps({ index });
          return (
            <Chip
              key={key}
              variant="outlined"
              label={option.label}
              sx={{
                backgroundColor: "#5eead4",
                "& .MuiChip-deleteIcon": { color: "#ed2100" },
                "&:hover .MuiChip-deleteIcon": { color: "#cd1c18" },
              }}
              {...rest}
            />
          );
        })
      }
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.label}
          </li>
        );
      }}
      style={{ width: "100%" }}
      renderInput={(params) => {
        return <TextField {...params} size="small" label={inputLabel[label]} />;
      }}
    />
  );
};

export default Fields;
