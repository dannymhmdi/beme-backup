// 'use client'
import Loading from "app/loading";
import dynamic from "next/dynamic";
const UserProfile = dynamic(
  () => import("@/components/UserProfile/UserProfile"),
  {
    loading: () => <Loading />,
  }
);

import React from "react";

const SingleUserProfile = () => {
  return <UserProfile />;
};

export default SingleUserProfile;
