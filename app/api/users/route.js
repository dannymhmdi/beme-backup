const connectToDb = require("@/js-modules/connectToDb");
const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const response = await connectToDb(
      "select  * from users"
    );
    return NextResponse.json(response);
  } catch (err) {
    console.log("faild to get users data");
    throw new Error("faild to get users data");
  }
};
