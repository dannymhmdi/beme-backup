const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "shirinjk83",
  port: 5432,
});

const connectToDb1 = async (sql) => {
  try {
    const client = await pool.connect();
    const res = await client.query(sql);
    console.log("res in connecttodb", res.rows);
    client.release();
    return res.rows;
  } catch (err) {
    console.log("error", err);
    throw new Error("faild to connect to database");
  }
};

const connectToDb2 = async (sql) => {
  try {
    const client = await pool.connect();
    const res = await client.query(sql);
    console.log("res in connecttodb", res.rows);
    client.release();
    return res.rows;
  } catch (err) {
    console.log("error", err);
    throw new Error("faild to connect to database");
  }
};

module.exports = {
  connectToDb1,
  connectToDb2,
};
