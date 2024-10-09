import { NextResponse } from "next/server";
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

export const POST = async (req, res) => {
  const bd = await req.json();
  try {
    const client = await pool.connect();
    if (!bd.inputData) {
      const fetch1 = await client.query(`select * from users where id = $1`, [
        bd.userId,
      ]);
      client.release();
      const { username, email, image, fields, tel, isadmin, natcode } =
        fetch1?.rows?.[0];
      return NextResponse.json({
        data: { username, email, image, fields, tel, isadmin, natcode },
        status: true,
      });
    } else {
      // const {username, email, image, fields, tel, isadmin, natcode} = bd.inputData
      const fetch2 = await client.query(
        `UPDATE users
         SET email = $1,
             username = $2,
             natcode = $3,
             isadmin = $4
         WHERE id = $5`,
        [bd.inputData?.email, bd.inputData?.username, bd.inputData?.natcode, bd.inputData?.isadmin, bd.userId]
      );
      client.release();
      return NextResponse.json({
        status: true,
        success: true,
        message: "اطلاعات با موفقیت ذخیره شد",
        inputData: bd.inputData,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "خطای سرور مجدد تلاش کنید",
      error: error,
    });
  }
};
