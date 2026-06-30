import messagesModel from "../models/messagesModel.js";

async function getAllMessages(req, res) {
  try {
    const messages = await messagesModel.getAll();
    res.render("index", { messages });
  } catch (err) {
    console.log(err);
  }
}

export { getAllMessages };
