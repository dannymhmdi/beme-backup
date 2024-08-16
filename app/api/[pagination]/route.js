import { connectToDb1, connectToDb2 } from "@/js-modules/multiple-query";

const { NextResponse } = require("next/server");

export const GET = async (res,req) => {
  const {pagination} = req.params
  const offset = (pagination - 1) * 3
  try {
    // const response = await connectToDb1(`select * from users `)
    const res2 = await connectToDb2(`select * from users limit 3 offset ${offset}`)
    return NextResponse.json(res2);
  } catch (err) {
    console.log("faild to get users data");
    throw new Error("faild to get users data");
  }
};
