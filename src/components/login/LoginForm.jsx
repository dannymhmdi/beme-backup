'use client'
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle, Password } from "@mui/icons-material";
import { Alert, AlertTitle, Button, List, ListItem } from "@mui/material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const passConditions = ['حداقل یک حرف بزرگ انگلیسی','پسورد باید شامل حداقل 8 کاراکتر','حداقل یک کاراکتر خاص(@,%,..)']

  const onChangeHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const passRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
  const submitHnadler = () => {
    e.preventDefault();
  };
  return (
    <div
      className="lg:w-3/12 sm:w-5/12 w-10/12 flex flex-col flex-wrap items-center sm:px-4 px-2 py-6 bg-teal-50s shadow-2xl rounded-md bg-white"
      //   style={{ backgroundColor: "rgba(20, 20, 20, 0.62)" }}
    >
      <h1 className="font-bold text-lg">ورود</h1>
      <form action="" method="POST" onSubmit={submitHnadler}>
        <div>
          <TextField
            label={"نام کاربری"}
            type={"text"}
            size="small"
            variant="filled"
            name="username"
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
              !passRegex.test(formData.password)
                ? formData.password.length
                  ? "پسورد اشتباه است"
                  : null
                : null
            }
            //   error
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
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
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
            size="medium"
            color="success"
            sx={{ maxWidth: "260px" }}
            className="w-full"
          >
            ورود
          </Button>
        </div>
      </form>
      <Alert severity="warning" className="mt-4 px-0" sx={{direction:'ltr'}}>
        <AlertTitle sx={{direction:'rtl'}} className="px-4">توجه!</AlertTitle>
        {/* <ul>
            <li>پسورد باید شامل حداقل 8 کاراکتر</li>
            <li>حداقل یک حرف بزرگ انگلیسی</li>
            <li>حداقل یک کاراکتر خاص(@,%,..)</li>
        </ul> */}
        <List>
           {passConditions.map((conditon,index) => (
            <ListItem key={index}>{conditon}</ListItem>
           ))}
        </List>
      </Alert>
      {/* <FormControl
        sx={{ m: 1, width: { sm: "240px" }, direction: "ltr" ,backgroundColor:"white",borderRadius:'8px'}}
        variant="filled"
      >
        <InputLabel htmlFor="password-input">رمزعبور</InputLabel>
        <OutlinedInput
          id="password-input"
          type={showPassword ? "text" : "password"}
          sx={{paddingTop:'6px',fontSize:'.9rem'}}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControl
        sx={{ m: 1, width: { sm: "240px" }, direction: "ltr" ,backgroundColor:"white",borderRadius:'8px'}}
        variant="filled"
      >
        <InputLabel htmlFor="username-input">نام کاربری</InputLabel>
        <OutlinedInput
          id="username-input"
          sx={{paddingTop:'6px',fontSize:'.9rem'}}
          type={"text"}
          onChange={(e) => console.log(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              >
                 <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              </IconButton>
            </InputAdornment>
          }
          label="username"
        />
      </FormControl> */}
    </div>
  );
}
