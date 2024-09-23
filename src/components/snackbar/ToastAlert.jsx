"use client";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Slide } from "@mui/material";

function ToastAlert({ alert, setAlert, slideDirection, backgroundColor='rgb(244, 67, 54)'}) {
  const {message,status,success} = alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert((prev) => {
      return {...prev,status:false}
    })
  };

  if(status) setTimeout(() => {
    setAlert((prev) => {
      return {...prev,status:false}
    })
  }, 3000);
  return (
    <div>
      <Snackbar
        open={status}
        autoHideDuration={4000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // onClose={handleClose}
        // message="This Snackbar will be dismissed in 5 seconds."
      >
        <Alert
          onClose={handleClose}
          // severity="error"
          variant="filled"
          sx={{ width: "100%",flexDirection:'row-reverse',backgroundColor:success ?'#00c853' :'rgb(244, 67, 54)'}}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ToastAlert;
