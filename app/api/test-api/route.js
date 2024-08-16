const { Pool } = require("pg");
import next from "next";
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

export const POST = async (req, res) => {
  const bd = await req.json();
  const { fields, currentPage } = bd;
  const offset = (currentPage - 1) * 6;
  if (fields) {
    fields.forEach((field) => parseInt(field));
  }
  try {

    const client = await pool.connect();
    const data = bd?.fields
      ? await client.query(
          `SELECT * FROM users WHERE fields && Array[${fields}] limit 6 offset ${offset}`
        )
      : await client.query(`select * from users limit 6 offset ${offset}`);
      
    const totalItems = bd?.fields
      ? await client.query(
          `select count(*) from users where fields && Array[${fields}]`
        )
      : await client.query(`select count(*) from users`);
   
    client.release();
    // ghkf;

    return NextResponse.json({
      "data-provider": {
        apiData: data.rows,
        bd,
        status: true,
        totalItems: parseInt(totalItems?.rows?.[0]?.count),
        query: `SELECT * FROM users WHERE fields && Array[${fields}]`,
      },
    });
  } catch (err) {
    return NextResponse.json({
      error: "خطای پردازش",
      status: false,
      query: `SELECT * FROM users WHERE fields && Array[${fields}]`,
      fields,
    });
  }
};
