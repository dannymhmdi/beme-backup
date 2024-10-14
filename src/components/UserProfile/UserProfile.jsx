"use client";
import React, { useEffect, useState } from "react";
import BasePage from "@/components/base-page/base-page";
import { UserImage, UserInfo, UserSkill } from ".";
import { Card } from "@mui/material";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import ToastAlert from "../snackbar/ToastAlert";
const UserProfile = ({ userData, json }) => {
  const [activeTab, setActiveTab] = useState("اطلاعات کاربر");
  const [isEditActive, setIsEditActive] = useState(false);
  const [alert, setAlert] = useState({ status: false, message: "" });
  const userId = useSelector((state) => state.checkLogin.userId);
  const param1 = useParams();

  useEffect(() => {
    if (!json.status) {
      setAlert((prev) => ({ ...prev, status: true, message: json.message }));
    }
  }, []);
  
  if (+param1.slug !== userId) {
    return <h3>شما به این صفحه دسترسی ندارید</h3>;
  }


  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      <ToastAlert {...{ alert, setAlert }} />
      <Card className="flex flex-row flex-wrap w-full animate-fadeRight">
        <UserImage
          {...{ activeTab, setActiveTab, isEditActive, setIsEditActive }}
        />
        <UserSkill />
        <UserInfo
          {...{
            activeTab,
            setActiveTab,
            userData,
            isEditActive,
            setIsEditActive,
          }}
        />
      </Card>
    </BasePage>
  );
};

export default UserProfile;
