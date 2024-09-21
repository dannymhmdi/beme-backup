"use client";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle } from "@mui/icons-material";
import { Alert, AlertTitle, Button, List, ListItem } from "@mui/material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const passConditions = [
    "پسورد باید حداقل یک حرف بزرگ انگلیسی",
    "شامل حداقل 8 کاراکتر",
    "حداقل یک کاراکتر خاص باشد(@,&,..)",
  ];

  const onChangeHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [passRegex, telRegex] = [
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    /^[1-9]\d{9}$/,
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      // next: { revalidate: 3600 },
    });
  };

  return (
    <div
      className="lg:w-3/12 sm:w-5/12 w-10/12 flex flex-col flex-wrap items-center sm:px-4 px-2 py-6 bg-teal-50s shadow-2xl rounded-md bg-white"
        // style={{ backgroundColor: "rgba(20, 20, 20, 0.62)" }}
    >
      <h1 className="font-bold text-lg text-white">ورود</h1>
      <form action="" method="POST" onSubmit={submitHandler}>
        <div>
          <TextField
            label={"شماره تلفن "}
            type={"text"}
            size="small"
            variant="filled"
            name="username"
            placeholder="0-"
            helperText={
              formData.username.length > 0 && !telRegex.test(formData.username)
                ? "شماره تلفن را درست وارد کنید"
                : ""
            }
            error={
              telRegex.test(formData.username)
                ? false
                : formData.username.length
                ? true
                : false
            }
            onChange={onChangeHandler}
            required
            value={formData.username}
            margin="dense"
            sx={{
              direction: "ltr",
              backgroundColor: "#fff",
              borderRadius: "8px",
              maxWidth: "260px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 10, 
            }}
          />
        </div>
        <div>
          <TextField
            label={"رمز عبور"}
            type={showPassword ? "text" : "password"}
            variant="filled"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            helperText={
              formData.password.length > 0 && !passRegex.test(formData.password)
                ? "پسورد اشتباه است"
                : ""
            }
            error={
              passRegex.test(formData.password)
                ? false
                : formData.password.length
                ? true
                : false
            }
            required
            margin="dense"
            size="small"
            sx={{
              direction: "ltr",
              backgroundColor: "#fff",
              borderRadius: "8px",
              maxWidth: "260px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="mt-2 border">
          <Button
            variant="contained"
            type="submit"
            size="medium"
            color="success"
            sx={{ maxWidth: "260px" }}
            className="w-full"
            disabled={
              !(
                formData.username.length > 0 &&
                telRegex.test(formData.username) &&
                formData.password.length > 0 &&
                passRegex.test(formData.password)
              )
            }
          >
            ورود
          </Button>
        </div>
      </form>
      {passRegex.test(formData.password) ? null : formData.password.length ? (
        <Alert
          severity="warning"
          className="mt-4 px-0"
          sx={{ "& .MuiList-root": { direction: "rtl" } }}
        >
          <AlertTitle
            //  sx={{ direction: "rtl" }}
            className="px-4s"
          >
            توجه
          </AlertTitle>
          <List>
            {passConditions.map((condition, index) => (
              <ListItem key={index}>{condition}</ListItem>
            ))}
          </List>
        </Alert>
      ) : null}
    </div>
  );
}

