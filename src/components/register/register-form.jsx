import React from "react";
import { BasePage } from "../base-page";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const RegisterForm = () => {
  return (
    <BasePage fixed={true}>
      <Card sx={{ padding: 5 ,minHeight:'80vh'}} className="my-5">
        <div className="w-full text-center">
          <h1 className="text-4xl">
            به <span className="text-teal-400">BeMe</span> خوش آمدید
          </h1>
        </div>
        <div className="w-full text-center py-5">
          <h4 className="text-2xl">
            برای ثبت نام لطفا شماره تلفن خود را وارد کنید
          </h4>
        </div>
        <div className="w-full text-center">
          <form action="">
            <TextField
              id="outlined-basic"
              required
              size="small"
              label="شماره تلفن"
              variant="outlined"
              className="w-full sm:w-6/12  lg:w-4/12"
            />
          </form>
        </div>
        {/* <FormGroup className="my-5">
          <div className="w-full text-center mr-0">
            <FormControlLabel
              required
              control={<Checkbox />}
              className="w-8/12 mr-0"
              label="شرایط و قوانین BeMe را میذیرم"
            />
          </div>
        </FormGroup> */}
      </Card>
    </BasePage>
  );
};

export default RegisterForm;
