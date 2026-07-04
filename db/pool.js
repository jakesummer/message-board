import fs from "node:fs";
import process from "node:process";
import { Pool } from "pg";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}

const isProduction = process.env.NODE_ENV === "prod";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? {
        rejectUnauthorized: false,
      }
    : false,
});

export default pool;
