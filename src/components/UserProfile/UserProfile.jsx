"use client";
import React, { useEffect, useState } from "react";
import BasePage from "@/components/base-page/base-page";
import { UserImage, UserInfo, UserSkill } from ".";
import { Card } from "@mui/material";
import { useParams } from "next/navigation";

const UserProfile = ({userData}) => {
  const [activeTab, setActiveTab] = useState("اطلاعات کاربر");
  const [isEditActive, setIsEditActive] = useState(true);
  // const [userData, setUserData] = useState({});
  // const params = useParams()
  // console.log('params',params)
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/userData`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //     // next: { revalidate: 3600 },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setUserData())
  //     .catch((err) => {
  //       throw new Error("faild to fetch userData");
  //     });
  // }, []);
  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      <Card className="flex flex-row flex-wrap w-full animate-fadeRight">
        <UserImage {...{ activeTab, setActiveTab }} />
        <UserSkill />
        <UserInfo {...{ activeTab, setActiveTab,userData ,isEditActive, setIsEditActive }} />
      </Card>
    </BasePage>
  );
};

export default UserProfile;
