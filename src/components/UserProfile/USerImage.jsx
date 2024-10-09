"use client";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
const UserImage = ({ activeTab, setActiveTab, setIsEditActive }) => {
  const onTabChange = (e) => {
    setActiveTab(e.target.textContent);
  };

  return (
    <div
      className="w-full flex flex-wrap flex-row"
      // style={{ border: "2px solid" }}
    >
      <div className="w-full md:w-6/12 lg:w-4/12 py-2 flex flex-wrap flex-row justify-center">
        <Avatar
          alt="Remy Sharp"
          src="/images/teacher.jpg"
          sx={{ width: 250, height: 250 }}
          className={`animate-jumpIn`}
        />
      </div>
      <div
        className="w-full md:w-5/12 lg:w-6/12 p-2 flex flex-col flex-wrap justify-between"
        // style={{ border: "2px solid red" }}
      >
        <div>
          <Typography variant="body1" className="text-dark">
            دانیال محمدی
          </Typography>
          <Typography variant="body1" className="text-teal-600">
            برنامه نویس وب
          </Typography>
          <Typography variant="body1" className="text-teal-600">
            امتیاز 8/10
          </Typography>
        </div>
        <div className="mt-2s">
          <Button
            variant={activeTab === "اطلاعات کاربر" ? "text" : null}
            sx={{
              marginTop: {
                xs: "16px",
              },
            }}
            onClick={onTabChange}
          >
            اطلاعات کاربر
          </Button>
          <Button
            variant={activeTab === "رزومه کاری" ? "text" : null}
            sx={{
              marginTop: {
                xs: "16px",
              },
            }}
            onClick={onTabChange}
          >
            رزومه کاری
          </Button>
          <Divider />
        </div>
      </div>
      <div className="w-full md:w-1/12 lg:w-2/12 m-3">
        <Button
          variant="contained"
          className="bg-teal-500 hover:bg-teal-700"
          onClick={() => setIsEditActive(true)}
        >
          <EditIcon />
        </Button>
      </div>
    </div>
  );
};

export default UserImage;
