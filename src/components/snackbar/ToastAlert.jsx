"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Slide } from "@mui/material";

function ToastAlert({ message, error, setError, slideDirection, color }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError((prev) => {
      return {...prev,status:false}
    })
  };
console.log('error in toast',error)
  return (
    <div>
      <Snackbar
        open={error}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      >
        <Alert
          onClose={handleClose}
          // severity="error"
          variant="filled"
          sx={{ width: "100%",flexDirection:'row-reverse',backgroundColor:'rgb(244, 67, 54)'}}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ToastAlert;
