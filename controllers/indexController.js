import messagesModel from "../models/messagesModel.js";

async function createNewMessage(req, res) {
  try {
    const { user, text } = req.body;
    await messagesModel.create(user, text);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

async function getAllMessages(req, res) {
  try {
    const messages = await messagesModel.getAll();
    res.render("index", { messages });
  } catch (err) {
    console.log(err);
  }
}

export { getAllMessages, createNewMessage };
