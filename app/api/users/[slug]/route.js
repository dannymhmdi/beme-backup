// import connectToDb from "@/js-modules/connectToDb";
// import { NextRequest , NextResponse } from "next/server";
// export const GET = async(res) => {
//     const url = res.url.split('/')
//     const userId = url[url.length - 1]
// // console.log('test',url.split('/')[url.split('/').length-1])
// console.log('back',res)
//     try{
//         const response = await connectToDb(`select * from users where id=${userId}`)
//         // console.log('slug in backend',userId)
//         // console.log('data backend',response)
//         const data={response:response[0] , userId , res}
//         console.log('data',data)
//         return NextResponse.json(data)
//     }
//     catch (err){
//         console.log('faild to get singleUser data')
//         throw new Error('faild to get singleUser data')
//     }
// };

const { Pool } = require("pg");
import { NextRequest, NextResponse } from "next/server";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

export const GET = async (req,res) => {
  const url = req.url.split("/");
  const userId = url[url.length - 1];

  try {
    const client = await pool.connect();
    const sql = `select * from users where id=${userId}`
    const response1 = await client.query(`select * from users where id=${userId}`)
    client.release()
    // console.log("Data fetched:", JSON.stringify(response1.rows));
    return NextResponse.json(
      {data:response1.rows,status:true,sql}
    )
  } catch (error) {
    return NextResponse.json({
        error:'خطای پردازش',
        status:false
    })
  }
};
