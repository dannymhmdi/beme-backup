import { cookies } from "next/headers";

const connectToDb = require("@/js-modules/connectToDb");
const { NextResponse } = require("next/server");
const jwt = require("jsonwebtoken");

export const GET = async (req,res) => {
  const secretKey = "d1ksEjGygH0lsFCqDffok8fvIMXCj+2gJJAiFY5tI4s=";
  const token = cookies().get('access-token')
  if (!token) {
    return NextResponse.json("token does not set");
  }
  const verified = jwt.verify(token.value, secretKey);
  return NextResponse.json({verified,token});
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
