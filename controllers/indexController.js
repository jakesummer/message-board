import db from "../db/queries.js";
import formatDate from "../utils/formatDate.js";

async function createNewMessage(req, res) {
  try {
    const { user, text } = req.body;
    await db.insertMessage(user, text);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

async function getAllMessages(req, res) {
  try {
    const data = await db.getAllMessages();
    const messages = data.map((m) => ({
      id: m.id,
      text: m.message,
      user: m.username,
      added: formatDate(new Date(m.added)),
      hearts: m.hearts,
    }));
    res.render("index", { messages });
  } catch (err) {
    console.log(err);
  }
}

async function heartMessage(req, res) {
  const { id } = req.params;
  const result = await db.addHeart(id);

  if (result.rowCount === 0) {
    res.status(404).json({ error: "Message not found" });
    return;
  }

  res.status(200).json({ success: true });
}

export { getAllMessages, createNewMessage, heartMessage };
