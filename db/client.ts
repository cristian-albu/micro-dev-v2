import { Pool, PoolConfig } from "pg";

export const dbConfig: PoolConfig = {
  connectionString: process.env.DB_CONNECTION_STRING,
};

const pool = new Pool(dbConfig);

pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
