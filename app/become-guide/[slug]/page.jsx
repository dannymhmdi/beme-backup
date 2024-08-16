import connectToDb from "@/js-modules/connectToDb";
import Image from "next/image";
import React from "react";

const SingleUserPage = async ({ params }) => {
  const { slug } = params;
  console.log("slug", params);
  const getSingleUser = async (id) => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {cache: 'no-store'});
    const data = await response.json();
    return data;
  };
  const singleUser = await getSingleUser(slug);

  console.log("singleUser", singleUser);
 const {username,email,natcode,id , image} = singleUser.data[0]
  return (
    <>
      <div className="relative h-11">
        {/* <Image src={data[0].image[0]} alt="userimage" fill/> */}
        <h1>{email}</h1>
        <h1>userID:{id}</h1>
        {/* <Image src={image[0]} width={500} height={500}/> */}
      </div>
    </>
  );
};

export default SingleUserPage;
