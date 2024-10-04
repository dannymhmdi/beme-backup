import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken')
export const GET = async (req, res) => {
  const secretKey = "d1ksEjGygH0lsFCqDffok8fvIMXCj+2gJJAiFY5tI4s=";
  const cookie = cookies().get("access-token");
  if (!cookie) {
    return NextResponse.json({
      isUserLogin: false,
      status: false,
      message: "ابتدا وارد سایت شوید",
    });
  }
  const encodedData = jwt.verify(cookie.value, secretKey);
  return NextResponse.json({ isUserLogin: true, status: true,encodedData });
};
