import { body, matchedData, validationResult } from "express-validator";
import db from "../db/queries.js";
import formatDate from "../utils/formatDate.js";

const collapseWhiteSpace = (str) => str.replace(/[\s\r\n]+/g, " ");

const emptyErr = "cannot be empty";
const lengthErr = (max) => `must be less than ${max} characters`;

const validateMessage = [
  body("user")
    .trim()
    .customSanitizer(collapseWhiteSpace)
    .notEmpty()
    .withMessage(`Name ${emptyErr}`)
    .isLength({ max: 16 })
    .withMessage(`Name ${lengthErr(16)}`),
  body("text")
    .trim()
    .customSanitizer(collapseWhiteSpace)
    .notEmpty()
    .withMessage(`Message ${emptyErr}`)
    .isLength({ max: 255 })
    .withMessage(`Message ${lengthErr(255)}`),
];

const createNewMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    const { user, text } = matchedData(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await db.insertMessage(user, text);
    res.redirect("/");
  },
];

async function getAllMessages(req, res) {
  const data = await db.getAllMessages();
  const messages = data.map((m) => ({
    id: m.id,
    text: m.message,
    user: m.username,
    added: formatDate(new Date(m.added)),
    hearts: m.hearts,
  }));
  res.render("index", { messages });
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
