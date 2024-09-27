import React from "react";
import { BasePage } from "../base-page";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import styles from "./registerStyle.module.css";
import ToastAlert from "../snackbar/ToastAlert";
const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [alert, setAlert] = React.useState({ status: false, message: "" });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [passRegex, telRegex] = [
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    /^[1-9]\d{9}$/,
  ];
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
      if (json.error) {
        setAlert((prev) => {
          return {
            ...prev,
            status: true,
            message: json.error,
            success: json.success,
          };
        });
      } else {
        setAlert((prev) => ({
          ...prev,
          status: true,
          message: json.message,
          success: json.success,
        }));
        setTimeout(() => {
          router.push("login");
        }, 2000);
      }
    } catch (error) {
      throw new Error("faild to send register form data");
    }
  };

  return (
    <BasePage fixed={true}>
      <ToastAlert {...{alert,setAlert}}/>
      <div className="flex flex-row flex-wrap justify-center">
        <Card
          sx={{ padding: 5, minHeight: "60vh" }}
          className="my-5 w-full sm:w-8/12 lg:w-6/12 xl:w-4/12"
        >
          <div className="text-center">
            <Typography
              variant="h4"
              className={`text-[24px] ${styles["form-header"]} mb-4`}
            >
              به BeMe خوش آمدید
            </Typography>
          </div>
          <form action="" method="POST" onSubmit={sendRequest}>
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
            <Button
              variant="contained"
              type="submit"
              size="medium"
              color="success"
              sx={{ marginTop: "16px" }}
              fullWidth
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
              ثبت نام
            </Button>
          </form>
        </Card>
      </div>
    </BasePage>
  );
};

export default RegisterForm;


