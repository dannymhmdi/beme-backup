"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { fromJSON } from "postcss";
import Error from "next/error";

export const RegistorDialog = ({ openDialog, setOpenDialog }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log("formData", formData);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [passRegex, telRegex] = [
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    /^[1-9]\d{9}$/,
  ];

  const handleClose = () => {
    setOpenDialog(false);
  };

  const sendRequest = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      console.log("json", json);
      handleClose();
    } catch (error) {
      console.clear("faild to send register form data");
      throw new Error("faild to send register form data");
    }
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        maxWidth={"xs"}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     if (telRegex.test(formJson.username) && passRegex.test(formJson.password)) {
        //         sendRequest(formJson)
        //     }
        //     else{

        //     }
        //     console.log("formJson", formJson);
        //   },
        // }}
      >
        <DialogTitle>ثبت نام</DialogTitle>
        <form action="" method="POST" onSubmit={sendRequest}>
        <DialogContent>
          <DialogContentText className="text-justify">
            برای ثبت نام در سایت لطفا شماره تلفن همراه خود را وارد کرده و یک
            پسورد مناسب انتخاب کنید
          </DialogContentText>
          
            <TextField
              dir="ltr"
              autoFocus
              required
              margin="dense"
              id="tel"
              name="username"
              error={
                telRegex.test(formData.username)
                  ? false
                  : formData.username.length
                  ? true
                  : false
              }
              placeholder="0-"
              helperText={
                formData.username.length > 0 &&
                !telRegex.test(formData.username)
                  ? "شماره تلفن را درست وارد کنید"
                  : ""
              }
              label="شماره تلفن همراه"
              type="text"
              size="small"
              onChange={onChangeHandler}
              value={formData.username}
              fullWidth
              variant="outlined"
              inputProps={{
                maxLength: 10,
              }}
            />
            <TextField
              label={"رمز عبور"}
              type={showPassword ? "text" : "password"}
              variant="outlined"
              name="password"
              fullWidth
              value={formData.password}
              onChange={onChangeHandler}
              helperText={
                formData.password.length > 0 &&
                !passRegex.test(formData.password)
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
   
        </DialogContent>
        <DialogActions className="px-4">
          <Button
            onClick={handleClose}
            type="button"
            variant="contained"
            sx={{
              marginLeft: "8px",
              color: "#fff",
              backgroundColor: "#2dd4bf",
              "&:hover": { backgroundColor: "#0d9488" },
            }}
          >
            بستن
          </Button>
          <Button
            type="submit"
            variant="contained"
            endIcon={<AppRegistrationIcon sx={{ marginRight: "8px" }} />}
            disabled={
              !(
                formData.username.length > 0 &&
                telRegex.test(formData.username) &&
                formData.password.length > 0 &&
                passRegex.test(formData.password)
              )
            }
            sx={{
              color: "#fff",
              backgroundColor: "#2dd4bf",
              "&:hover": { backgroundColor: "#0d9488" },
            }}
          >
            ثبت نام
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default RegistorDialog;
