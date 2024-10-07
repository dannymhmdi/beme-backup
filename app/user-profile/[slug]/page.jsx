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

const SingleUserProfile = async ({ params }) => {
  const userId = params.slug;
  const response = await fetch(`http://localhost:3000/api/userData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({userId}),
    cache:'no-store'
  });
  const userData = await response.json();
  console.log('userData',userData)

  return <UserProfile {...{userData}}/>;
};

export default SingleUserProfile;
 