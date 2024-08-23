// 'use client'
import SingleUserCard from "@/components/SingleUserPage/SingleUserCard";
import Image from "next/image";
import React from "react";

const SingleUserPage = async ({ params }) => {
  const { slug } = params;
  console.log("slug", params);
  const getSingleUser = async (id) => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  };
  const singleUser = await getSingleUser(slug);

  console.log("singleUser", singleUser);
  const { username, email, natcode, id, image } = singleUser.data[0];
  return (
    <>
      {/* <BasePage fixed={true} className={" bg-white px-0"}> */}
      <SingleUserCard singleUserData={singleUser?.data[0]}></SingleUserCard>
          <div className="relative h-11">
            <h1>{email}</h1>
            <h1>userID:{id}</h1>
          </div>
      {/* </BasePage> */}
    </>
  );
};

export default SingleUserPage;
