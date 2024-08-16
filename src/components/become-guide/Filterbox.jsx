"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const Filterbox = () => {
  const [openMeetingBox, setOpenMeetingBox] = useState(false);
  const [openPersonBox, setOpenPersonBox] = useState(false);
  const [formValues, setFormValues] = useState({});
  console.log("formValues", formValues);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenMeetings = () => {
    setOpenMeetingBox(true);
    setOpenPersonBox(false);
  };
  const handleClickOpenPersons = () => {
    setOpenPersonBox(true);
    setOpenMeetingBox(false);
  };
  const handleCloseMeetings = () => {
    setOpenMeetingBox(false);
  };
  const handleClosePersons = () => {
    setOpenPersonBox(false);
  };
  return (
    <div className=" py-3 ps-2 relative">
      <button
        className="bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300"
        onClick={handleClickOpenMeetings}
      >
        تاریخ
      </button>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            position: { md: "absolute" },
            // top: { md: "16%" ,xl:"15%"},
            top: { md: "18%", xl: "16.8%" },
            right: { md: 0 },
          },
        }}
        fullScreen={fullScreen}
        open={openMeetingBox}
        onClose={handleCloseMeetings}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log("formdata", formData);
            setFormValues(formJson);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="file"
            name="file"
            label="فایل مورد نظر را اضافه کنید"
            type="file"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="text"
            name="text"
            label="نام "
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="رمز"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMeetings}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      <button
        className="bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300"
        onClick={handleClickOpenPersons}
      >
        اشخاص
      </button>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            position: { md: "absolute" },
            // top: { md: "16%" ,xl:"15%"},
            top: { md: "18%", xl: "16.8%" },
            right: { md: 0 },
          },
        }}
        fullScreen={fullScreen}
        open={openPersonBox}
        onClose={handleClosePersons}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log("email", formJson);
            setFormValues(formJson);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="file"
            name="file"
            label="فایل مورد نظر را اضافه کنید"
            type="file"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="text"
            name="text"
            label="نام "
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="رمز"
            type="password"
            fullWidth
            variant="standard"
          />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
          reiciendis magnam sed deserunt voluptas, possimus id, minima unde
          laboriosam expedita maxime neque quis, consequuntur pariatur aperiam
          repudiandae in doloribus!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePersons}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* <button className={`bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300`}>
        دسته بندی
      </button> */}
    </div>
  );
};

export default Filterbox;
