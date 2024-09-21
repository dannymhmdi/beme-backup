import { getCookie } from "cookies-next";

const connectToDb = require("@/js-modules/connectToDb");
const { NextResponse } = require("next/server");
const jwt = require("jsonwebtoken");

export const GET = async (req,res) => {
  const secretKey = "d1ksEjGygH0lsFCqDffok8fvIMXCj+2gJJAiFY5tI4s=";
  const token = getCookie("token", { req, res });
  console.log('sssss',token)
  if (!token) {
    return NextResponse.json("token does not set");
  }
  const verified = jwt.verify(token, secretKey);
  return NextResponse.json(`token set successfully - ${token}`);
  // try {
  //   const response = await connectToDb(
  //     "select  * from users"
  //   );
  //   return NextResponse.json(response);
  // } catch (err) {
  //   console.log("faild to get users data");
  //   throw new Error("faild to get users data");
  // }
};
