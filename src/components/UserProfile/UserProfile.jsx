"use client";
import React, { useState } from "react";
import BasePage from "@/components/base-page/base-page";
import { UserImage, UserInfo, UserSkill } from ".";
import { Card } from "@mui/material";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("اطلاعات کاربر");
  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      <Card className="flex flex-row flex-wrap w-full animate-fadeRight">
        <UserImage {...{ activeTab, setActiveTab }} />
        <UserSkill />
        <UserInfo {...{ activeTab, setActiveTab }} />
      </Card>
      {/* <div className="flex flex-row flex-wrap w-full"> */}

      {/* </div> */}
    </BasePage>
  );
};

export default UserProfile;
