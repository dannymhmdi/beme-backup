import { NextResponse } from "next/server";
const bcrypt = require("bcryptjs");
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
  const { username, password } = bd;

  try {
    const client = await pool.connect();
    const fetch1 = await client.query("SELECT * FROM users WHERE tel = $1", [
      username,
    ]);
    const user = fetch1.rows;

    if (user.length) {
      client.release();
      return NextResponse.json({
        message: "شما قبلا ثبت نام کرده اید",
        status: true,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const dbset1 = await client.query(
      "INSERT INTO users (password, tel) VALUES ($1, $2)",
      [hashedPassword, username]
    );
    client.release();
    return NextResponse.json({
      message: "ثبت نام شما با موفقیت انجام شد",
      status: true,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
