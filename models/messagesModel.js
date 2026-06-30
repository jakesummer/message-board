import * as fs from "node:fs/promises";
import path from "node:path";

const __dirname = import.meta.dirname;
const file = path.join(__dirname, "../data/database.json");

const messagesModel = {
  async create(userName, message) {
    const data = await fs.readFile(file);
    const db = JSON.parse(data);

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    db.push({
      text: message,
      user: userName,
      added: formattedDate,
      hearts: 0,
    });

    await fs.writeFile(file, JSON.stringify(db, null, 2), "utf8");
  },

  async getAll() {
    const data = await fs.readFile(file, "utf8");
    const db = JSON.parse(data);
    return db.messages;
  },
};

export default messagesModel;
