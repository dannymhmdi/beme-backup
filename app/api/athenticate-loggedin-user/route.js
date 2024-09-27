import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const cookie = cookies().get("access-token");
  if (!cookie) {
    return NextResponse.json({
      isUserLogin: false,
      status: false,
      message: "ابتدا وارد سایت شوید",
    });
  }
  return NextResponse.json({ isUserLogin: true, status: true });
};
