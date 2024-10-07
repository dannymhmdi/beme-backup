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
      const fetch1 = await client.query(`select * from users where id = $1`,[bd.userId])
      client.release()
      const {username,email,image,fields,tel,isadmin,natcode} = fetch1?.rows?.[0]
      return NextResponse.json({username,email,image,fields,tel,isadmin,natcode})
  } catch (error) {}
};
