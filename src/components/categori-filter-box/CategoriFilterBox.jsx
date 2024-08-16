import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import { names } from "@/dictionaries/fields-name";
const CategoriFilterBox = ({sendFilteredRequestHandler ,setShowDateBox , fields ,setFields,setFilterApply,setCurrentPage,setIsLoading}) => {
  // const [fields,setFields] = useState([])
 
  const fieldsChangeHnadler = (e) => {
    const field = e.target.value;
    if (e.target.checked) {
      setFields((prevFields) => [...prevFields, field]);
    } else {
      setFields((prevFields) => prevFields.filter((f) => f !== field));
    }
  }
  return (
    <>
      <div className="w-full text-dark overflow-x-hidden">
        {names.map((cat, index) => {
          return (
            <FormGroup key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                  value={cat.value}
                    sx={{
                      "&.Mui-checked": {
                        color: '#14b8a6',
                      },
                    }}
                    onChange={(e) => fieldsChangeHnadler(e)}
                  />
                }
                label={cat.label}
              />
            </FormGroup>
          );
        })}
      </div>
  <div className="flex flex-row flex-wrap justify-between">
  <Button
              variant="text"
              sx={{ color: "#14b8a6" }}
              size="large"
              className="p-2"
              onClick={() => {
                setFilterApply(prev => !prev)
                setCurrentPage(1)
                setShowDateBox(false)
                setIsLoading(true)
                console.log('fileds',fields)
              }}
            >
              {" "}
              اعمال
            </Button>
            <Button
              variant="text"
              sx={{ color: "#14b8a6" }}
              size="large"
              className="p-2"
              onClick={() => setShowDateBox(false)}
            >
              {" "}
              لغو
            </Button>
  </div>
    </>
  );
};

export default CategoriFilterBox;
