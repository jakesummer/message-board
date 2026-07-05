#! /usr/bin/env node

import process from "node:process";
import fs from "node:fs";
import { Client } from "pg";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}

const isProduction = process.env.NODE_ENV === "prod";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 50 ),
  message VARCHAR ( 300 ),
  added DATE,
  hearts INTEGER
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction
      ? {
          rejectUnauthorized: false,
        }
      : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
