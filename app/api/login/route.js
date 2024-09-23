const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

export const POST = async (req, res) => {
  const { username, password } = await req.json();
  try {
    const client = await pool.connect();
    const fetch1 = await client.query(`select * from users where tel = $1`, [
      username,
    ]);

    client.release();

    const user = fetch1.rows;
    // return NextResponse.json({error:'کاربری با این شماره یافت نشد',status:false,success:false,user})
    if (!user.length) {
      return NextResponse.json({
        error: "کاربری با این شماره یافت نشد",
        status: false,
        success: false,
      });
    }
    const [userPass, userId] = [user?.[0]?.password, user?.[0]?.id];
    const isMatch = await bcrypt.compare(password, userPass);
    if (!isMatch) {
      return NextResponse.json({
        error: "رمزعبور اشتباه است",
        status: false,
        success: false,
      });
    }


    const secretKey = "d1ksEjGygH0lsFCqDffok8fvIMXCj+2gJJAiFY5tI4s=";
    const token = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });

    cookies().set('access-token',token,{
      req,
      maxAge:3600,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/"
    })
    return NextResponse.json({
      message: "با موفقیت وارد شدید",
      success: true,
      status: true,
      token
    });
  } catch (error) {
    return NextResponse.json("error in check user");
  }
};
