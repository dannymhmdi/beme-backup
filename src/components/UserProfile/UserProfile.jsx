'use client'
import React, { useState } from "react";
import  BasePage  from "@/components/base-page/base-page";
import { UserImage, UserInfo, UserSkill } from ".";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("اطلاعات کاربر");
  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      <div className="flex flex-row flex-wrap w-full">
        <UserImage {...{activeTab,setActiveTab}}/>
        <UserSkill/>
        <UserInfo {...{activeTab,setActiveTab}}/>
      </div>
    </BasePage>
 
   
  );
};

export default UserProfile;
