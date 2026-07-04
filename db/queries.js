import pool from "./pool.js";
import getCurrentDate from "../utils/getCurrentDate.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function insertMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, added, hearts) VALUES ($1, $2, $3, 0)",
    [username, message, getCurrentDate()],
  );
}

async function addHeart(id) {
  const result = await pool.query(
    "UPDATE messages SET hearts = hearts + 1 WHERE ID = $1",
    [id],
  );
  return result;
}

const db = {
  getAllMessages,
  insertMessage,
  addHeart,
};

export default db;
