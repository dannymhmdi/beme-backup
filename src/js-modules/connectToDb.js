const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

 const connectToDb = async (sql) => {
  try {
    const client = await pool.connect();
    const res = await client.query(sql);
    console.log("res in connecttodb", res.rows);
    client.release();
    return res.rows;
  }
  catch (err) {
    console.log("error", err);
    throw new Error("faild to connect to database");
  }
};
module.exports = connectToDb;

// const connectToDb2 = async (sql,sql2) => {
//   try {
//     const client = await pool.connect();
//     const res = await client.query(sql);
//     console.log("res in connecttodb", res.rows);
//     let res1
//     if (sql2) {
//        res1 = await client.query(sql2)
//     }
//     client.release();
//     return {res:res?.rows,res1:res1?.rows};
//   }
//   catch (err) {
//     console.log("error", err);
//     throw new Error("faild to connect to database");
//   }
// };


// module.exports = {
//   connectToDb,
//   connectToDb2,
// };

