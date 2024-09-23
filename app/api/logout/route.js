import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = (req, res) => {
  cookies().delete("access-token");
  return NextResponse.json({
    status: true,
    message: "خروج از اکانت با موفقیت انجام شد",
    success: true,
  });
};
