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
  let fields = [];
  if (bd.inputData?.fields && bd.inputData.fields.length) {
    for (const field of bd.inputData?.fields) {
      fields.push(field.value);
    }
  }

  try {
    const client = await pool.connect();
    if (!bd.inputData) {
      const fetch1 = await client.query(`select * from users where id = $1`, [
        bd.userId,
      ]);
      client.release();
      const { username, email, image, fields, tel, isadmin, natcode } =
        fetch1?.rows?.[0];
      const findFields = names.filter((field) => fields.indexOf(field.value) >= 0);
    //  const serializedFields = findFields.map(v => ({
    //   value: v.value,
    //   label:v.label
    //  }))
      return NextResponse.json({
        data: { username, email, image, fields:findFields, tel, isadmin, natcode },
        status: true,
        findFields
      });
    } else {
      const fetch2 = await client.query(
        `UPDATE users
         SET email = $1,
             username = $2,
             natcode = $3,
             isadmin = $4,
             tel = $5,
             fields = $6
         WHERE id = $7`,
        [
          bd.inputData?.email,
          bd.inputData?.username,
          bd.inputData?.natcode,
          bd.inputData?.isadmin,
          bd.inputData?.tel,
          fields,
          bd.userId,
        ]
      );
      client.release();
      return NextResponse.json({
        status: true,
        success: true,
        message: "اطلاعات با موفقیت ذخیره شد",
        inputData: bd.inputData,
        fields,
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

export const names = [
  { value: 0, label: "هنر و طراحی" },
  { value: 1, label: "بیزینس" },
  { value: 2, label: "سرگرمی" },
  { value: 3, label: "کشاورزی" },
  { value: 4, label: "مد و فشن" },
  { value: 5, label: "غذا و نوشیدنی" },
  { value: 6, label: "تاریخ" },
  { value: 7, label: "موسیقی" },
  { value: 8, label: "طبیعت" },
  { value: 9, label: "ورزش" },
  { value: 10, label: "IT" },
];
