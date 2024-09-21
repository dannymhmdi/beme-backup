const { Pool } = require("pg");
import { NextResponse } from "next/server";
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});
export const POST = async (req, res) => {
  // res.send('login response')
  return NextResponse.json('login response')
};
